import AppMessageView from "../AppMessageView";
import AppLoader from "../AppLoader";
// import { useDispatch, useSelector } from 'react-redux';
// import { hideMessage } from "@crema/redux-toolkit/actions";
import {
  useInfoViewActionsContext,
  useInfoViewContext,
} from "@crema/context/AppContextProvider/InfoViewContextProvider";

const AppInfoView = () => {
  // Only for Context APIs
  const { error, loading, message } = useInfoViewContext();
  const { clearInfoView } = useInfoViewActionsContext();

  // // Only for redux
  // const { error, loading, message } = useSelector(({ common }) => common);
  // const dispatch = useDispatch();
  // const clearInfoView = () => {
  //   dispatch(hideMessage());
  // };

  const showMessage = () => {
    return (
      <AppMessageView
        variant="success"
        message={message.toString()}
        clearInfoView={clearInfoView}
      />
    );
  };

  const showError = () => {
    return (
      <AppMessageView
        variant="error"
        message={error.toString()}
        clearInfoView={clearInfoView}
      />
    );
  };
  return (
    <>
      {loading && <AppLoader />}

      {message && showMessage()}
      {error && showError()}
    </>
  );
};

export default AppInfoView;
