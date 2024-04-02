import AppCard from "@crema/components/AppCard";
import VisitsTable from "./VisitsTable";
import { PageVisitType } from "@crema/types/models/dashboards/Analytics";
import { useIntl } from "react-intl";

type Props = {
  pageVisits: PageVisitType[];
};
const PageVisits = ({ pageVisits }: Props) => {
  const { messages } = useIntl();

  return (
    <AppCard
      contentStyle={{ px: 0 }}
      title={messages["dashboard.analytics.pageVisits"] as string}
      action={messages["common.viewAll"] as string}
    >
      <VisitsTable visitsData={pageVisits} />
    </AppCard>
  );
};

export default PageVisits;
