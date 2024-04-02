import AppCard from "@crema/components/AppCard";
import { useIntl } from "react-intl";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AppScrollbar from "@crema/components/AppScrollbar";
import NotificationCell from "./NotificationCell";
import AppList from "@crema/components/AppList";
import { NotificationsType } from "@crema/types/models/dashboards/Ecommerce";

type Props = {
  notifications: NotificationsType[];
};

const Notifications = (props: Props) => {
  const { messages } = useIntl();

  return (
    <AppCard
      contentStyle={{ px: 0 }}
      title={messages["eCommerce.notifications"] as string}
      action={
        <IconButton
          sx={{
            height: 30,
            width: 30,
          }}
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={() => {}}
        >
          <MoreVertIcon />
        </IconButton>
      }
    >
      <AppScrollbar
        sx={{
          maxHeight: 386,
        }}
      >
        <AppList
          data={props.notifications}
          renderRow={(item) => <NotificationCell key={item.id} item={item} />}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default Notifications;
