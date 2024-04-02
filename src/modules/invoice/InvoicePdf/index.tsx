import InvoicePdf from "./InvoicePdf";
import { useGetDataApi } from "@crema/hooks/APIHooks";
import { useParams } from "react-router-dom";
import { isEmptyObject } from "@crema/helpers/ApiHelper";
import {
  ClientType,
  InvoiceSettingType,
  InvoiceType,
} from "@crema/types/models/invoice";

const InvoicePdfPage = () => {
  const { id } = useParams();

  const [{ apiData: invoiceSettings }] = useGetDataApi<InvoiceSettingType>(
    "/api/invoice/settings",
    {} as InvoiceSettingType,
    {},
    true,
  );

  const [{ apiData: clientsList }] = useGetDataApi<ClientType[]>(
    "/api/invoice/clients",
    [],
    {},
    true,
  );

  const [{ apiData: selectedInv }] = useGetDataApi<InvoiceType>(
    "/api/invoice/detail",
    {} as InvoiceType,
    { id },
    true,
  );

  return clientsList?.length > 0 &&
    !isEmptyObject(invoiceSettings) &&
    !isEmptyObject(selectedInv) ? (
    <InvoicePdf
      selectedInv={selectedInv}
      clientsList={clientsList}
      invoiceSettings={invoiceSettings}
    />
  ) : null;
};

export default InvoicePdfPage;
