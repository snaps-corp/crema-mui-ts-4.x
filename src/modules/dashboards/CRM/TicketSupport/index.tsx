import TicketSupportTable from "./TicketSupportTable";
import AppCard from "@crema/components/AppCard";
import { TicketSupportDaumType } from "@crema/types/models/dashboards/CRM";
import { useIntl } from "react-intl";

type Props = {
  ticketSupportData: TicketSupportDaumType[];
};
const TicketSupport = ({ ticketSupportData = [] }: Props) => {
  const { messages } = useIntl();

  return (
    <AppCard
      contentStyle={{ px: 0 }}
      title={messages["dashboard.latestTicketSupport"] as string}
      action={messages["common.viewAll"] as string}
    >
      <TicketSupportTable ticketSupportData={ticketSupportData} />
    </AppCard>
  );
};

export default TicketSupport;
