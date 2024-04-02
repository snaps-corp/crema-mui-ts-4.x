import React, { useState } from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CheckIcon from '@mui/icons-material/Check';
import Box from '@mui/material/Box';
import { Fonts } from '@crema/constants/AppEnums';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppConfirmDialog from '@crema/components/AppConfirmDialog';
import IconButton from '@mui/material/IconButton';

type Props = {
  name: string;
  id: number;
  onDelete: (data: number) => void;
  updateTitle: (data: string) => void;
};
const ListHeader = (props: Props) => {
  const { name, id, onDelete, updateTitle } = props;

  const [isEditListName, setEditListName] = useState(false);

  const [editedListName, setEditedListName] = useState('');

  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const onDeleteBoardList = () => {
    onDelete(id);
    setDeleteDialogOpen(false);
  };

  const onEditButtonClick = () => {
    setEditedListName(name);
    setEditListName(!isEditListName);
  };

  const onEditListName = () => {
    if (editedListName !== '') {
      updateTitle(editedListName);
      setEditListName(false);
    }
  };

  return (
    <Card
      sx={{
        py: 1.75,
        px: 6,
        mb: 2,
        minHeight: 56,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {!isEditListName ? (
          <>
            <Box
              component='h5'
              sx={{
                fontSize: 15,
                fontWeight: Fonts.MEDIUM,
                width: '100%',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {name}
            </Box>
            <Box
              sx={{
                ml: 'auto',
                mr: -2,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <IconButton
                onClick={onEditButtonClick}
                sx={{
                  color: (theme) => theme.palette.text.secondary,
                }}
              >
                <EditOutlinedIcon />
              </IconButton>
              <IconButton
                onClick={() => setDeleteDialogOpen(true)}
                sx={{
                  color: (theme) => theme.palette.text.secondary,
                }}
              >
                <DeleteOutlinedIcon />
              </IconButton>
            </Box>
          </>
        ) : (
          <>
            <Box
              sx={{
                mr: 3,
              }}
            >
              <TextField
                fullWidth
                label={<IntlMessages id='scrumboard.listTitle' />}
                value={editedListName}
                onChange={(event) => setEditedListName(event.target.value)}
              />
            </Box>
            <Box
              sx={{
                ml: 'auto',
                mr: -2,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <IconButton
                onClick={onEditListName}
                sx={{
                  color: (theme) => theme.palette.text.secondary,
                }}
              >
                <CheckIcon />
              </IconButton>
              <IconButton
                onClick={() => setEditListName(false)}
                sx={{
                  color: (theme) => theme.palette.text.secondary,
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </>
        )}
      </Box>

      {isDeleteDialogOpen ? (
        <AppConfirmDialog
          open={isDeleteDialogOpen}
          onDeny={setDeleteDialogOpen}
          onConfirm={onDeleteBoardList}
          title={<IntlMessages id='scrumboard.deleteMessage' />}
          dialogTitle={<IntlMessages id='common.deleteItem' />}
        />
      ) : null}
    </Card>
  );
};

export default ListHeader;
