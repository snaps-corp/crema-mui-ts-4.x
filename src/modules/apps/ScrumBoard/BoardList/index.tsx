import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IntlMessages from '@crema/helpers/IntlMessages';
import Box from '@mui/material/Box';
import AppGridContainer from '@crema/components/AppGridContainer';
import { Fonts } from '@crema/constants/AppEnums';
import AppInfoView from '@crema/components/AppInfoView';
import { Zoom } from '@mui/material';
import { useInfoViewActionsContext } from '@crema/context/AppContextProvider/InfoViewContextProvider';
import { postDataApi, putDataApi } from '@crema/hooks/APIHooks';
import BoardItem from './BoardItem';
import AddNewBoard from './AddNewBoard';
import AddBoardButton from './AddBoardButton';
import {
  useScrumActionsContext,
  useScrumContext,
} from '../../context/ScrumContextProvider';
import { BoardType } from '@crema/types/models/apps/ScrumbBoard';

const BoardList = () => {
  const navigate = useNavigate();
  const { boardList } = useScrumContext();
  const { setData } = useScrumActionsContext();

  const infoViewActionsContext = useInfoViewActionsContext();

  const [isAddBoardOpen, setAddBoardOpen] = useState(false);

  const [selectedBoard, setSelectedBoard] = useState<BoardType | null>(null);

  const onCloseAddBoardModal = () => {
    setAddBoardOpen(false);
  };

  const onAddButtonClick = () => {
    setSelectedBoard(null);
    setAddBoardOpen(true);
  };

  const onEditButtonClick = (board: BoardType) => {
    setSelectedBoard(board);
    setAddBoardOpen(true);
  };

  const onAddBoard = (name: string) => {
    if (selectedBoard) {
      const board = { ...selectedBoard, name };
      putDataApi('/api/scrumboard/edit/board', infoViewActionsContext, {
        board,
      })
        .then(() => {
          infoViewActionsContext.showMessage('Board Edited Successfully!');
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });
    } else {
      postDataApi<BoardType[]>(
        '/api/scrumboard/add/board',
        infoViewActionsContext,
        {
          board: { name },
        },
      )
        .then((data) => {
          setData(data);
          infoViewActionsContext.showMessage('Board Added Successfully!');
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });
    }
  };

  const onViewBoardDetail = (board: BoardType) => {
    navigate(`/apps/scrum-board/${board.id}`);
  };

  return (
    <>
      <Zoom in mountOnEnter unmountOnExit>
        <Box
          sx={{
            pt: 4,
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
          }}
        >
          <Box
            component='h2'
            sx={{
              my: { xs: 5, sm: 5, xl: 8 },
              color: 'text.primary',
              fontWeight: Fonts.BOLD,
              textAlign: 'center',
              fontSize: 16,
            }}
          >
            <IntlMessages id='scrumboard.scrumboardApp' />
          </Box>
          <AppGridContainer
            sx={{
              justifyContent: 'center',
            }}
          >
            {boardList && boardList.length > 0
              ? boardList.map((board) => {
                  return (
                    <BoardItem
                      key={board.id}
                      board={board}
                      onEditButtonClick={onEditButtonClick}
                      onViewBoardDetail={onViewBoardDetail}
                    />
                  );
                })
              : null}
            <AddBoardButton onAddButtonClick={onAddButtonClick} />
          </AppGridContainer>
        </Box>
      </Zoom>

      {isAddBoardOpen ? (
        <AddNewBoard
          isAddBoardOpen={isAddBoardOpen}
          onCloseAddBoardModal={onCloseAddBoardModal}
          onAddBoard={onAddBoard}
          selectedBoard={selectedBoard}
        />
      ) : null}
      <AppInfoView />
    </>
  );
};

export default BoardList;
