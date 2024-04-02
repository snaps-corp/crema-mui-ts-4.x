import InvoiceSettings from "./InvoiceSettings";
import { putDataApi, useGetDataApi } from "@crema/hooks/APIHooks";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import {
  InvoiceSettingItem,
  InvoiceSettingType,
} from "@crema/types/models/invoice";

const InvoiceSettingsPage = () => {
  const [{ apiData }, { reCallAPI }] = useGetDataApi<InvoiceSettingType>(
    "/api/invoice/settings",
    {} as InvoiceSettingType,
    {},
    true,
  );
  const infoViewActionsContext = useInfoViewActionsContext();

  const onUpdateSettings = (key: string, newSettings: InvoiceSettingItem) => {
    const settings = {
      ...apiData,
      [key]: newSettings,
    };

    putDataApi("/api/invoice/settings/update", infoViewActionsContext, settings)
      .then(() => {
        reCallAPI();
        infoViewActionsContext.showMessage("Settings Updated Successfully");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  return (
    <InvoiceSettings
      defaultSettings={apiData}
      onUpdateSettings={onUpdateSettings}
    />
  );
};

export default InvoiceSettingsPage;
