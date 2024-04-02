import clsx from "clsx";
import AppScrollbar from "../../../AppScrollbar";
import MainSidebar from "../../components/MainSidebar";
import Hidden from "@mui/material/Hidden";
import Drawer from "@mui/material/Drawer";
import VerticalNav from "../../components/VerticalNav";
import UserMiniHeaderSidebarWrapper from "./UserMiniHeaderSidebarWrapper";
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
          <UserMiniHeaderSidebarWrapper className="user-mini-header-sidebar">
            <MainSidebar>
              <AppScrollbar
                sx={{
                  py: 2,
                }}
                scrollToTop={false}
              >
                <VerticalNav routesConfig={routesConfig} />
              </AppScrollbar>
            </MainSidebar>
          </UserMiniHeaderSidebarWrapper>
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <UserMiniHeaderSidebarWrapper className="user-mini-header-sidebar">
          <MainSidebar>
            <AppScrollbar
              className={clsx({
                "has-footer-fixed": footer && footerType === "fixed",
              })}
              sx={{
                py: 2,
                height: "calc(100vh - 71px) !important",
                "&.has-footer-fixed": {
                  height: {
                    xs: "calc(100vh - 119px) !important",
                    xl: "calc(100vh - 131px) !important",
                  },
                },
              }}
              scrollToTop={false}
            >
              <VerticalNav routesConfig={routesConfig} />
            </AppScrollbar>
          </MainSidebar>
        </UserMiniHeaderSidebarWrapper>
      </Hidden>
    </>
  );
};
export default AppSidebar;
