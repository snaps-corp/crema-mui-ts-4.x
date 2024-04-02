import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import AppContentView from '../../AppContentView';
import AppFixedFooter from './AppFixedFooter';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';
import { useLayoutContext } from '@crema/context/AppContextProvider/LayoutContextProvider';
import AppThemeSetting from '../../AppThemeSetting';
import HorDarkWrapper from './HorDarkWrapper';
import MainContent from './MainContent';
import { LayoutType } from '@crema/constants/AppEnums';
import HorDarkContainer from './HorDarkContainer';
import { useLocation } from 'react-router-dom';
import { RouterConfigData } from '@crema/types/models/Apps';

type Props = {
  routes: React.ReactElement | null;
  routesConfig: RouterConfigData[];
};
const HorDarkLayout = ({ routes, routesConfig }: Props) => {
  const { footer, layoutType, footerType } = useLayoutContext();
  const { pathname } = useLocation();
  const [isNavCollapsed, setNavCollapsed] = useState(false);
  const toggleNavCollapsed = () => {
    setNavCollapsed(!isNavCollapsed);
  };
  useEffect(() => {
    if (isNavCollapsed) setNavCollapsed(!isNavCollapsed);
  }, [pathname]);

  return (
    <HorDarkContainer
      className={clsx({
        boxedLayout: layoutType === LayoutType.BOXED,
        framedLayout: layoutType === LayoutType.FRAMED,
      })}
    >
      <HorDarkWrapper
        className={clsx('horDarkWrapper', {
          appMainFooter: footer && footerType === 'fluid',
          appMainFixedFooter: footer && footerType === 'fixed',
        })}
      >
        <AppSidebar
          routesConfig={routesConfig}
          isNavCollapsed={isNavCollapsed}
          toggleNavCollapsed={toggleNavCollapsed}
        />

        <MainContent>
          <AppHeader
            toggleNavCollapsed={toggleNavCollapsed}
            routesConfig={routesConfig}
          />
          <AppContentView routes={routes} />
          <AppFixedFooter />
        </MainContent>
        <AppThemeSetting />
      </HorDarkWrapper>
    </HorDarkContainer>
  );
};

export default HorDarkLayout;
