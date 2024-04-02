import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useIntl } from 'react-intl';
import Box from '@mui/material/Box';
import { Fonts } from '@crema/constants/AppEnums';
import AppAnimate from '@crema/components/AppAnimate';
import Sales from './Sales';
import Installation from './Installation';
import { installationData, salesData } from '@crema/mockapi/fakedb/extraPages';

const KnowledgeBase = () => {
  const { messages } = useIntl();

  const [filterText, setFilterText] = useState('');

  const saleQueries =
    filterText !== ''
      ? salesData.filter((data) => data.ques.includes(filterText))
      : salesData;

  const installationQueries =
    filterText !== ''
      ? installationData.filter((data) => data.ques.includes(filterText))
      : installationData;

  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <Box flex={1}>
        <Box mx='auto' textAlign='center' maxWidth={768}>
          <Box
            component='h2'
            color='text.primary'
            mb={6}
            fontSize={20}
            fontWeight={Fonts.MEDIUM}
          >
            <IntlMessages id='knowledge.howHelp' />
          </Box>

          <TextField
            id='outlined-with-placeholder'
            placeholder={messages['knowledge.AppSkeleton'] as string}
            style={{ width: '100%' }}
            variant='outlined'
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position='start'
                  sx={{
                    fontWeight: Fonts.MEDIUM,
                  }}
                >
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            value={filterText}
            onChange={(event) => setFilterText(event.target.value)}
          />
        </Box>

        <Divider
          sx={{
            marginTop: { xs: 4, sm: 6, lg: 8, xl: 10 },
            marginBottom: { xs: 4, sm: 6, lg: 8, xl: 10 },
          }}
        />

        <Sales saleQueries={saleQueries} />

        <Installation installationQueries={installationQueries} />
      </Box>
    </AppAnimate>
  );
};

export default KnowledgeBase;
