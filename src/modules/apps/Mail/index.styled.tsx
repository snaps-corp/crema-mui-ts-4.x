import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const MailDetailViewWrapper = styled(Box)(({ theme }) => {
  return {
    transition: 'all 0.5s ease',
    transform: 'translateX(100%)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    opacity: 0,
    visibility: 'hidden',
    backgroundColor: theme.palette.background.paper,
    '&.show': {
      transform: 'translateX(0)',
      opacity: 1,
      visibility: 'visible',
    },
  };
});
