import { useEffect } from "react";
import { useUrlSearchParams } from "use-url-search-params";
import AppContentView from "@crema/components/AppContentView";
import generateRoutes from "@crema/helpers/RouteGenerator";
import { Layouts } from "@crema/components/AppLayout";
import { useAuthUser } from "@crema/hooks/AuthHooks";
import {
  useLayoutActionsContext,
  useLayoutContext,
} from "@crema/context/AppContextProvider/LayoutContextProvider";
import { useSidebarActionsContext } from "@crema/context/AppContextProvider/SidebarContextProvider";
import {
  anonymousStructure,
  authorizedStructure,
  publicStructure,
} from "../AppRoutes";
import { useRoutes } from "react-router-dom";
import routesConfig from "../AppRoutes/routeconfig";
import { initialUrl } from "@crema/constants/AppConst";

const AppLayout = () => {
  const { navStyle } = useLayoutContext();

  const { user, isAuthenticated } = useAuthUser();
  const { updateNavStyle } = useLayoutActionsContext();
  const { updateMenuStyle, setSidebarBgImage } = useSidebarActionsContext();
  const AppLayout = Layouts[navStyle];
  const [params] = useUrlSearchParams();

  const initURL = params?.redirect ? params?.redirect : initialUrl;
  const loginUrl = `/signin?redirect=${window.location.pathname}`;
  const generatedRoutes = generateRoutes({
    isAuthenticated: isAuthenticated,
    userRole: user?.role,
    publicStructure: publicStructure(initURL as string),
    authorizedStructure: authorizedStructure(loginUrl),
    anonymousStructure: anonymousStructure(initURL as string),
  });
  const routes = useRoutes(generatedRoutes);

  useEffect(() => {
    if (params.layout) updateNavStyle(params.layout as string);
    if (params.menuStyle) updateMenuStyle(params.menuStyle as string);
    if (params.sidebarImage) setSidebarBgImage(true);
  }, [params, setSidebarBgImage, updateNavStyle, updateMenuStyle]);

  console.log("AppLayout", initURL, initialUrl, loginUrl, isAuthenticated);
  return (
    <>
      {isAuthenticated ? (
        <AppLayout routes={routes} routesConfig={routesConfig} />
      ) : (
        <AppContentView routes={routes} />
      )}
    </>
  );
};

export default AppLayout;
