import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { MenuItem, Select, TextField } from "@mui/material";
import { getDateObject } from "@crema/helpers/DateHelper";
import { formatCurrency } from "@crema/helpers/StringHelper";
import { DatePicker } from "@mui/x-date-pickers";
import { GrClose } from "react-icons/gr";
import { quantityType } from "../data";
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
  index: number;
  currencyData: InvoiceCurrencyType;
  onChangeLineItems: (
    index: number,
    key: string,
    value: any,
    nestedKey?: string,
  ) => void;
  onDeleteLineItem: (index: number) => void;
};
const TableItem = ({
  data,
  index,
  currencyData,
  onChangeLineItems,
  onDeleteLineItem,
}: Props) => {
  return (
    <TableRow
      key={data?.id}
      sx={{
        position: "relative",
        ".closeBtn": {
          visibility: "hidden",
          ml: 3,
          pt: 2,
          cursor: "pointer",
        },
        "&:hover": {
          ".closeBtn": {
            visibility: "visible",
          },
        },
      }}
    >
      <StyledTableCell align="left">{data?.id}</StyledTableCell>
      <StyledTableCell align="left">
        <TextField
          autoFocus
          variant="standard"
          value={data?.name || ""}
          placeholder="Name"
          onChange={(e) => onChangeLineItems(index, "name", e.target.value)}
        />
      </StyledTableCell>

      <StyledTableCell align="left" sx={{ whiteSpace: "inherit !important" }}>
        {/* <DateRangePicker
            value={[data?.duration?.from, data?.duration?.to]}
            onChange={(newValue) => {
              console.log('newValue', newValue);
              onChangeLineItems(index, 'from', newValue[0], 'duration');
              onChangeLineItems(index, 'to', newValue[1], 'duration');
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField
                  variant='standard'
                  sx={{ width: 100, mr: 2.5 }}
                  {...startProps}
                />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField
                  variant='standard'
                  sx={{ width: 100, mr: 2.5 }}
                  {...endProps}
                />
              </React.Fragment>
            )}
          /> */}
        <Box sx={{ display: "flex" }}>
          <DatePicker
            sx={{
              height: 40,
              mr: 3,
              input: {
                padding: 0,
                height: 34,
              },
              fieldset: {
                border: "none !important",
                borderBottom: "1px solid !important",
                borderColor: "divider",
                borderRadius: "0 !important",
              },
            }}
            value={getDateObject(data?.duration?.from)}
            onChange={(value) =>
              onChangeLineItems(index, "from", value, "duration")
            }
          />
          <DatePicker
            sx={{
              height: 40,
              input: {
                padding: 0,
                height: 34,
              },
              fieldset: {
                border: "none !important",
                borderBottom: "1px solid !important",
                borderColor: "divider",
                borderRadius: "0 !important",
              },
            }}
            value={getDateObject(data?.duration?.to)}
            onChange={(value) =>
              onChangeLineItems(index, "to", value, "duration")
            }
          />
        </Box>
      </StyledTableCell>
      <StyledTableCell
        align="left"
        // sx={{ width: 300, whiteSpace: 'inherit !important' }}
      >
        <TextField
          type="number"
          sx={{ minWidth: 50 }}
          variant="standard"
          defaultValue={data?.quantity?.value}
          placeholder="Value"
          onChange={(e) => {
            onChangeLineItems(index, "value", e.target.value, "quantity");
            onChangeLineItems(
              index,
              "total",
              Number(e.target.value) * data?.unitPrice || 0,
            );
          }}
        />
      </StyledTableCell>
      <StyledTableCell
        align="left"
        // sx={{ width: 300, whiteSpace: 'inherit !important' }}
      >
        <Select
          sx={{ mr: 2.5 }}
          variant="standard"
          value={data?.quantity?.type}
          onChange={(event) => {
            onChangeLineItems(index, "type", event.target.value, "quantity");
          }}
        >
          {quantityType.map((quantity) => {
            return (
              <MenuItem
                value={quantity.value}
                key={quantity.value}
                sx={{
                  cursor: "pointer",
                  inputVariant: "outlined",
                }}
              >
                {quantity.label}
              </MenuItem>
            );
          })}
        </Select>
      </StyledTableCell>
      <StyledTableCell align="left">
        <TextField
          type="number"
          variant="standard"
          defaultValue={data?.unitPrice || 0}
          placeholder="Unit Price"
          onChange={(e) => {
            onChangeLineItems(index, "unitPrice", e.target.value);
            onChangeLineItems(
              index,
              "total",
              Number(e.target.value) * data?.quantity?.value || 0,
            );
          }}
        />
      </StyledTableCell>

      <StyledTableCell
        align="left"
        sx={{ width: "100%", display: "flex", alignItems: "center" }}
      >
        {formatCurrency(
          data?.total || 0,
          {
            language: currencyData.language,
            currency: currencyData.currency,
          },
          2,
        )}
        <Box className="closeBtn" onClick={() => onDeleteLineItem(index)}>
          <GrClose size={15} />
        </Box>
      </StyledTableCell>
    </TableRow>
  );
};

export default TableItem;
