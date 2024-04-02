import AppLogo from "../AppLogo";
import { useSidebarContext } from "@crema/context/AppContextProvider/SidebarContextProvider";
import SidebarHeaderWrapper from "./SidebarHeaderWrapper";
import SidebarUserInfo from "./SidebarUserInfo";

const SidebarHeader = () => {
  const { sidebarTextColor } = useSidebarContext();

  return (
    <SidebarHeaderWrapper>
      <AppLogo color={sidebarTextColor} />
      <SidebarUserInfo />
    </SidebarHeaderWrapper>
  );
};

export default SidebarHeader;
