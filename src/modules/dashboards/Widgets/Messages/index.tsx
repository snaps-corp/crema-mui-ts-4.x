import CloseIcon from "@mui/icons-material/Close";
import AppList from "@crema/components/AppList";
import AppCard from "@crema/components/AppCard";
import { useIntl } from "react-intl";
import AppScrollbar from "@crema/components/AppScrollbar";
import MessageItem from "@crema/components/AppMessages/MessageItem";
import { MessagesType } from "@crema/types/models/dashboards/Widgets";

type MessagesProps = {
  data: MessagesType[];
};

const Messages: React.FC<MessagesProps> = ({ data }) => {
  const messageData = data;

  const { messages } = useIntl();
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={messages["dashboard.messages"] as string}
      contentStyle={{ px: 0 }}
      action={
        <CloseIcon
          sx={{
            cursor: "pointer",
          }}
        />
      }
    >
      <AppScrollbar
        sx={{
          height: 263,
        }}
      >
        <AppList
          data={messageData}
          renderRow={(item) => {
            return <MessageItem key={item.id} item={item} />;
          }}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default Messages;
