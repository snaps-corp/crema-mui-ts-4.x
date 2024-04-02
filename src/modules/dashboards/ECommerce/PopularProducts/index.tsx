import AppCard from "@crema/components/AppCard";
import { useIntl } from "react-intl";
import ProductCell from "./ProductCell";

import AppScrollbar from "@crema/components/AppScrollbar";
import AppSelect from "@crema/components/AppSelect";
import AppGrid from "@crema/components/AppGrid";
import { PopularProductType } from "@crema/types/models/dashboards/Ecommerce";

type Props = {
  popularProducts: PopularProductType[];
};

const PopularProducts = ({ popularProducts }: Props) => {
  const { messages } = useIntl();

  const handleSelectionType = () => {};

  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={messages["eCommerce.popularProducts"] as string}
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
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
    >
      <AppScrollbar style={{ maxHeight: 330 }}>
        <AppGrid
          data={popularProducts}
          responsive={{
            xs: 1,
            sm: 2,
            md: 2,
            lg: 2,
            xl: 2,
          }}
          itemPadding={0}
          renderRow={(data, index) => (
            <ProductCell key={"product-" + index} data={data} />
          )}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default PopularProducts;
