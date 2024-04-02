import { useIntl } from "react-intl";
import AppCard from "@crema/components/AppCard";
import AppList from "@crema/components/AppList";
import AppointmentCell from "./AppointmentCell";
import AppScrollbar from "@crema/components/AppScrollbar";
import type { UpcomingAppointmentType } from "@crema/types/models/dashboards/HealthCare";

type Props = {
  data: UpcomingAppointmentType[];
};

const UpcomingAppointments = ({ data }: Props) => {
  const { messages } = useIntl();
  return (
    <AppCard
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
      title={messages["healthCare.upcomingAppointments"] as string}
      action={messages["common.viewAll"] as string}
    >
      <AppScrollbar style={{ maxHeight: 280 }}>
        <AppList
          data={data}
          renderRow={(appointment) => (
            <AppointmentCell key={appointment.id} appointment={appointment} />
          )}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default UpcomingAppointments;
