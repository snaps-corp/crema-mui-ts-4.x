import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Index from '../../../ChatSideBar/UserInfo';
import Box from '@mui/material/Box';
import { alpha, Checkbox, IconButton } from '@mui/material';
import IntlMessages from '@crema/helpers/IntlMessages';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppConfirmDialog from '@crema/components/AppConfirmDialog';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import AppTooltip from '@crema/components/AppTooltip';
import { ConnectionType } from '@crema/types/models/apps/Chat';

const ChatHeaderWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingLeft: 10,
  paddingRight: 10,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  '& .user-info': {
    width: 'calc(100% - 195px)',
    [theme.breakpoints.up('md')]: {
      width: 'calc(100% - 216px)',
    },
  },
}));
type HeaderProps = {
  selectedUser: ConnectionType;
  deleteConversation: () => void;
};

const Header = ({ selectedUser, deleteConversation }: HeaderProps) => {
  const [isMoreIcon, onOpenMoreIcon] = useState<EventTarget | null>(null);
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const onViewMoreOpen = (
    event:
      | React.MouseEvent<HTMLAnchorElement>
      | React.MouseEvent<HTMLButtonElement>,
  ) => {
    onOpenMoreIcon(event?.currentTarget);
  };

  const onViewMoreClose = () => {
    onOpenMoreIcon(null);
  };

  const toggleDeleteDialog = () => {
    onViewMoreClose();
    setDeleteDialogOpen(!isDeleteDialogOpen);
  };

  const onDeleteConversation = () => {
    deleteConversation();
    toggleDeleteDialog();
  };

  return (
    <ChatHeaderWrapper>
      <Index user={selectedUser} showStatus={true} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <AppTooltip title={<IntlMessages id='chat.call' />}>
          <Box
            component='span'
            sx={{
              ml: { xs: 2, md: 3.5 },
              color: 'text.disabled',
            }}
          >
            <IconButton
              sx={{
                backgroundColor: (theme) =>
                  alpha(theme.palette.primary.main, 0.05),
                color: (theme) => theme.palette.text.secondary,
                padding: 2,
              }}
              size='large'
            >
              <PhoneOutlinedIcon />
            </IconButton>
          </Box>
        </AppTooltip>

        <AppTooltip title={<IntlMessages id='wall.videoCall' />}>
          <Box
            component='span'
            sx={{
              ml: { xs: 2, md: 3.5 },
              color: 'text.disabled',
            }}
          >
            <IconButton
              sx={{
                backgroundColor: (theme) =>
                  alpha(theme.palette.primary.main, 0.05),
                color: (theme) => theme.palette.text.secondary,
                padding: 2,
              }}
              size='large'
            >
              <VideocamOutlinedIcon />
            </IconButton>
          </Box>
        </AppTooltip>

        <Box
          component='span'
          sx={{
            ml: { xs: 2, md: 3.5 },
            color: 'text.disabled',
          }}
        >
          <Checkbox
            sx={{
              backgroundColor: (theme) =>
                alpha(theme.palette.warning.main, 0.05),
              color: (theme) => theme.palette.warning.main,
              padding: 2,
              '&.Mui-checked': {
                color: (theme) => theme.palette.warning.main,
              },
            }}
            icon={<StarBorderIcon />}
            checkedIcon={<StarIcon />}
          />
        </Box>

        <AppTooltip title={<IntlMessages id='common.more' />}>
          <Box
            component='span'
            sx={{
              ml: { xs: 2, md: 3.5 },
              color: 'text.disabled',
            }}
          >
            <IconButton
              sx={{
                backgroundColor: (theme) =>
                  alpha(theme.palette.primary.main, 0.05),
                color: (theme) => theme.palette.text.secondary,
                padding: 2,
              }}
              onClick={onViewMoreOpen}
              size='large'
            >
              <MoreVertIcon />
            </IconButton>
          </Box>
        </AppTooltip>
      </Box>

      <Menu
        anchorEl={isMoreIcon as HTMLElement}
        open={Boolean(isMoreIcon)}
        onClose={onViewMoreClose}
      >
        <MenuItem onClick={toggleDeleteDialog}>
          <IntlMessages id='chatApp.deleteConversation' />
        </MenuItem>
        <MenuItem onClick={onViewMoreClose}>
          <IntlMessages id='chatApp.mute' />
        </MenuItem>
        <MenuItem onClick={onViewMoreClose}>
          <IntlMessages id='chatApp.hide' />
        </MenuItem>
      </Menu>

      <AppConfirmDialog
        open={isDeleteDialogOpen}
        onDeny={setDeleteDialogOpen}
        onConfirm={onDeleteConversation}
        title={<IntlMessages id='chatApp.deleteTitle' />}
        dialogTitle={<IntlMessages id='chatApp.deleteContent' />}
      />
    </ChatHeaderWrapper>
  );
};

export default Header;

Header.defaultProps = {};
