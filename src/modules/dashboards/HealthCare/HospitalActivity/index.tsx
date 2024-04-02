import StatGraphs from "./StatGraphs";
import AppCard from "@crema/components/AppCard";
import AppSelect from "@crema/components/AppSelect";
import { useIntl } from "react-intl";
import { HospitalActivityType } from "@crema/types/models/dashboards/HealthCare";

type Props = {
  data: HospitalActivityType[];
};

const HospitalActivity = ({ data }: Props) => {
  const handleSelectionType = (data: string) => {
    console.log("data: ", data);
  };
  const { messages } = useIntl();
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={messages["healthCare.hospitalActivity"] as string}
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
      <StatGraphs data={data} />
    </AppCard>
  );
};
export default HospitalActivity;
