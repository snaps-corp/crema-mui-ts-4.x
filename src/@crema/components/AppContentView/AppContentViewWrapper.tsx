import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

type AppContentViewWrapperProps = {
  children: ReactNode;
};

const AppContentViewWrapper: React.FC<AppContentViewWrapperProps> = ({
  children,
  ...rest
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        height: '100%',
        maxWidth: { xl: 1650 },
        mx: { xl: 'auto' },
        width: { xl: '100%' },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default AppContentViewWrapper;
