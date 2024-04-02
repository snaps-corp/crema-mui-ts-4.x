import React, { useEffect, useState } from 'react';
import AppsContainer from '@crema/components/AppsContainer';
import { useIntl } from 'react-intl';
import { Hidden } from '@mui/material';
import AppsHeader from '@crema/components/AppsContainer/AppsHeader';
import AppsContent from '@crema/components/AppsContainer/AppsContent';
import AppsPagination from '@crema/components/AppsPagination';
import Box from '@mui/material/Box';
import AppSearchBar from '@crema/components/AppSearchBar';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import CustomerTable from './CustomerTable';
import { CustomersDataType } from '@crema/types/models/ecommerce/EcommerceApp';

type CustomerType = {
  customerCount: number;
  customers: CustomersDataType[];
};
const Customers = () => {
  const { messages } = useIntl();
  const [
    {
      apiData: { customers, customerCount },
    },
    { setQueryParams },
  ] = useGetDataApi<CustomerType>(
    '/api/ecommerce/customers',
    {
      customers: [],
      customerCount: 0,
    } as CustomerType,
    {},
    false,
  );

  const [page, setPage] = useState(0);
  const [search, setSearchQuery] = useState('');

  const onPageChange = (event: any, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    setQueryParams({ search, page });
  }, [search, page]);

  const onSearchCustomer = (e: any) => {
    setSearchQuery(e.target.value);
    console.log('onSearchCustomer: ', e.target.value);
    setPage(0);
  };

  return (
    <AppsContainer
      title={messages['sidebar.ecommerce.customers'] as string}
      fullView
    >
      <AppsHeader>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: 1,
          }}
        >
          <AppSearchBar
            iconPosition='right'
            overlap={false}
            onChange={onSearchCustomer}
            placeholder={messages['common.searchHere'] as string}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              ml: 'auto',
            }}
          >
            <Hidden smDown>
              <AppsPagination
                rowsPerPage={10}
                count={customerCount}
                page={page}
                onPageChange={onPageChange}
              />
            </Hidden>
          </Box>
        </Box>
      </AppsHeader>

      <AppsContent
        sx={{
          paddingTop: 2.5,
          paddingBottom: 2.5,
        }}
      >
        <CustomerTable customers={customers} />
      </AppsContent>

      <Hidden smUp>
        <AppsPagination
          rowsPerPage={10}
          count={customerCount}
          page={page}
          onPageChange={onPageChange}
        />
      </Hidden>
    </AppsContainer>
  );
};

export default Customers;
