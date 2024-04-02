import TableCell from "@mui/material/TableCell";
import TableHeader from "@crema/components/AppTable/TableHeader";

const TableHeading = () => {
  return (
    <TableHeader>
      <TableCell>Team Lead</TableCell>
      <TableCell>Project</TableCell>
      <TableCell align="center">Team</TableCell>
      <TableCell align="center">Status</TableCell>
      <TableCell>Weeks</TableCell>
      <TableCell>Budget</TableCell>
    </TableHeader>
  );
};

export default TableHeading;
