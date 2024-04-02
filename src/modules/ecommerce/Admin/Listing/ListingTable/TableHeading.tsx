import TableCell from "@mui/material/TableCell";
import TableHeader from "@crema/components/AppTable/TableHeader";

const TableHeading = () => {
  return (
    <TableHeader>
      <TableCell>Product Name</TableCell>
      <TableCell align="left">Product SKU</TableCell>
      <TableCell align="left">Created at</TableCell>
      <TableCell align="left">Status</TableCell>
      <TableCell align="left">Price</TableCell>
      <TableCell align="left"></TableCell>
    </TableHeader>
  );
};

export default TableHeading;
