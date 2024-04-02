import React, { useEffect, useState } from 'react';
import AppsContainer from '@crema/components/AppsContainer';
import { useIntl } from 'react-intl';
import { Button, Hidden } from '@mui/material';
import AppsHeader from '@crema/components/AppsContainer/AppsHeader';
import AppsContent from '@crema/components/AppsContainer/AppsContent';
import AppsPagination from '@crema/components/AppsPagination';
import Box from '@mui/material/Box';
import AppSearchBar from '@crema/components/AppSearchBar';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import OrderTable from './OrderTable';
import { RecentOrdersType } from '@crema/types/models/ecommerce/EcommerceApp';

type OrderType = {
  count: number;
  data: RecentOrdersType[];
};

const Orders = () => {
  const { messages } = useIntl();
  const [{ apiData }, { setQueryParams }] = useGetDataApi<OrderType>(
    '/api/ecommerce/orders',
    {
      count: 0,
      data: [],
    } as OrderType,
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

  const onSearchOrder = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setPage(0);
  };

  return (
    <AppsContainer
      title={messages['eCommerce.recentOrders'] as string}
      fullView
    >
      <AppsHeader>
        <Box
          display='flex'
          flexDirection='row'
          alignItems='center'
          width={1}
          justifyContent='space-between'
        >
          <AppSearchBar
            iconPosition='right'
            overlap={false}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onSearchOrder(event)
            }
            placeholder={messages['common.searchHere'] as string}
          />
          <Box display='flex' flexDirection='row' alignItems='center'>
            <Button variant='contained' color='primary'>
              Add Order
            </Button>

            <Hidden smDown>
              <AppsPagination
                rowsPerPage={10}
                count={apiData?.count}
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
        <OrderTable orderData={apiData?.data || []} />
      </AppsContent>

      <Hidden smUp>
        <AppsPagination
          rowsPerPage={10}
          count={apiData?.count}
          page={page}
          onPageChange={onPageChange}
        />
      </Hidden>
    </AppsContainer>
  );
};

export default Orders;
