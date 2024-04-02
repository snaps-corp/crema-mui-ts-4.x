import TableCell from "@mui/material/TableCell";
import TableHeader from "@crema/components/AppTable/TableHeader";
import { Checkbox } from "@mui/material";

const TableHeading = () => {
  return (
    <TableHeader>
      <TableCell align="left">
        <Checkbox color="primary" />
      </TableCell>
      <TableCell align="left">Invoice No.</TableCell>
      <TableCell>Client Name</TableCell>
      <TableCell align="left">Status</TableCell>
      <TableCell align="left">Invoice Date</TableCell>
      <TableCell align="left">Due Date</TableCell>
      <TableCell align="left">Amount</TableCell>
      <TableCell align="left"></TableCell>
    </TableHeader>
  );
};

export default TableHeading;
