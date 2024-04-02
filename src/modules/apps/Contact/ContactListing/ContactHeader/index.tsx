import React from "react";
import Box from "@mui/material/Box";
import AppSearchBar from "@crema/components/AppSearchBar";
import { Hidden } from "@mui/material";
import { useIntl } from "react-intl";
import CheckBox from "./CheckBox";
import ContactCheckedActions from "./ContactCheckedActions";
import AppsPagination from "@crema/components/AppsPagination";
import ViewSelectButtons from "./ViewSelectButtons";
import { ContactObjType } from "@crema/types/models/apps/Contact";
import {
  useContactActionsContext,
  useContactContext,
} from "../../../context/ContactContextProvider";

type Props = {
  checkedContacts: number[];
  setCheckedContacts: (checkedContacts: number[]) => void;
  filterText: string;
  onSetFilterText: (filterText: string) => void;
  onUpdateContacts: (contacts: ContactObjType[]) => void;
  onSelectContactsForDelete: (ids: number[]) => void;
};

const ContactHeader = (props: Props) => {
  const {
    checkedContacts,
    setCheckedContacts,
    filterText,
    onSetFilterText,
    onUpdateContacts,
    onSelectContactsForDelete,
  } = props;

  const { page, pageView, contactList } = useContactContext();
  const { onPageChange, setPageView } = useContactActionsContext();

  const { messages } = useIntl();

  return (
    <>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <CheckBox
          checkedContacts={checkedContacts}
          setCheckedContacts={setCheckedContacts}
        />

        <AppSearchBar
          iconPosition="right"
          overlap={false}
          value={filterText}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onSetFilterText(event.target.value)
          }
          placeholder={messages["common.searchHere"] as string}
        />
        {checkedContacts.length > 0 ? (
          <ContactCheckedActions
            onSelectContactsForDelete={onSelectContactsForDelete}
            checkedContacts={checkedContacts}
            setCheckedContacts={setCheckedContacts}
            onUpdateContacts={onUpdateContacts}
          />
        ) : null}

        <ViewSelectButtons pageView={pageView} onChangePageView={setPageView} />
      </Box>
      <Hidden smDown>
        {contactList?.data?.length > 0 ? (
          <AppsPagination
            sx={{ ml: 2 }}
            count={contactList?.count}
            page={page}
            onPageChange={onPageChange}
          />
        ) : null}
      </Hidden>
    </>
  );
};

export default ContactHeader;

ContactHeader.defaultProps = {
  checkedContacts: [],
  filterText: "",
  page: 0,
};
