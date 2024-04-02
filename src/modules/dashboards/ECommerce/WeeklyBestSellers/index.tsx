import AppCard from "@crema/components/AppCard";
import AppList from "@crema/components/AppList";
import AppScrollbar from "@crema/components/AppScrollbar";

import BestSellersCell from "./BestSellersCell";
import { useIntl } from "react-intl";
import type { BestSellerType } from "@crema/types/models/dashboards/Ecommerce";

type Props = {
  data: BestSellerType[];
};

const WeeklyBestSellers = ({ data }: Props) => {
  const { messages } = useIntl();
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
      title={messages["dashboard.eCommerce.weeklyBestSellers"] as string}
      action={messages["common.viewAll"] as string}
    >
      <AppScrollbar style={{ maxHeight: 200 }}>
        <AppList
          data={data}
          renderRow={(bestSeller) => (
            <BestSellersCell key={bestSeller.id} bestSeller={bestSeller} />
          )}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default WeeklyBestSellers;
