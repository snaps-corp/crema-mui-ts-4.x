import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { formatCurrency } from "@crema/helpers/StringHelper";
import {
  InvoiceCurrencyType,
  InvoiceItemType,
} from "@crema/types/models/invoice";

const StyledTableCell = styled(TableCell)(() => ({
  fontSize: 14,
  width: "fit-content",
  padding: 8,
  "&:first-of-type": {
    paddingLeft: 20,
  },
  "&:last-of-type": {
    paddingRight: 20,
  },
}));

type Props = {
  data: InvoiceItemType;
  currencyData: InvoiceCurrencyType;
};

const TableItem = ({ data, currencyData }: Props) => {
  return (
    <TableRow
      key={data?.id}
      sx={{
        position: "relative",
        ".closeBtn": {
          display: "none",
        },
        "&:hover": {
          ".closeBtn": {
            display: "block",
          },
        },
      }}
    >
      <StyledTableCell align="left">
        <Box sx={{ display: "flex", alignItems: "center" }}>{data?.id}</Box>
      </StyledTableCell>
      <StyledTableCell>{data?.name}</StyledTableCell>
      <StyledTableCell align="left">
        {data?.duration?.from} To {data?.duration?.to}
      </StyledTableCell>
      <StyledTableCell align="left">
        {data?.quantity?.value}{" "}
        {data?.quantity?.type !== "fixed" &&
          `${data?.quantity?.type}${data?.quantity?.value > 1 ? "s" : ""}`}
      </StyledTableCell>
      <StyledTableCell>
        {data?.unitPrice}{" "}
        {data?.quantity?.type !== "fixed" ? `per ${data?.quantity?.type}` : ""}
      </StyledTableCell>

      <StyledTableCell align="left" sx={{ width: "30px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {formatCurrency(
            data?.total || 0,
            {
              language: currencyData.language,
              currency: currencyData.currency,
            },
            2,
          )}
        </Box>
      </StyledTableCell>
    </TableRow>
  );
};

export default TableItem;
