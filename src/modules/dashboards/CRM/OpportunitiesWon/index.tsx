import OpportunitiesWonGraph from "./OpportunitiesWonGraph";
import AppCard from "@crema/components/AppCard";
import { useIntl } from "react-intl";
import AppSelect from "@crema/components/AppSelect";
import { OpportunitiesWonGraphDaumType } from "@crema/types/models/dashboards/CRM";

type Props = {
  data: OpportunitiesWonGraphDaumType[];
};

const OpportunitiesWon = ({ data }: Props) => {
  const { messages } = useIntl();
  const handleSelectionType = (data: string) => {
    console.log("data: ", data);
  };
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={messages["dashboard.crm.opportunitiesWon"] as string}
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
      <OpportunitiesWonGraph data={data} />
    </AppCard>
  );
};

export default OpportunitiesWon;
