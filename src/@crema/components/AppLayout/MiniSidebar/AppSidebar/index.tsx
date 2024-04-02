import React from "react";
import clsx from "clsx";
import AppScrollbar from "../../../AppScrollbar";
import MainSidebar from "../../components/MainSidebar";
import Hidden from "@mui/material/Hidden";
import Drawer from "@mui/material/Drawer";
import VerticalNav from "../../components/VerticalNav";
import SidebarWrapper from "./SidebarWrapper";
import UserInfo from "../../components/UserInfo";
import { useSidebarContext } from "@crema/context/AppContextProvider/SidebarContextProvider";
import { RouterConfigData } from "@crema/types/models/Apps";
import { useLayoutContext } from "@crema/context/AppContextProvider/LayoutContextProvider";

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
  const { sidebarTextColor } = useSidebarContext();
  const { footer, footerType } = useLayoutContext();

  return (
    <>
      <Hidden xlUp>
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
          <SidebarWrapper className="mini-sidebar">
            <MainSidebar>
              <UserInfo color={sidebarTextColor} />
              <AppScrollbar
                sx={{
                  py: 2,
                  height: "calc(100vh - 70px) !important",
                }}
                scrollToTop={false}
              >
                <VerticalNav routesConfig={routesConfig} />
              </AppScrollbar>
            </MainSidebar>
          </SidebarWrapper>
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <SidebarWrapper className="mini-sidebar">
          <MainSidebar>
            <UserInfo color={sidebarTextColor} />
            <AppScrollbar
              className={clsx({
                "has-footer-fixed": footer && footerType === "fixed",
              })}
              sx={{
                py: 2,
                height: "calc(100vh - 70px) !important",
                "&.has-footer-fixed": {
                  height: "calc(100vh - 117px) !important",
                },
              }}
              scrollToTop={false}
            >
              <VerticalNav routesConfig={routesConfig} />
            </AppScrollbar>
          </MainSidebar>
        </SidebarWrapper>
      </Hidden>
    </>
  );
};
export default AppSidebar;
