import ContactListing from "./ContactListing";
import { useIntl } from "react-intl";
import AppsContainer from "@crema/components/AppsContainer";
import SideBarContent from "./ContactSideBar";
import ContactContextProvider from "../context/ContactContextProvider";

const Contact = () => {
  const { messages } = useIntl();
  return (
    <ContactContextProvider>
      <AppsContainer
        title={messages["contactApp.contact"] as string}
        sidebarContent={<SideBarContent />}
      >
        <ContactListing />
      </AppsContainer>
    </ContactContextProvider>
  );
};

export default Contact;
