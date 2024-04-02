import React, { ReactNode } from 'react';
import Grid from '@mui/material/Grid';
import { Theme, useMediaQuery } from '@mui/material';

type AppGridContainerProps = {
  children: ReactNode;

  [x: string]: any;
};

const AppGridContainer: React.FC<AppGridContainerProps> = ({
  children,
  ...others
}) => {
  const isMDDown = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md'),
  );
  return (
    <Grid container spacing={isMDDown ? 5 : 8} {...others}>
      {children}
    </Grid>
  );
};

export default AppGridContainer;
