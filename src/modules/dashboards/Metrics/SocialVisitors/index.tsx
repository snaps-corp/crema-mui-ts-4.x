import SocialVisitorsGraph from "./SocialVisitorsGraph";
import Categories from "./Categories";
import AppCard from "@crema/components/AppCard";
import { useIntl } from "react-intl";
import { SocialVisitorsType } from "@crema/types/models/dashboards/Metrics";

type SocialVisitorsProps = {
  data: SocialVisitorsType[];
};

const SocialVisitors: React.FC<SocialVisitorsProps> = ({ data }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages["dashboard.socialVisitors"] as string}
      action={messages["common.viewAll"] as string}
    >
      <SocialVisitorsGraph data={data} />

      <Categories data={data} />
    </AppCard>
  );
};

export default SocialVisitors;
