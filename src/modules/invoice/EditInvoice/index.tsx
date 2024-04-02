import AddInvoice from "../AddInvoice/AddInvoice";
import { putDataApi, useGetDataApi } from "@crema/hooks/APIHooks";
import { useNavigate, useParams } from "react-router-dom";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import { isEmptyObject } from "@crema/helpers/ApiHelper";
import {
  ClientType,
  InvoiceSettingType,
  InvoiceType,
} from "@crema/types/models/invoice";

const EditInvoicePage = () => {
  const { id } = useParams();
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
  const [{ apiData: selectedInv }] = useGetDataApi<InvoiceType>(
    "/api/invoice/detail",
    {} as InvoiceType,
    { id },
    true,
  );

  const onSave = (invoice: InvoiceType) => {
    putDataApi("/api/invoice/list/update", infoViewActionsContext, { invoice })
      .then(() => {
        infoViewActionsContext.showMessage(
          "New Invoice has been udpated successfully!",
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });

    navigate("/invoice/home");
  };

  return clientsList && invoiceList?.length && !isEmptyObject(selectedInv) ? (
    <AddInvoice
      selectedInv={selectedInv}
      clientsList={clientsList}
      totalCount={invoiceList?.length || 0}
      invoiceSettings={invoiceSettings}
      onSave={onSave}
    />
  ) : null;
};

export default EditInvoicePage;
