import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import AppGridContainer from '@crema/components/AppGridContainer';
import AppInfoView from '@crema/components/AppInfoView';

import IntlMessages from '@crema/helpers/IntlMessages';
import Box from '@mui/material/Box';
import { blue } from '@mui/material/colors';
import { Fonts } from '@crema/constants/AppEnums';
import AppAnimate from '@crema/components/AppAnimate';
import FaqSideBar from './FaqSideBar/index';
import FaqList from './FaqList';

import {
  generalFaq,
  installationFaq,
  licenseFaq,
  pricingFaq,
  supportFaq,
} from '@crema/mockapi/fakedb/extraPages';

const FAQ = () => {
  const [dataValue, setDataValue] = useState(generalFaq);
  const [selectionId, setSelectionId] = useState(101);

  const onGetFaqData = (value: number) => {
    setSelectionId(value);
    switch (value) {
      case 101:
        setDataValue(generalFaq);
        break;

      case 102:
        setDataValue(installationFaq);
        break;

      case 103:
        setDataValue(pricingFaq);
        break;

      case 104:
        setDataValue(licenseFaq);
        break;

      case 105:
        setDataValue(supportFaq);
        break;
      default: {
        break;
      }
    }
  };

  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            backgroundColor: blue[500],
            color: 'primary.contrastText',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: 224,
            width: '100%',
            p: 1.5,
            mb: 2,
          }}
        >
          <Box
            component='h2'
            sx={{ mb: 5, fontSize: 20, fontWeight: Fonts.MEDIUM }}
          >
            <IntlMessages id='faq.heading' />
          </Box>
          <Box component='p' sx={{ fontSize: 16 }}>
            <IntlMessages id='faq.content' />
          </Box>
        </Box>

        <AppGridContainer>
          <Grid item xs={12} sm={4} lg={3}>
            <FaqSideBar onGetFaqData={onGetFaqData} selectionId={selectionId} />
          </Grid>

          <Grid item xs={12} sm={8} lg={9}>
            <FaqList faqList={dataValue} />
            <AppInfoView />
          </Grid>
        </AppGridContainer>
      </Box>
    </AppAnimate>
  );
};

export default FAQ;
