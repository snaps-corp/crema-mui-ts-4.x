import MailsList from "./MailsList";
import MailDetail from "./MailDetail";
import AppsContainer from "@crema/components/AppsContainer";
import MailSidebar from "./MailSideBar";
import { useIntl } from "react-intl";
import { useParams } from "react-router-dom";
import clsx from "clsx";
import { MailDetailViewWrapper } from "./index.styled";
import MailContextProvider from "../context/MailContextProvider";

const Mail = () => {
  const { id } = useParams();
  const { messages } = useIntl();

  return (
    <MailContextProvider>
      <AppsContainer
        title={messages["mailApp.mail"] as string}
        sidebarContent={<MailSidebar />}
      >
        {id ? (
          <MailDetailViewWrapper
            className={clsx({
              show: id,
            })}
          >
            <MailDetail />
          </MailDetailViewWrapper>
        ) : (
          <MailsList />
        )}
      </AppsContainer>
    </MailContextProvider>
  );
};

export default Mail;

Mail.defaultProps = {};
