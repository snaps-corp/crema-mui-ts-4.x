import React, { CSSProperties, ReactNode, useEffect, useState } from 'react';
import AppInfoView from '../AppInfoView';
import { Box, Slide, Theme, Zoom } from '@mui/material';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Card from '@mui/material/Card';

import AppSidebar from './AppSidebar';
import { useLayoutContext } from '@crema/context/AppContextProvider/LayoutContextProvider';
import { Fonts, NavStyle } from '@crema/constants/AppEnums';
import AppContainerWrapper from './AppContainerWrapper';
import { SxProps } from '@mui/system';
import { useLocation } from 'react-router-dom';

type AppsContainerProps = {
  title: string | ReactNode;

  sidebarContent?: ReactNode;
  fullView?: boolean;
  children: ReactNode;
  sxStyle?: SxProps<Theme>;
  cardStyle?: CSSProperties;
};

const AppsContainer: React.FC<AppsContainerProps> = (props) => {
  const { pathname } = useLocation();
  const [isNavCollapsed, setNavCollapsed] = useState(false);
  const toggleNavCollapsed = () => {
    setNavCollapsed(!isNavCollapsed);
  };
  useEffect(() => {
    if (isNavCollapsed) setNavCollapsed(!isNavCollapsed);
  }, [pathname]);

  const { footer } = useLayoutContext();
  const { navStyle } = useLayoutContext();
  const { title, sidebarContent, fullView, children } = props;

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        margin: -4,
        padding: 4,
        ...props.sxStyle,
      }}
    >
      <Box
        sx={{
          marginTop: fullView ? 0 : -4,
          display: 'flex',
          alignItems: 'center',
          mb: {
            xs: fullView ? 4 : 2,
            lg: 4,
          },
          mt: {
            xs: fullView ? 0 : -4,
            lg: 0,
          },
        }}
      >
        {fullView ? null : (
          <Hidden lgUp>
            <IconButton
              edge='start'
              sx={{
                marginRight: (theme) => theme.spacing(2),
              }}
              color='inherit'
              aria-label='open drawer'
              onClick={toggleNavCollapsed}
              size='large'
            >
              <MenuIcon
                sx={{
                  width: 35,
                  height: 35,
                }}
              />
            </IconButton>
          </Hidden>
        )}
        <Zoom in style={{ transitionDelay: '300ms' }}>
          <Box
            component='h2'
            sx={{
              fontSize: 16,
              color: 'text.primary',
              fontWeight: Fonts.SEMI_BOLD,
            }}
          >
            {title}
          </Box>
        </Zoom>
      </Box>

      <AppContainerWrapper navStyle={navStyle as NavStyle} footer={footer}>
        {sidebarContent ? (
          <AppSidebar
            isAppDrawerOpen={isNavCollapsed}
            footer={footer}
            fullView={fullView}
            sidebarContent={sidebarContent}
            toggleNavCollapsed={toggleNavCollapsed}
          />
        ) : null}

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: {
              xs: '100%',
              lg: `calc(100% - ${fullView ? 0 : 280}px)`,
            },
            pl: {
              lg: props.fullView ? 0 : 8,
            },
          }}
        >
          <Slide direction='left' in mountOnEnter unmountOnExit>
            <Card
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                ...props.cardStyle,
              }}
            >
              {children}
            </Card>
          </Slide>
          <AppInfoView />
        </Box>
      </AppContainerWrapper>
    </Box>
  );
};

export default AppsContainer;
