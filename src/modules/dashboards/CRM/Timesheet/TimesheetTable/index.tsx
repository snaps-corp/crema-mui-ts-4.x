import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableHeading from "./TableHeading";
import TableItem from "./TableItem";
import AppTableContainer from "@crema/components/AppTableContainer";
import AppScrollbar from "@crema/components/AppScrollbar";
import { TimesheetType } from "@crema/types/models/dashboards/CRM";

type Props = {
  timesheet: TimesheetType[];
};
const TimesheetTable = ({ timesheet }: Props) => {
  return (
    <AppTableContainer>
      <AppScrollbar style={{ maxHeight: 235 }}>
        <Table stickyHeader>
          <TableHead>
            <TableHeading />
          </TableHead>
          <TableBody>
            {timesheet.map((data) => (
              <TableItem data={data} key={data.id} />
            ))}
          </TableBody>
        </Table>
      </AppScrollbar>
    </AppTableContainer>
  );
};

export default TimesheetTable;
