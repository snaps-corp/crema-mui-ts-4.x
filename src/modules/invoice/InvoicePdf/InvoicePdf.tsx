import AppCard from "@crema/components/AppCard";
import AppGridContainer from "@crema/components/AppGridContainer";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";

import InvoiceTable from "./InvoiceTable";
import { downloadPdf } from "@crema/helpers/FileHelper";
import {
  ClientType,
  InvoiceCurrencyType,
  InvoiceSettingType,
  InvoiceType,
} from "@crema/types/models/invoice";

type Props = {
  selectedInv: InvoiceType;
  clientsList: ClientType[];
  invoiceSettings: InvoiceSettingType;
};

const InvoicePdf = ({ selectedInv, clientsList, invoiceSettings }: Props) => {
  const selectedClient = clientsList.find(
    (item) => item.id === selectedInv.clientId,
  );

  const invDate = dayjs(selectedInv.idt);
  const dueDate = dayjs(selectedInv.dueDate);
  const dueDays = dueDate.diff(invDate, "days");

  return (
    <AppCard title="Invoice" sx={{ width: "70%", margin: "auto" }}>
      <Box id="pdfdiv">
        <Box sx={{ py: 10, px: 4 }}>
          <AppGridContainer spacing={5}>
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  position: "relative",
                  p: 3,
                  borderRadius: 2,
                }}
              >
                <Typography variant="h4">{selectedClient?.name}</Typography>
                <Typography variant="h5" sx={{ my: 3 }}>
                  {selectedClient?.firstName} {selectedClient?.lastName}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {selectedClient?.steetName}{" "}
                  {selectedClient?.steetName &&
                    selectedClient?.steetName?.length > 0 &&
                    " , "}
                  {selectedClient?.city}{" "}
                  {selectedClient?.city &&
                    selectedClient?.city?.length > 0 &&
                    " , "}
                  {selectedClient?.zipCode}{" "}
                  {selectedClient?.zipCode &&
                    selectedClient?.zipCode?.length > 0 &&
                    " , "}
                  {selectedClient?.state}{" "}
                  {selectedClient?.state &&
                    selectedClient?.state?.length > 0 &&
                    " , "}
                  {selectedClient?.country}
                </Box>
                {selectedClient?.vatId && (
                  <Box sx={{ mb: 2 }}>VAT ID: {selectedClient?.vatId}</Box>
                )}
              </Box>
            </Grid>
            {invoiceSettings?.general && (
              <Grid
                item
                xs={12}
                md={6}
                sx={{ ml: "auto", display: "flex", alignItems: "flex-start" }}
              >
                <Box sx={{ width: "50%" }}>
                  <Typography variant="h4" sx={{ mb: 3 }}>
                    {invoiceSettings.general.agencyName}
                  </Typography>
                  <Typography variant="h4" sx={{ mb: 3 }}>
                    {invoiceSettings.general.agencyName}
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    <Box>{invoiceSettings.general.streetName}</Box>
                    <Box>{invoiceSettings.general.state}</Box>
                    <Box>
                      {invoiceSettings.general.zipCode}{" "}
                      {invoiceSettings.general.country}
                    </Box>
                  </Box>
                  <Box sx={{ mb: 3 }}>
                    <Box>{invoiceSettings.general.phoneNumber}</Box>
                    <Box>{invoiceSettings.invoicing.email}</Box>
                  </Box>
                  <Box sx={{ mb: 3 }}>
                    <Box>VAT ID: {invoiceSettings.accounting.vatId}</Box>
                    <Box>Tax ID: {invoiceSettings.accounting.taxId}</Box>
                  </Box>
                </Box>
                {invoiceSettings?.invoicing && (
                  <Box sx={{ width: "50%", ml: 4 }}>
                    {invoiceSettings.invoicing.logo && (
                      <img
                        src={invoiceSettings.invoicing.logo}
                        alt="logo"
                        style={{ width: 70, height: "auto" }}
                      />
                    )}
                  </Box>
                )}
              </Grid>
            )}
          </AppGridContainer>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Invoice
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: 2,
                p: 1,
              }}
            >
              <Box component="span" sx={{ mr: 2 }}>
                Invoice ID:
              </Box>
              <Box>{selectedInv.inum}</Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: 2,
                p: 1,
              }}
            >
              <Box component="span" sx={{ mr: 2 }}>
                Invoice Date:
              </Box>
              <Box>{selectedInv.idt}</Box>
            </Box>
          </Box>
          <Box sx={{ mb: 4 }}>{selectedInv.introductionText}</Box>
        </Box>

        <InvoiceTable
          items={selectedInv.items}
          taxTypeData={selectedInv.taxType}
          taxRateData={selectedInv.tax}
          currency={selectedInv?.currency as InvoiceCurrencyType}
        />

        <Box sx={{ py: 10, px: 4 }}>
          <Box
            sx={{
              borderRadius: 2,
              p: 1,
            }}
          >
            <Typography variant="h4" sx={{ mb: 1 }}>
              Payment Terms
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Please Pay within {dueDays} days of receiving this invoice.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>{selectedInv.conclusionText}</Box>
          <Divider />

          {invoiceSettings?.accounting && (
            <Box
              sx={{
                position: "relative",
                p: 3,
                my: 4,
                borderRadius: 2,
                border: "1px solid",
                borderColor: "divider",
                width: "fit-content",
              }}
            >
              <Typography variant="h4" sx={{ mb: 4 }}>
                Bank Account
              </Typography>
              <Box sx={{ color: "text.primary" }}>
                <Box>Receiver: {invoiceSettings.accounting.accountHolder}</Box>
                <Box>Bank Name: {invoiceSettings.accounting.bankName}</Box>
                <Box>
                  Country of bank: {invoiceSettings.accounting.countryOfBank}
                </Box>
                <Box>
                  Account Number: {invoiceSettings.accounting.accountNumber}
                </Box>
                <Box>SWIFT/BIC: {invoiceSettings.accounting.swiftBic}</Box>
                <Box>IFSC: {invoiceSettings.accounting.ifsc}</Box>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{ display: "flex", ml: "auto", mt: 4 }}
        onClick={() => downloadPdf()}
      >
        Download Invoice
      </Button>
    </AppCard>
  );
};

export default InvoicePdf;
