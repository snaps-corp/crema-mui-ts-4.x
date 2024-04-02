import AddInvoice from "./AddInvoice";
import { postDataApi, useGetDataApi } from "@crema/hooks/APIHooks";
import { useNavigate } from "react-router-dom";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import {
  ClientType,
  InvoiceSettingType,
  InvoiceType,
} from "@crema/types/models/invoice";

const AddInvoicePage = () => {
  const navigate = useNavigate();
  const infoViewActionsContext = useInfoViewActionsContext();

  const [{ apiData: clientsList }] = useGetDataApi<ClientType[]>(
    "/api/invoice/clients",
    [],
    {},
    true,
  );
  const [{ apiData: invoiceSettings }] = useGetDataApi<InvoiceSettingType>(
    "/api/invoice/settings",
    {} as InvoiceSettingType,
    {},
    true,
  );

  const [{ apiData: invoiceList }] = useGetDataApi<InvoiceType[]>(
    "/api/invoice/list",
    [],
    {},
    true,
  );
  const onSave = (invoice: InvoiceType) => {
    postDataApi("/api/invoice/list/add", infoViewActionsContext, { invoice })
      .then(() => {
        infoViewActionsContext.showMessage(
          "New Invoice has been created successfully!",
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });

    navigate("/invoice/home");
  };

  return clientsList && invoiceList?.length ? (
    <AddInvoice
      clientsList={clientsList}
      totalCount={invoiceList?.length || 0}
      invoiceSettings={invoiceSettings}
      onSave={onSave}
    />
  ) : null;
};

export default AddInvoicePage;
