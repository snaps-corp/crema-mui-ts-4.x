import AppCard from "@crema/components/AppCard";
import { useIntl } from "react-intl";
import AppScrollbar from "@crema/components/AppScrollbar";
import AppList from "@crema/components/AppList";
import NotificationCell from "./NotificationCell";
import { NotificationType } from "@crema/types/models/dashboards/HealthCare";

type Props = {
  data: NotificationType[];
};

const Notifications = ({ data }: Props) => {
  const { messages } = useIntl();
  return (
    <AppCard
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
      title={messages["healthCare.notification"] as string}
      action={messages["common.viewAll"] as string}
    >
      <AppScrollbar style={{ maxHeight: 280 }}>
        <AppList
          data={data}
          renderRow={(notification) => (
            <NotificationCell
              key={notification.id}
              notification={notification}
            />
          )}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default Notifications;
