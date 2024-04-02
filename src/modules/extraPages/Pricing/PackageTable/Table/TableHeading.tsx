import TableCell from "@mui/material/TableCell";
import TableHeader from "@crema/components/AppTable/TableHeader";
import { Box } from "@mui/material";

const TableHeading = () => {
  return (
    <TableHeader>
      <TableCell sx={{ fontSize: 20 }} />
      <TableCell sx={{ fontSize: 20 }}>Free</TableCell>
      <TableCell sx={{ fontSize: 20 }}>Basic</TableCell>
      <TableCell sx={{ fontSize: 20, display: "flex", alignItems: "center" }}>
        Pro
        <Box
          sx={{
            borderRadius: 20,
            p: "2px 12px",
            ml: 3,
            width: "fit-content",
            color: "#F49820",
            border: "1px solid #F49820",
          }}
        >
          Popular
        </Box>
      </TableCell>
    </TableHeader>
  );
};

export default TableHeading;
