import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableHeading from "./TableHeading";
import TableItem from "./TableItem";
import AppTableContainer from "@crema/components/AppTableContainer";
import { Box, Grid, MenuItem, Select } from "@mui/material";
import AppGridContainer from "@crema/components/AppGridContainer";
import { getFormattedDate } from "@crema/helpers/DateHelper";
import { formatCurrency } from "@crema/helpers/StringHelper";
import dayjs from "dayjs";
import { currencyList, taxRates, taxType } from "../data";
import {
  InvoiceCurrencyType,
  InvoiceItemType,
} from "@crema/types/models/invoice";
import { AiOutlinePlus } from "react-icons/ai";

const today = dayjs().format("DD MMM YYYY");

type Props = {
  items: InvoiceItemType[];
  taxTypeData: string;
  taxRateData: number;
  currencyData: InvoiceCurrencyType;
  setCurrencyData: (data: InvoiceCurrencyType) => void;
  setItems: (data: InvoiceItemType[]) => void;
  setTaxTypeData: (data: string) => void;
  setTaxRateData: (data: number) => void;
};
const EditInvoiceTable = ({
  items,
  taxTypeData,
  taxRateData,
  currencyData,
  setCurrencyData,
  setItems,
  setTaxTypeData,
  setTaxRateData,
}: Props) => {
  const onChangeLineItems = (
    index: number,
    key: string,
    value: any,
    nestedKey?: string,
  ) => {
    const newItems = [...items];
    if (nestedKey) {
      if (nestedKey === "duration")
        value = getFormattedDate(value, "DD MMM YYYY");
      newItems[index] = {
        ...newItems[index],
        [nestedKey]: {
          ...newItems[index][nestedKey as "duration" | "quantity"],
          [key]: value,
        },
      };
    } else {
      newItems[index] = { ...newItems[index], [key]: value };
    }
    setItems(newItems);
  };

  const onDeleteLineItem = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const getTotal = () => {
    return (
      items.reduce((acc, item) => {
        return acc + item.total;
      }, 0) || 0
    );
  };

  return (
    <>
      <AppTableContainer>
        <Table stickyHeader className="table">
          <TableHead>
            <TableHeading />
          </TableHead>
          <TableBody>
            {items.map((data, index) => (
              <TableItem
                key={data.id}
                index={index}
                data={data}
                currencyData={currencyData}
                onChangeLineItems={onChangeLineItems}
                onDeleteLineItem={onDeleteLineItem}
              />
            ))}
          </TableBody>
        </Table>
      </AppTableContainer>
      <AppGridContainer spacing={2} sx={{ mt: 10 }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              color: "primary.main",
              display: "flex",
              alignItems: "center",
              mt: 4,
              cursor: "pointer",
              width: "fit-content",
            }}
            onClick={() =>
              setItems([
                ...items,
                {
                  id: items.length + 1,
                  duration: { from: today, to: today },
                  quantity: {
                    type: "fixed",
                    value: 1,
                  },
                } as InvoiceItemType,
              ])
            }
          >
            <AiOutlinePlus size={18} />
            <Box sx={{ ml: 2, fontSize: 16 }}>Add Item</Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={5} sx={{ ml: "auto", mr: 10 }}>
          <Box
            sx={{
              color: "text.secondary",
              mb: 4,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ mr: 7, width: "100%" }}>Subtotal:</Box>
            <Box>
              {formatCurrency(
                getTotal(),
                {
                  language: currencyData.language,
                  currency: currencyData.currency,
                },
                2,
              )}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Select
              size="small"
              sx={{ mr: 6, width: "100%" }}
              value={taxTypeData}
              onChange={(event) => setTaxTypeData(event.target.value)}
            >
              {taxType.map((quantity) => {
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
            <Select
              size="small"
              sx={{ mr: 6, width: "100%" }}
              value={taxRateData}
              onChange={(event) => setTaxRateData(Number(event.target.value))}
            >
              {taxRates.map((quantity) => {
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
            <Box sx={{ color: "text.secondary" }}>
              {formatCurrency(
                getTotal() * taxRateData * 0.01,
                {
                  language: currencyData.language,
                  currency: currencyData.currency,
                },
                2,
              )}
            </Box>
          </Box>
          {taxTypeData === "cgst_sgst" && (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 4,
                  color: "text.secondary",
                }}
              >
                <Box sx={{ width: "50%" }} />
                <Box sx={{ ml: 4, width: "50%" }}> CGST:</Box>
                <Box sx={{}}>
                  {formatCurrency(
                    (getTotal() * (taxRateData * 0.01)) / 2,
                    {
                      language: currencyData.language,
                      currency: currencyData.currency,
                    },
                    2,
                  )}
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 4,
                  color: "text.secondary",
                }}
              >
                <Box sx={{ width: "50%" }} />
                <Box sx={{ ml: 4, width: "50%" }}> SGST:</Box>
                <Box sx={{}}>
                  {formatCurrency(
                    (getTotal() * (taxRateData * 0.01)) / 2,
                    {
                      language: currencyData.language,
                      currency: currencyData.currency,
                    },
                    2,
                  )}
                </Box>
              </Box>
            </>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
              color: "text.secondary",
            }}
          >
            <Box sx={{ mr: 6, width: "50%" }}>Total:</Box>
            <Select
              size="small"
              sx={{ mr: 6, width: "50%" }}
              value={currencyData.currency}
              onChange={(event) => {
                const type = currencyList.find(
                  (item) => item.currency === event.target.value,
                );
                if (type) setCurrencyData(type);
              }}
            >
              {currencyList.map((quantity) => {
                return (
                  <MenuItem
                    value={quantity.currency}
                    key={quantity.currency}
                    sx={{
                      cursor: "pointer",
                      inputVariant: "outlined",
                    }}
                  >
                    {quantity.currency}
                  </MenuItem>
                );
              })}
            </Select>
            <Box>
              {formatCurrency(
                getTotal() * (1 - taxRateData * 0.01),
                {
                  language: currencyData.language,
                  currency: currencyData.currency,
                },
                2,
              )}
            </Box>
          </Box>
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default EditInvoiceTable;
