import AppCard from "@crema/components/AppCard";
import TimesheetTable from "./TimesheetTable";
import { TimesheetType } from "@crema/types/models/dashboards/CRM";
import IntlMessages from "@crema/helpers/IntlMessages";

type Props = {
  timesheet: TimesheetType[];
};
const Timesheet = ({ timesheet }: Props) => {
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
      title={<IntlMessages id="dashboard.crm.timesheet" />}
      action={<IntlMessages id="common.viewAll" />}
    >
      <TimesheetTable timesheet={timesheet} />
    </AppCard>
  );
};

export default Timesheet;
