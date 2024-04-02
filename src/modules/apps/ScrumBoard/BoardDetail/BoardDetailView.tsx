import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import AppsContent from '@crema/components/AppsContainer/AppsContent';
import 'react-trello-ts';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Board from 'react-trello';
import { Box, useTheme } from '@mui/material';
import { useInfoViewActionsContext } from '@crema/context/AppContextProvider/InfoViewContextProvider';
import { postDataApi, putDataApi } from '@crema/hooks/APIHooks';
import NewListButton from './NewListButton';
import AddNewList from './AddNewList';
import ListHeader from './List/ListHeader';
import AddCardButton from './List/AddCardButton';
import CardDetail from './List/CardDetail';

import AddCard from './List/AddCard';
import {
  BoardType,
  CardListType,
  CardType,
} from '@crema/types/models/apps/ScrumbBoard';

type Props = {
  children: ReactNode;
};

const BoardWrapper = ({ children }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: 1,
        '& .smooth-dnd-container.horizontal': {
          height: 1,
        },
      }}
    >
      {children}
    </Box>
  );
};

type BoardDetailViewProps = {
  boardDetail: BoardType;
  setData: (data: BoardType) => void;
};

const BoardDetailView = (props: BoardDetailViewProps) => {
  const infoViewActionsContext = useInfoViewActionsContext();
  const theme = useTheme();
  const [list, setList] = useState<CardListType | undefined>(undefined);

  const [isAddCardOpen, setAddCardOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
  const { boardDetail, setData } = props;

  const getBoardData = useCallback(() => {
    return {
      ...boardDetail,
      lanes: boardDetail.list,
    };
  }, [boardDetail]);

  const [boardData, setBoardData] = useState(getBoardData());

  useEffect(() => {
    setBoardData(getBoardData());
  }, [boardDetail, getBoardData]);

  const shouldReceiveNewData = (nextData: typeof getBoardData) => {
    setBoardData(nextData);
  };

  const onCloseAddCard = () => {
    setAddCardOpen(false);
  };

  const onClickAddCard = (listId: number) => {
    setList(boardData.lanes!.find((item) => item.id === listId));
    setSelectedCard(null);
    setAddCardOpen(true);
  };

  const onAddList = (name: string) => {
    postDataApi<BoardType>('/api/scrumboard/add/list', infoViewActionsContext, {
      boardId: boardDetail?.id,
      list: {
        name: name,
      },
    })
      .then((data) => {
        setData(data);
        infoViewActionsContext.showMessage('List Added Successfully!');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const getCardById = (lane: CardListType, cardId: number) =>
    lane.cards!.find((item) => item.id === cardId);

  const onEditCardDetail = (cardId: number) => {
    console.log('onEditCardDetail');
    const selectedList = boardData.lanes!.find((item) => {
      const correctCard = item.cards!.find((card) => card.id === cardId);
      if (correctCard) return item;
      return undefined;
    });
    const selectedCard = getCardById(selectedList!, cardId);
    setSelectedCard(selectedCard!);
    setList(selectedList);
    setAddCardOpen(true);
  };

  const handleDragCard = (
    cardId: any,
    sourceLaneId: number,
    targetLaneId: number,
    position: number,
    cardDetails: CardType,
  ) => {
    if (sourceLaneId !== targetLaneId) {
      const boardId = boardDetail.id;
      putDataApi<BoardType>(
        '/api/cards/update/category',
        infoViewActionsContext,
        {
          cardId: cardDetails.id,
          sourceLaneId: sourceLaneId,
          categoryId: targetLaneId,
          position: position,
          boardId: boardId,
        },
      )
        .then((data) => {
          setData(data);
          infoViewActionsContext.showMessage('Card Updated Successfully!');
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });
    }
  };

  const onEditBoardList = (boardId: number, list: CardListType) => {
    putDataApi<BoardType>('/api/scrumboard/edit/list', infoViewActionsContext, {
      boardId: boardId,
      list: list,
    })
      .then((data) => {
        setData(data);
        infoViewActionsContext.showMessage('List Edited Successfully!');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onDeleteSelectedList = (boardId: number, laneId: number) => {
    postDataApi<BoardType>(
      '/api/scrumboard/delete/list',
      infoViewActionsContext,
      {
        boardId: boardId,
        listId: laneId,
      },
    )
      .then((data) => {
        setData(data);
        infoViewActionsContext.showMessage('List Deleted Successfully!');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  return (
    <AppsContent
      sx={{
        flex: 1,
        '& .simplebar-wrapper': {
          my: '0 !important',
          height: '100%',
        },
        '& .simplebar-content': {
          height: '100%',
          maxHeight: '100%',
          py: '0 !important',
        },
      }}
    >
      <Board
        laneStyle={{
          borderRadius: 16,
          maxHeight: '98%',
          backgroundColor: theme.palette.background.default,
          width: 350,
        }}
        editable
        canAddLanes
        data={boardData}
        onDataChange={shouldReceiveNewData}
        handleDragEnd={handleDragCard}
        onCardAdd={(card: any, laneId: number) => {
          onClickAddCard(laneId);
        }}
        onCardClick={(cardId: number) => {
          onEditCardDetail(cardId);
        }}
        onLaneAdd={(name: string) => onAddList(name)}
        onLaneUpdate={(laneId: number, data: CardType) => {
          const lane = boardData.lanes!.find((item) => item.id === laneId);
          onEditBoardList(boardDetail.id!, {
            ...lane,
            name: data.title,
          } as CardListType);
        }}
        onLaneDelete={(laneId: number) =>
          onDeleteSelectedList(boardDetail.id!, laneId)
        }
        t={(listId: number) => onClickAddCard(listId)}
        components={{
          BoardWrapper: BoardWrapper,
          Card: CardDetail,
          LaneHeader: ListHeader,
          AddCardLink: AddCardButton,
          NewCardForm: AddCard,
          NewLaneForm: AddNewList,
          NewLaneSection: NewListButton,
        }}
      />
      <AddCard
        isAddCardOpen={isAddCardOpen}
        onCloseAddCard={onCloseAddCard}
        list={list}
        board={boardDetail}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
        setData={setData}
      />
    </AppsContent>
  );
};

export default BoardDetailView;
