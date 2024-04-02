import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableHeading from "./TableHeading";
import TableItem from "./TableItem";
import AppTableContainer from "@crema/components/AppTableContainer";
import { Box, Grid } from "@mui/material";
import AppGridContainer from "@crema/components/AppGridContainer";
import { formatCurrency } from "@crema/helpers/StringHelper";
import { taxType } from "../../AddInvoice/data";
import {
  InvoiceCurrencyType,
  InvoiceItemType,
} from "@crema/types/models/invoice";

type Props = {
  items: InvoiceItemType[];
  currency: InvoiceCurrencyType;
  taxTypeData: string;
  taxRateData: number;
};

const EditInvoiceTable = ({
  items,
  currency,
  taxTypeData,
  taxRateData,
}: Props) => {
  const taxLabelType = taxType.find((tax) => tax.value === taxTypeData)?.label;

  const currencyData = currency || {
    currency: "INR",
    language: "en-IN",
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
            {items.map((data) => (
              <TableItem
                key={data.id}
                data={data}
                currencyData={currencyData}
              />
            ))}
          </TableBody>
        </Table>
      </AppTableContainer>
      <AppGridContainer spacing={2} sx={{ mt: 10 }}>
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
              alignItems: "center",
              color: "text.secondary",
              mb: 4,
            }}
          >
            <Box sx={{ mr: 7, width: "100%" }}>
              {taxLabelType} ({taxRateData}%):
            </Box>
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
