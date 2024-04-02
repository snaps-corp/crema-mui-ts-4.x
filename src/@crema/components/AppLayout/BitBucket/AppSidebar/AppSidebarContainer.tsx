import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { useSidebarContext } from '@crema/context/AppContextProvider/SidebarContextProvider';

type AppSidebarContainerProps = {
  children: ReactNode;

  [x: string]: any;
};

const AppSidebarContainer: React.FC<AppSidebarContainerProps> = ({
  children,
  ...rest
}) => {
  const { borderColor } = useSidebarContext();
  return (
    <Box
      sx={{
        pl: 0,
        py: 0,
        transition: 'all 0.5s ease',
        width: 256,
        borderLeft: `solid 1px ${borderColor}`,
        '& .app-sidebar': {
          position: 'relative',
          width: '100%',
          zIndex: 1,
        },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default AppSidebarContainer;
