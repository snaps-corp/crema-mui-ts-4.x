import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AppCard from "@crema/components/AppCard";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import AppTableContainer from "@crema/components/AppTableContainer";
import TableHeading from "./TableHeading";
import TableItem from "./TableItem";
import { StudentRankingType } from "@crema/types/models/dashboards/Academy";
import IntlMessages from "@crema/helpers/IntlMessages";

type Props = {
  studentRankings: StudentRankingType[];
};
const StudentRankings = ({ studentRankings }: Props) => {
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={<IntlMessages id="academy.studentRankings" />}
      contentStyle={{ px: 0 }}
      action={
        <IconButton
          sx={{
            height: 30,
            width: 30,
          }}
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
        >
          <MoreVertIcon />
        </IconButton>
      }
    >
      <AppTableContainer>
        <Table className="table">
          <TableHead>
            <TableHeading />
          </TableHead>
          <TableBody>
            {studentRankings.map((data) => (
              <TableItem data={data} key={data.id} />
            ))}
          </TableBody>
        </Table>
      </AppTableContainer>
    </AppCard>
  );
};

export default StudentRankings;
