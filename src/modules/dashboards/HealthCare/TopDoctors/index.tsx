import { useIntl } from "react-intl";
import AppCard from "@crema/components/AppCard";
import AppList from "@crema/components/AppList";
import DoctorCell from "./DoctorCell";
import AppScrollbar from "@crema/components/AppScrollbar";
import { TopDoctorType } from "@crema/types/models/dashboards/HealthCare";

type Props = {
  data: TopDoctorType[];
};

const TopDoctors = ({ data }: Props) => {
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages["healthCare.topDoctors"] as string}
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
      action={messages["common.viewAll"] as string}
    >
      <AppScrollbar style={{ maxHeight: 280 }}>
        <AppList
          data={data}
          renderRow={(doctor) => <DoctorCell key={doctor.id} doctor={doctor} />}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default TopDoctors;
