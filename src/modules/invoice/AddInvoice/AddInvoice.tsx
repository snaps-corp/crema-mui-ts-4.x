import AppCard from '@crema/components/AppCard';
import AppGridContainer from '@crema/components/AppGridContainer';
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import React, { useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import EditInvoiceTable from './EditTable';
import { DatePicker } from '@mui/x-date-pickers';
import { getDateObject, getFormattedDate } from '@crema/helpers/DateHelper';
import { currencyList, taxRates, taxType } from './data';
import {
  ClientType,
  InvoiceItemType,
  InvoiceSettingType,
  InvoiceType,
} from '@crema/types/models/invoice';
import { AiOutlinePlus } from 'react-icons/ai';

type AddInvoiceProps = {
  selectedInv?: InvoiceType;
  totalCount: number;
  clientsList: ClientType[];
  invoiceSettings: InvoiceSettingType;
  onSave: (data: InvoiceType) => void;
};

const AddInvoice = ({
  selectedInv,
  totalCount,
  clientsList,
  invoiceSettings,
  onSave,
}: AddInvoiceProps) => {
  const [currencyData, setCurrencyData] = useState(currencyList[0]);
  const [selectedClient, setSelectedClient] = useState<ClientType | null>(null);
  const [editInum, setEditInum] = useState(false);
  const [editIdt, setShowIdt] = useState(false);
  const [items, setItems] = useState<InvoiceItemType[]>([]);
  const [invoiceNo, setInvoiceNo] = useState(
    dayjs().format('YYYY-MM-DD') + '-' + (Number(totalCount) + 1),
  );
  const [invoiceDate, setInvoiceDate] = useState(dayjs());

  const [introductionText, setIntroductionText] = useState('');
  const [editIntroductionText, setEditIntroductionText] = useState(false);

  const [editDueDays, setEditDueDays] = useState(false);
  const [dueDays, setDueDays] = useState(30);
  const [conclusionText, setConclusionText] = useState('');
  const [editConclusionText, setEditConclusionText] = useState(false);
  const [taxTypeData, setTaxTypeData] = useState(taxType[0].value);
  const [taxRateData, setTaxRateData] = useState(taxRates[0].value);

  useEffect(() => {
    if (selectedInv) {
      const client = clientsList.find(
        (item) => item.id === selectedInv.clientId,
      );
      if (client) setSelectedClient(client);
      setItems(selectedInv.items);
      setInvoiceNo(selectedInv.inum);
      setInvoiceDate(getDateObject(selectedInv.idt));
      setIntroductionText(selectedInv.introductionText);
      setConclusionText(selectedInv.conclusionText);
      setTaxTypeData(selectedInv.taxType);
      setTaxRateData(selectedInv.tax);
    }
  }, [selectedInv]);

  const onSubmit = () => {
    const totalAmount = items.reduce((acc, item) => acc + item.total, 0);
    onSave({
      id: selectedInv ? selectedInv.id : totalCount + 1,
      clientId: selectedClient?.id || '',
      clientName: selectedClient?.name || '',
      inum: invoiceNo,
      idt: dayjs(invoiceDate, 'DD/MM/YYYY').format('DD MMM YYYY'),
      dueDate: dayjs(invoiceDate, 'DD/MM/YYYY')
        .add(dueDays, 'days')
        .format('DD MMM YYYY'),
      amount: totalAmount - totalAmount * taxRateData * 0.01,
      folderValue: 120,
      tax: taxRateData,
      taxType: taxTypeData,
      currency: currencyData,
      introductionText,
      conclusionText,
      items,
    });
  };
  return (
    <AppCard title='Invoice' sx={{ width: '70%', margin: 'auto' }}>
      <Box sx={{ py: 10, px: 4 }}>
        <AppGridContainer spacing={5}>
          <Grid item xs={12} md={5}>
            {!selectedClient ? (
              <Autocomplete
                size='small'
                options={clientsList}
                getOptionLabel={(option) => option.name}
                value={selectedClient}
                onChange={(event, value) => {
                  setSelectedClient(value);
                }}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant='outlined'
                    label='Add Client'
                    fullWidth
                  />
                )}
              />
            ) : (
              <Box
                sx={{
                  position: 'relative',
                  p: 3,
                  borderRadius: 2,
                  '.closeBtn': {
                    display: 'none',
                  },
                  '&:hover': {
                    border: '1px solid',
                    borderColor: 'divider',
                    '.closeBtn': {
                      display: 'block',
                    },
                  },
                }}
              >
                <Box
                  className='closeBtn'
                  sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedClient(null)}
                >
                  <GrClose size={15} />
                </Box>
                <Typography variant='h4'>{selectedClient.name}</Typography>
                <Typography variant='h5' sx={{ my: 3 }}>
                  {selectedClient.firstName} {selectedClient.lastName}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {selectedClient.steetName}{' '}
                  {selectedClient.steetName.length > 0 && ' , '}
                  {selectedClient.city}{' '}
                  {selectedClient.city.length > 0 && ' , '}
                  {selectedClient.zipCode}{' '}
                  {selectedClient.zipCode.length > 0 && ' , '}
                  {selectedClient.state}{' '}
                  {selectedClient.state.length > 0 && ' , '}
                  {selectedClient.country}
                </Box>
                <Box sx={{ mb: 2 }}>VAT ID: {selectedClient.vatId}</Box>
              </Box>
            )}
          </Grid>
          {invoiceSettings?.general && (
            <Grid
              item
              xs={12}
              md={6}
              sx={{ ml: 'auto', display: 'flex', alignItems: 'flex-start' }}
            >
              <Box sx={{ width: '50%' }}>
                <Typography variant='h4' sx={{ mb: 3 }}>
                  {invoiceSettings.general.agencyName}
                </Typography>
                <Typography variant='h4' sx={{ mb: 3 }}>
                  {invoiceSettings.general.agencyName}
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Box>{invoiceSettings.general.streetName}</Box>
                  <Box>{invoiceSettings.general.state}</Box>
                  <Box>
                    {invoiceSettings.general.zipCode}{' '}
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
                <Box sx={{ width: '50%', ml: 4 }}>
                  {invoiceSettings.invoicing.logo && (
                    <img
                      src={invoiceSettings.invoicing.logo}
                      alt='logo'
                      style={{ width: 70, height: 'auto' }}
                    />
                  )}
                </Box>
              )}
            </Grid>
          )}
        </AppGridContainer>
        <Typography variant='h2' sx={{ mb: 3 }}>
          Invoice
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderRadius: 2,
              p: 1,
              '&:hover': {
                border: editInum ? 'none' : '1px solid',
                borderColor: 'divider',
              },
            }}
          >
            <Box component='span' sx={{ mr: 2 }}>
              Invoice ID:
            </Box>
            {editInum ? (
              <TextField
                autoFocus
                size='small'
                variant='outlined'
                value={invoiceNo}
                onChange={(e) => setInvoiceNo(e.target.value)}
                onBlur={() => setEditInum(false)}
              />
            ) : (
              <Box onClick={() => setEditInum(true)}>{invoiceNo}</Box>
            )}
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderRadius: 2,
              p: 1,
              '&:hover': {
                border: editIdt ? 'none' : '1px solid',
                borderColor: 'divider',
              },
            }}
          >
            <Box component='span' sx={{ mr: 2 }}>
              Invoice Date:
            </Box>
            {editIdt ? (
              <DatePicker
                value={dayjs(invoiceDate, 'DD/MM/YYYY')}
                onChange={(value) => {
                  setInvoiceDate(value as Dayjs);
                  setShowIdt(false);
                }}
                // renderInput={(params) => (
                //   <TextField
                //     autoFocus
                //     size="small"
                //     sx={{ width: 190 }}
                //     onBlur={() => setShowIdt(false)}
                //     {...params}
                //   />
                // )}
              />
            ) : (
              <Box onClick={() => setShowIdt(true)}>
                {getFormattedDate(invoiceDate, 'DD/MM/YYYY')}
              </Box>
            )}
          </Box>
        </Box>
        <Box sx={{ mb: 4 }}>
          {editIntroductionText ? (
            <TextField
              autoFocus
              variant='outlined'
              value={introductionText}
              onChange={(e) => setIntroductionText(e.target.value)}
              onBlur={() => setEditIntroductionText(false)}
            />
          ) : introductionText?.length > 0 ? (
            <Box onClick={() => setEditIntroductionText(true)}>
              {introductionText}
            </Box>
          ) : (
            <Box
              sx={{
                color: 'primary.main',
                display: 'flex',
                alignItems: 'center',
              }}
              onClick={() => setEditIntroductionText(true)}
            >
              <AiOutlinePlus size={18} />
              <Box sx={{ ml: 2, fontSize: 16 }}>
                Add Introduction text (Optional)
              </Box>
            </Box>
          )}
        </Box>
      </Box>

      <EditInvoiceTable
        items={items}
        setItems={setItems}
        taxTypeData={taxTypeData}
        taxRateData={taxRateData}
        setTaxTypeData={setTaxTypeData}
        setTaxRateData={setTaxRateData}
        currencyData={currencyData}
        setCurrencyData={setCurrencyData}
      />

      <Box sx={{ py: 10, px: 4 }}>
        <Box sx={{ mb: 4 }}>
          {editDueDays ? (
            <TextField
              autoFocus
              type='number'
              variant='outlined'
              value={dueDays}
              onChange={(e) => setDueDays(Number(e.target.value))}
              onBlur={() => setEditDueDays(false)}
            />
          ) : (
            <Box
              onClick={() => setEditDueDays(true)}
              sx={{
                borderRadius: 2,
                p: 1,
                '&:hover': {
                  border: editDueDays ? 'none' : '1px solid',
                  borderColor: 'divider',
                },
              }}
            >
              <Typography variant='h4' sx={{ mb: 1 }}>
                Payment Terms
              </Typography>
              <Typography variant='body1' sx={{ mb: 4 }}>
                Please Pay within {dueDays} days of receiving this invoice.
              </Typography>
            </Box>
          )}
        </Box>

        <Box sx={{ mb: 3 }}>
          {editConclusionText ? (
            <TextField
              autoFocus
              variant='outlined'
              value={conclusionText}
              onChange={(e) => setConclusionText(e.target.value)}
              onBlur={() => setEditConclusionText(false)}
            />
          ) : conclusionText?.length > 0 ? (
            <Box onClick={() => setEditConclusionText(true)}>
              {conclusionText}
            </Box>
          ) : (
            <Box
              sx={{
                color: 'primary.main',
                display: 'flex',
                alignItems: 'center',
              }}
              onClick={() => setEditConclusionText(true)}
            >
              <AiOutlinePlus size={18} />
              <Box sx={{ ml: 2, fontSize: 16 }}>
                Add concluding text (Optional)
              </Box>
            </Box>
          )}
        </Box>
        <Divider />

        {invoiceSettings?.accounting && (
          <Box
            sx={{
              position: 'relative',
              p: 3,
              my: 4,
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
              width: 'fit-content',
            }}
          >
            <Typography variant='h4' sx={{ mb: 4 }}>
              Bank Account
            </Typography>
            <Box sx={{ color: 'text.primary' }}>
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
        <Button variant='contained' onClick={onSubmit}>
          {selectedInv ? 'Update' : 'Add'} Invoice
        </Button>
      </Box>
    </AppCard>
  );
};

export default AddInvoice;
