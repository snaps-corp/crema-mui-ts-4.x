import React from "react";
import Drawer from "@mui/material/Drawer";
import Hidden from "@mui/material/Hidden";
import clsx from "clsx";
import AppScrollbar from "../../AppScrollbar";
import VerticalNav from "../components/VerticalNav";
import MainSidebar from "../components/MainSidebar";
import { useLayoutContext } from "@crema/context/AppContextProvider/LayoutContextProvider";
import UserInfo from "../components/UserInfo";
import { useSidebarContext } from "@crema/context/AppContextProvider/SidebarContextProvider";
import { RouterConfigData } from "@crema/types/models/Apps";

type AppSidebarProps = {
  position?: "left" | "top" | "right" | "bottom";
  variant?: string;
  routesConfig: RouterConfigData[];
  isNavCollapsed: boolean;
  toggleNavCollapsed: () => void;
};

const AppSidebar: React.FC<AppSidebarProps> = ({
  variant = "",
  position = "left",
  toggleNavCollapsed,
  isNavCollapsed,
  routesConfig,
}) => {
  const { footer, footerType } = useLayoutContext();

  const { sidebarTextColor } = useSidebarContext();

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor={position}
          open={isNavCollapsed}
          onClose={() => toggleNavCollapsed()}
          classes={{
            root: clsx(variant),
            paper: clsx(variant),
          }}
          style={{ position: "absolute" }}
        >
          <MainSidebar>
            <UserInfo color={sidebarTextColor} />
            <AppScrollbar
              sx={{
                py: 2,
                height: "calc(100vh - 70px) !important",
                borderTop: (theme: { palette: { divider: string } }) =>
                  `solid 1px ${theme.palette.divider}`,
                mt: 0.5,
              }}
            >
              <VerticalNav routesConfig={routesConfig} />
            </AppScrollbar>
          </MainSidebar>
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <MainSidebar>
          <UserInfo color={sidebarTextColor} />
          <AppScrollbar
            className={clsx({
              "has-footer-fixed": footer && footerType === "fixed",
            })}
            sx={{
              py: 2,
              height: "calc(100vh - 70px) !important",
              borderTop: (theme: { palette: { divider: string } }) =>
                `solid 1px ${theme.palette.divider}`,
              mt: 0.5,
              "&.has-footer-fixed": {
                height: {
                  xs: "calc(100vh - 117px) !important",
                  xl: "calc(100vh - 127px) !important",
                },
              },
            }}
          >
            <VerticalNav routesConfig={routesConfig} />
          </AppScrollbar>
        </MainSidebar>
      </Hidden>
    </>
  );
};

export default AppSidebar;
