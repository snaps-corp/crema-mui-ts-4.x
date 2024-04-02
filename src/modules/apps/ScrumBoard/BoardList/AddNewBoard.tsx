import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Fonts } from '@crema/constants/AppEnums';
import Box from '@mui/material/Box';
import { BoardType } from '@crema/types/models/apps/ScrumbBoard';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  // eslint-disable-next-line no-undef
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

type Props = {
  isAddBoardOpen: boolean;
  onCloseAddBoardModal: () => void;
  onAddBoard: (boardName: string) => void;
  selectedBoard: BoardType | null;
};

const AddNewBoard = ({
  isAddBoardOpen,
  onCloseAddBoardModal,
  onAddBoard,
  selectedBoard,
}: Props) => {
  const [boardName, setBoardName] = useState(() =>
    selectedBoard ? selectedBoard.name : '',
  );

  const onClickAddButton = () => {
    if (boardName !== '') {
      onAddBoard(boardName);
      setBoardName('');
      onCloseAddBoardModal();
    }
  };

  return (
    <Dialog
      open={isAddBoardOpen}
      onClose={() => onCloseAddBoardModal()}
      aria-labelledby='simple-modal-title'
      TransitionComponent={Transition}
      aria-describedby='simple-modal-description'
      sx={{
        '& .MuiDialog-paperWidthSm': {
          maxWidth: 600,
          width: '100%',
        },
        '& .MuiTypography-h6': {
          fontWeight: Fonts.LIGHT,
        },
      }}
    >
      <Card
        sx={{
          padding: '32px 40px',
        }}
      >
        <TextField
          fullWidth
          margin='normal'
          label={<IntlMessages id='scrumboard.boardTitle' />}
          value={boardName}
          onChange={(event) => setBoardName(event.target.value)}
        />
        <Box
          sx={{
            mt: 3,
            textAlign: 'right',
          }}
        >
          <Button
            variant='outlined'
            sx={{
              paddingRight: 8,
              paddingLeft: 8,
            }}
            onClick={onClickAddButton}
          >
            <IntlMessages id='common.add' />
          </Button>
        </Box>
      </Card>
    </Dialog>
  );
};

export default AddNewBoard;

AddNewBoard.defaultProps = {
  selectedBoard: null,
};
