import React from "react";
import clsx from "clsx";
import AppScrollbar from "../../../AppScrollbar";
import MainSidebar from "../../components/MainSidebar";
import Drawer from "@mui/material/Drawer";
import VerticalNav from "../../components/VerticalNav";
import StandardSidebarWrapper from "./StandardSidebarWrapper";
import UserInfo from "../../components/UserInfo";
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
  const { sidebarTextColor } = useSidebarContext();

  return (
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
      <StandardSidebarWrapper className="standard-sidebar">
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
      </StandardSidebarWrapper>
    </Drawer>
  );
};
export default AppSidebar;
