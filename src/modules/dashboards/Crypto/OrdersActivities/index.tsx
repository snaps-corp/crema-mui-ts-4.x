import AppCard from "@crema/components/AppCard";
import OrdersActivitiesTable from "./OrdersActivitiesTable";
import { OrdersActivityType } from "@crema/types/models/dashboards/Crypto";
import { useIntl } from "react-intl";

type Props = {
  ordersActivities: OrdersActivityType[];
};
const OrdersActivities = ({ ordersActivities }: Props) => {
  const { messages } = useIntl();

  return (
    <AppCard
      contentStyle={{
        paddingLeft: 0,
        paddingRight: 0,
      }}
      title={messages["dashboard.crypto.ordersActivities"] as string}
      action={messages["common.viewAll"] as string}
    >
      <OrdersActivitiesTable ordersActivities={ordersActivities} />
    </AppCard>
  );
};

export default OrdersActivities;
