import AppCard from "@crema/components/AppCard";
import GainerLooserTable from "./GainerLooserTable";
import { GainerLooserType } from "@crema/types/models/dashboards/Crypto";
import IntlMessages from "@crema/helpers/IntlMessages";

type Props = {
  data: GainerLooserType[];
};
const GainerLooser = ({ data }: Props) => {
  return (
    <AppCard
      contentStyle={{
        paddingLeft: 0,
        paddingRight: 0,
      }}
      title={<IntlMessages id="dashboard.crypto.topGainersTopLosers" />}
    >
      <GainerLooserTable data={data} />
    </AppCard>
  );
};

export default GainerLooser;
