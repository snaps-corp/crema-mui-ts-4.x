import AppCard from "@crema/components/AppCard";
import { useIntl } from "react-intl";
import CustomerItem from "./CustomerItem";
import AppList from "@crema/components/AppList";
import AppScrollbar from "@crema/components/AppScrollbar";
import { NewCustomersType } from "@crema/types/models/dashboards/Ecommerce";

type Props = {
  newCustomers: NewCustomersType[];
};

const NewCustomers = (props: Props) => {
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages["eCommerce.newCustomers"] as string}
      contentStyle={{ px: 0 }}
    >
      <AppScrollbar sx={{ maxHeight: 300 }}>
        <AppList
          data={props.newCustomers}
          renderRow={(item) => <CustomerItem key={item.id} item={item} />}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default NewCustomers;
