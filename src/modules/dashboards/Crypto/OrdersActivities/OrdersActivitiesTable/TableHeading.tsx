import TableCell from "@mui/material/TableCell";
import TableHeader from "@crema/components/AppTable/TableHeader";

const TableHeading = () => {
  return (
    <TableHeader>
      <TableCell>Transaction ID</TableCell>
      <TableCell>Type</TableCell>
      <TableCell>Description</TableCell>
      <TableCell>Date</TableCell>
      <TableCell>USD Amount</TableCell>
      <TableCell align="right">Amount</TableCell>
    </TableHeader>
  );
};

export default TableHeading;
