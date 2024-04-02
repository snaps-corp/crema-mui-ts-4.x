import TableCell from "@mui/material/TableCell";
import TableHeader from "@crema/components/AppTable/TableHeader";

const TableHeading = () => {
  return (
    <TableHeader>
      <TableCell>Name</TableCell>
      <TableCell>Gender</TableCell>
      <TableCell>Weight</TableCell>
      <TableCell>Assigned Dr</TableCell>
      <TableCell>Admit Date</TableCell>
      <TableCell>Status</TableCell>
      <TableCell align="right">Actions</TableCell>
    </TableHeader>
  );
};

export default TableHeading;
