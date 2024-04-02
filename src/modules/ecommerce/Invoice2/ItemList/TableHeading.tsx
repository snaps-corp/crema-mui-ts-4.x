import TableCell from "@mui/material/TableCell";
import IntlMessages from "@crema/helpers/IntlMessages";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/material";
import { Fonts } from "@crema/constants/AppEnums";

const TableHeading = () => {
  return (
    <TableRow>
      <TableCell>
        <Box
          sx={{
            color: "text.secondary",
            fontSize: 13,
            fontWeight: Fonts.BOLD,
          }}
        >
          <IntlMessages id="invoice.itemDesc" />
        </Box>
      </TableCell>
      <TableCell>
        <Box
          sx={{
            color: "text.secondary",
            textAlign: "right",
            fontSize: 13,
            fontWeight: Fonts.BOLD,
          }}
        >
          <IntlMessages id="invoice.assignment" />
        </Box>
      </TableCell>
      <TableCell>
        <Box
          sx={{
            color: "text.secondary",
            textAlign: "right",
            fontSize: 13,
            fontWeight: Fonts.BOLD,
          }}
        >
          <IntlMessages id="invoice.quantity" />
        </Box>
      </TableCell>
      <TableCell>
        <Box
          sx={{
            color: "text.secondary",
            textAlign: "right",
            fontSize: 13,
            fontWeight: Fonts.BOLD,
          }}
        >
          <IntlMessages id="ecommerce.exclusivePrice" />
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default TableHeading;
