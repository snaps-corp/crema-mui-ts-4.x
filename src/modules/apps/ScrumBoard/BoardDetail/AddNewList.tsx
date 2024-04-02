import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import { Fonts } from '@crema/constants/AppEnums';
import IntlMessages from '@crema/helpers/IntlMessages';
import IconButton from '@mui/material/IconButton';

type Props = {
  onAdd: (data: string) => void;
  onCancel: () => void;
};

const AddNewList = (props: Props) => {
  const { onAdd, onCancel } = props;

  const [listName, setListName] = useState('');

  const onClickAddButton = () => {
    if (listName !== '') {
      onAdd(listName);
      setListName('');
    }
  };

  return (
    <Box
      sx={{
        m: 1.25,
        p: 2.5,
        width: 350,
        backgroundColor: 'background.default',
        borderRadius: (theme: any) => theme.cardRadius / 4,
      }}
    >
      <Card
        sx={{
          py: 2,
          px: 6,
          minHeight: 56,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Avatar
            sx={{
              cursor: 'pointer',
              backgroundColor: 'grey.100',
              border: `1px dashed ${grey[400]}`,
            }}
          >
            <AddIcon
              sx={{
                color: 'grey.700',
                fontWeight: Fonts.LIGHT,
              }}
            />
          </Avatar>
          <Box
            sx={{
              ml: 3.5,
              fontWeight: Fonts.MEDIUM,
              fontSize: 15,
            }}
          >
            <IntlMessages id='scrumboard.addAList' />
          </Box>
          <Box
            sx={{
              ml: 'auto',
              textAlign: 'right',
            }}
          >
            <IconButton
              onClick={onCancel}
              sx={{
                p: 2,
                color: (theme) => theme.palette.text.secondary,
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ my: 3 }}>
          <TextField
            sx={{
              '& .MuiInputBase-input': {
                height: 'auto',
              },
            }}
            fullWidth
            label={<IntlMessages id='scrumboard.cardTitle' />}
            value={listName}
            onChange={(event) => setListName(event.target.value)}
          />
        </Box>
        <Box
          sx={{
            my: 3,
          }}
        >
          <Button
            variant='outlined'
            sx={{
              paddingLeft: 6,
              paddingRight: 6,
            }}
            onClick={() => onClickAddButton()}
          >
            <IntlMessages id='common.add' />
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default AddNewList;
