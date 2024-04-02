import AppCard from "@crema/components/AppCard";
import StatGraphs from "./StatGraphs";
import { AtcStaticType } from "@crema/types/models/dashboards/Crypto";
import IntlMessages from "@crema/helpers/IntlMessages";

type Props = {
  data: AtcStaticType[];
};
const ATCStatics = ({ data }: Props) => {
  return (
    <AppCard title={<IntlMessages id="dashboard.crypto.atcStatics" />}>
      <StatGraphs data={data} />
    </AppCard>
  );
};

export default ATCStatics;
