import TableCell from "@mui/material/TableCell";
import TableHeader from "@crema/components/AppTable/TableHeader";

const TableHeading = () => {
  return (
    <TableHeader>
      <TableCell>Pos</TableCell>
      <TableCell align="left">Task Name</TableCell>
      <TableCell align="left">Duration</TableCell>
      <TableCell align="left">Quantity</TableCell>
      <TableCell align="left">Price Per Unit</TableCell>
      <TableCell align="left">Sub Total </TableCell>
    </TableHeader>
  );
};

export default TableHeading;
