import AppCard from "@crema/components/AppCard";
import { useIntl } from "react-intl";
import AppSelect from "@crema/components/AppSelect";

import OrderTable from "./OrderTable";
import { RecentOrderType } from "@crema/types/models/dashboards/Ecommerce";

type Props = {
  recentOrders: RecentOrderType[];
};

const RecentOrders = ({ recentOrders }: Props) => {
  const { messages } = useIntl();
  const handleSelectionType = (data: string) => {
    console.log("data: ", data);
  };
  return (
    <AppCard
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
      title={messages["eCommerce.recentOrders"] as string}
      action={
        <AppSelect
          menus={[
            messages["dashboard.thisWeek"],
            messages["dashboard.lastWeeks"],
            messages["dashboard.lastMonth"],
          ]}
          defaultValue={messages["dashboard.thisWeek"]}
          onChange={handleSelectionType}
        />
      }
    >
      <OrderTable orderData={recentOrders} />
    </AppCard>
  );
};

export default RecentOrders;
