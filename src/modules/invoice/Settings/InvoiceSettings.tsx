import IntlMessages from '@crema/helpers/IntlMessages';
import { Box, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import Invoicing from './Invoicing';
import General from './General';
import Accounting from './Accounting';
import AppCard from '@crema/components/AppCard';
import {
  InvoiceSettingItem,
  InvoiceSettingType,
} from '@crema/types/models/invoice';

type Props = {
  defaultSettings: InvoiceSettingType;
  onUpdateSettings: (key: string, newSettings: InvoiceSettingItem) => void;
};

const InvoiceSettings = ({ defaultSettings, onUpdateSettings }: Props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };
  return (
    <AppCard title='Settings'>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{
          '& .crMuiTab': {
            textTransform: 'capitalize',
            p: 0,
          },
        }}
      >
        <Tab
          className='crMuiTab'
          label={<IntlMessages id='faq.general' />}
          {...a11yProps(0)}
        />
        <Tab
          className='crMuiTab'
          label={<IntlMessages id='invoice.invoicing' />}
          {...a11yProps(1)}
        />
        <Tab
          className='crMuiTab'
          label={<IntlMessages id='invoice.accounting' />}
          {...a11yProps(2)}
        />
      </Tabs>
      {defaultSettings?.general && (
        <Box
          sx={{
            mt: 4,
          }}
        >
          {value === 0 && (
            <General
              settings={defaultSettings?.general}
              onUpdateSettings={onUpdateSettings}
            />
          )}
          {value === 1 && (
            <Invoicing
              settings={defaultSettings?.invoicing}
              onUpdateSettings={onUpdateSettings}
            />
          )}
          {value === 2 && (
            <Accounting
              settings={defaultSettings?.accounting}
              onUpdateSettings={onUpdateSettings}
            />
          )}
        </Box>
      )}
    </AppCard>
  );
};

export default InvoiceSettings;
