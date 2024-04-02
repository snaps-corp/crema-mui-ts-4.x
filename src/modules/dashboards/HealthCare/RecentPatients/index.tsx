import AppCard from "@crema/components/AppCard";
import { useIntl } from "react-intl";
import AppSelect from "@crema/components/AppSelect";
import PatientsTable from "./PatientsTable";
import { RecentPatientType } from "@crema/types/models/dashboards/HealthCare";

type Props = {
  recentPatients: RecentPatientType[];
};

const RecentPatients = ({ recentPatients }: Props) => {
  const { messages } = useIntl();
  const handleSelectionType = (data: string) => {
    console.log("data: ", data);
  };
  return (
    <AppCard
      contentStyle={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 8 }}
      title={messages["healthCare.recentPatient"] as string}
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
      <PatientsTable recentPatients={recentPatients} />
    </AppCard>
  );
};

export default RecentPatients;
