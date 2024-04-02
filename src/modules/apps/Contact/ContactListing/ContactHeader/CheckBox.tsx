import React from "react";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import { useContactContext } from "../../../context/ContactContextProvider";

type Props = {
  checkedContacts: number[];
  setCheckedContacts: (contactIds: number[]) => void;
};

const CheckBox = ({ checkedContacts, setCheckedContacts }: Props) => {
  const { contactList } = useContactContext();

  const onHandleMasterCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.checked) {
      const contactIds = contactList?.data.map((contact) => contact.id);
      setCheckedContacts(contactIds);
    } else {
      setCheckedContacts([]);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Checkbox
        sx={{
          color: (theme) => theme.palette.text.disabled,
        }}
        color="primary"
        indeterminate={
          checkedContacts.length > 0 &&
          checkedContacts.length < contactList?.data?.length
        }
        checked={
          contactList?.data?.length > 0 &&
          checkedContacts.length === contactList?.data?.length
        }
        onChange={onHandleMasterCheckbox}
      />
    </Box>
  );
};

export default CheckBox;
