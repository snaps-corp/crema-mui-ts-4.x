import { useNavigate } from "react-router-dom";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import AddClient from "./AddClient";
import { postDataApi } from "@crema/hooks/APIHooks";
import { ClientType } from "@crema/types/models/invoice";

const AddClients = () => {
  const navigate = useNavigate();
  const infoViewActionsContext = useInfoViewActionsContext();

  const onSave = (client: ClientType) => {
    postDataApi("/api/invoice/clients/add", infoViewActionsContext, {
      client,
    })
      .then(() => {
        infoViewActionsContext.showMessage(
          "New Client has been created successfully!",
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });

    navigate("/invoice/clients");
  };

  return <AddClient onSave={onSave} />;
};

export default AddClients;
