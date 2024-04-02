import React, { useEffect, useState } from 'react';
import InvContentHeader from './InvContentHeader';
import AppsHeader from '@crema/components/AppsContainer/AppsHeader';
import AppsContent from '@crema/components/AppsContainer/AppsContent';
import { putDataApi, useGetDataApi } from '@crema/hooks/APIHooks';
import InvoiceTable from './InvoiceTable';
import { useLocation, useParams } from 'react-router-dom';
import { useInfoViewActionsContext } from '@crema/context/AppContextProvider/InfoViewContextProvider';
import { isEmptyObject } from '@crema/helpers/ApiHelper';
import AppLoader from '@crema/components/AppLoader';
import { InvoiceType } from '@crema/types/models/invoice';

const InvoiceList = () => {
  const params = useParams();
  const { pathname } = useLocation();
  const infoViewActionsContext = useInfoViewActionsContext();

  const [{ apiData: invoiceList, loading }, { setQueryParams, reCallAPI }] =
    useGetDataApi<InvoiceType[]>(
      '/api/invoice/list',
      [],
      { folder: params?.folder || 'all' },
      true,
    );

  const [page, setPage] = useState(0);

  const onPageChange = (event: any, value: number) => {
    setPage(value);
  };
  const [filterText, onSetFilterText] = useState('');

  const [checkedInvs, setCheckedInvs] = useState<number[]>([]);

  useEffect(() => {
    setQueryParams({
      folder: params?.folder,
      page: page,
    });
  }, [page, pathname]);

  const onChangeStatus = (invoice: InvoiceType, status: number) => {
    invoice.folderValue = status;

    putDataApi('/api/invoice/list/update', infoViewActionsContext, { invoice })
      .then(() => {
        reCallAPI();
        infoViewActionsContext.showMessage(
          'Invoice status udpated successfully!',
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };
  return !isEmptyObject(invoiceList) ? (
    <>
      <AppsHeader>
        <InvContentHeader
          page={page}
          invoiceList={invoiceList || []}
          checkedInvs={checkedInvs}
          setCheckedInvs={setCheckedInvs}
          filterText={filterText}
          onSetFilterText={onSetFilterText}
          onPageChange={onPageChange}
        />
      </AppsHeader>
      <AppsContent>
        <InvoiceTable
          invoiceData={invoiceList || []}
          loading={loading}
          onChangeStatus={onChangeStatus}
        />
      </AppsContent>
    </>
  ) : (
    <AppLoader />
  );
};

export default InvoiceList;
