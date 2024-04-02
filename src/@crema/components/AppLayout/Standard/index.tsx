import React, { useEffect, useState } from "react";
import AppSidebar from "./AppSidebar";
import AppContentView from "../../AppContentView";
import AppThemeSetting from "../../AppThemeSetting";
import AppHeader from "./AppHeader";
import clsx from "clsx";
import Box from "@mui/material/Box";
import StandardWrapper from "./StandardWrapper";
import AppFixedFooter from "./AppFixedFooter";
import { useLayoutContext } from "@crema/context/AppContextProvider/LayoutContextProvider";
import { LayoutType } from "@crema/constants/AppEnums";
import StandardContainer from "./StandardContainer";
import { useLocation } from "react-router-dom";
import { RouterConfigData } from "@crema/types/models/Apps";

type Props = {
  routes: React.ReactElement | null;
  routesConfig: RouterConfigData[];
};
const Standard = ({ routes, routesConfig }: Props) => {
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
    <StandardContainer
      className={clsx({
        boxedLayout: layoutType === LayoutType.BOXED,
        framedLayout: layoutType === LayoutType.FRAMED,
      })}
    >
      <StandardWrapper
        className={clsx("standardWrapper", {
          appMainFooter: footer && footerType === "fluid",
          appMainFixedFooter: footer && footerType === "fixed",
        })}
      >
        <AppHeader toggleNavCollapsed={toggleNavCollapsed} />
        <Box className="mainContent">
          <AppSidebar
            routesConfig={routesConfig}
            isNavCollapsed={isNavCollapsed}
            toggleNavCollapsed={toggleNavCollapsed}
          />
          <AppContentView routes={routes} />
          <AppFixedFooter />
        </Box>
        <AppThemeSetting />
      </StandardWrapper>
    </StandardContainer>
  );
};

export default Standard;
