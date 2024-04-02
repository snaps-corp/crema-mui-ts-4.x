import AppCard from "@crema/components/AppCard";
import TopLeadersTable from "./TopLeadersTable";
import { TopLeaderType } from "@crema/types/models/dashboards/CRM";
import IntlMessages from "@crema/helpers/IntlMessages";

type Props = {
  topLeaders: TopLeaderType[];
};
const TopLeaders = ({ topLeaders }: Props) => {
  return (
    <AppCard
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
      title={<IntlMessages id="dashboard.crm.topLeaders" />}
      action={<IntlMessages id="common.viewAll" />}
    >
      <TopLeadersTable topLeaders={topLeaders} />
    </AppCard>
  );
};

export default TopLeaders;
