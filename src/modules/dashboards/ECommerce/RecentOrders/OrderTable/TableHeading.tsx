import TableCell from "@mui/material/TableCell";
import TableHeader from "@crema/components/AppTable/TableHeader";

const TableHeading = () => {
  return (
    <TableHeader
      sx={{
        "& th": {
          padding: 4,
        },
      }}
    >
      <TableCell>Order ID</TableCell>
      <TableCell>Product</TableCell>
      <TableCell>Customer</TableCell>
      <TableCell>Delivery Date</TableCell>
      <TableCell>Price</TableCell>
      <TableCell>Status</TableCell>
      <TableCell align="right">Actions</TableCell>
    </TableHeader>
  );
};

export default TableHeading;
