import Box from "@mui/material/Box";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AppsStarredIcon from "@crema/components/AppsStarredIcon";
import { IconButton } from "@mui/material";
import { ContactObjType } from "@crema/types/models/apps/Contact";

interface Props {
  contact: ContactObjType | null;
  onDeleteContact: () => void;
  onChangeStarred: (checked: boolean, item: any) => void;
  onOpenEditContact: (contact: ContactObjType) => void;
}

const ContactActions = (props: Props) => {
  const { onDeleteContact, onChangeStarred, onOpenEditContact, contact } =
    props;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          transition: "all 0.5s ease",
          opacity: 0,
          visibility: "hidden",
        }}
        className="btn-action-view"
      >
        <IconButton
          onClick={onDeleteContact}
          sx={{
            color: (theme) => theme.palette.text.secondary,
            "& svg": {
              fontSize: 20,
            },
          }}
        >
          <DeleteOutlinedIcon />
        </IconButton>
        <IconButton
          onClick={() => onOpenEditContact(contact!)}
          sx={{
            color: (theme) => theme.palette.text.secondary,
            "& svg": {
              fontSize: 20,
            },
          }}
        >
          <EditOutlinedIcon />
        </IconButton>
      </Box>
      <AppsStarredIcon item={contact} onChange={onChangeStarred} />
    </Box>
  );
};

export default ContactActions;
