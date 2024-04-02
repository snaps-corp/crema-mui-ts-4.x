import React, { ReactNode } from 'react';
import Hidden from '@mui/material/Hidden';
import Drawer from '@mui/material/Drawer';
import Card from '@mui/material/Card';
import { Box, drawerClasses, Slide } from '@mui/material';

type AppSidebarProps = {
  isAppDrawerOpen?: boolean;
  footer?: boolean;
  fullView?: boolean;
  sidebarContent: ReactNode;
  toggleNavCollapsed: () => void;
};

const AppSidebar: React.FC<AppSidebarProps> = (props) => {
  const { isAppDrawerOpen, sidebarContent, toggleNavCollapsed } = props;
  return (
    <Slide direction='right' in mountOnEnter unmountOnExit>
      <Box
        sx={{
          height: '100%',
          width: {
            lg: 280,
          },
        }}
      >
        <Hidden lgUp>
          <Drawer
            open={isAppDrawerOpen}
            onClose={toggleNavCollapsed}
            sx={{
              position: 'absolute',
              [`& .${drawerClasses.paper}`]: {
                width: 280,
                '& .listItem': {
                  zIndex: 1305,
                },
              },
            }}
          >
            {sidebarContent}
          </Drawer>
        </Hidden>
        <Hidden lgDown>
          <Card style={{ height: '100%' }}>{sidebarContent}</Card>
        </Hidden>
      </Box>
    </Slide>
  );
};

export default AppSidebar;
