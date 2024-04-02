import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableHeading from "./TableHeading";
import TableItem from "./TableItem";
import AppTableContainer from "@crema/components/AppTableContainer";
import AppScrollbar from "@crema/components/AppScrollbar";
import { RecentPatientType } from "@crema/types/models/dashboards/HealthCare";

type Props = {
  recentPatients: RecentPatientType[];
};

const PatientsTable = ({ recentPatients }: Props) => {
  return (
    <AppTableContainer>
      <AppScrollbar style={{ height: 280 }}>
        <Table>
          <TableHead>
            <TableHeading />
          </TableHead>
          <TableBody>
            {recentPatients.map((data) => (
              <TableItem data={data} key={data.id} />
            ))}
          </TableBody>
        </Table>
      </AppScrollbar>
    </AppTableContainer>
  );
};

export default PatientsTable;
