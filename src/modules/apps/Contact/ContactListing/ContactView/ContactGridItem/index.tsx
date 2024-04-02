import { Card } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import BusinessIcon from "@mui/icons-material/Business";
import IntlMessages from "@crema/helpers/IntlMessages";
import Box from "@mui/material/Box";
import { blue } from "@mui/material/colors";
import { Fonts } from "@crema/constants/AppEnums";
import ItemMenu from "../ItemMenu";

import { styled } from "@mui/material/styles";
import { ContactObjType, LabelType } from "@crema/types/models/apps/Contact";

const GridCard = styled(Card)(({ theme }: { theme: any }) => {
  return {
    borderRadius: theme.cardRadius,
    border: `solid 1px ${theme.palette.grey[300]}`,
    position: "relative",
    padding: 16,
    cursor: "pointer",
    height: "100%",
    [theme.breakpoints.up("md")]: {
      padding: 20,
    },
    "&:hover": {
      "& .conActionHoverRoot": {
        opacity: 1,
        visibility: "visible",
        right: 0,
      },
      "& .conActionHoverHideRoot": {
        opacity: 0,
        visibility: "hidden",
      },
    },
  };
});

interface Props {
  contact: ContactObjType;
  labelList: LabelType[];
  onChangeStarred: (isStarred: boolean, contact: ContactObjType) => void;
  onChangeCheckedContacts: (event: any, id: number) => void;
  checkedContacts: number[];
  onSelectContactsForDelete: (contactIds: number[]) => void;
  onOpenEditContact: (contact: ContactObjType) => void;
  onViewContactDetail: (contact: ContactObjType) => void;

  [x: string]: any;
}

const ContactGridItem = (props: Props) => {
  const {
    contact,
    onChangeCheckedContacts,
    checkedContacts,
    onChangeStarred,
    onSelectContactsForDelete,
    onOpenEditContact,
    onViewContactDetail,
  } = props;

  return (
    <GridCard
      className="card-hover"
      onClick={() => onViewContactDetail(contact)}
    >
      <Box
        sx={{
          mb: 1,
          mt: -3,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            ml: -2,
          }}
          component="span"
          onClick={(event) => event.stopPropagation()}
        >
          <Checkbox
            checked={checkedContacts.includes(contact.id)}
            onChange={(event) => onChangeCheckedContacts(event, contact.id)}
            color="primary"
          />
        </Box>

        <ItemMenu
          contact={contact}
          onChangeStarred={onChangeStarred}
          onOpenEditContact={onOpenEditContact}
          onSelectContactsForDelete={onSelectContactsForDelete}
        />
      </Box>

      <Box
        sx={{
          mb: { xs: 3, lg: 4, xl: 5 },
          display: "flex",
          alignItems: "center",
        }}
      >
        {contact.image ? (
          <Avatar
            sx={{
              width: 46,
              height: 46,
              backgroundColor: blue[500],
            }}
            src={contact.image}
          />
        ) : (
          <Avatar
            sx={{
              width: 46,
              height: 46,
              backgroundColor: blue[500],
            }}
          >
            {contact.name[0].toUpperCase()}
          </Avatar>
        )}
        <Box
          sx={{
            ml: 4,
            width: "calc(100% - 65px)",
          }}
        >
          <Box
            component="p"
            sx={{
              fontWeight: Fonts.MEDIUM,
              fontSize: 14,
            }}
          >
            {contact.name}
          </Box>
          <Box
            component="p"
            sx={{
              fontSize: 14,
              color: "text.secondary",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {contact.email ? contact.email : null}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          pt: 2,
          fontSize: 13,
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Box
          sx={{
            py: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <BusinessIcon
            sx={{
              fontSize: 20,
            }}
          />
          <Box
            sx={{
              ml: 3.5,
            }}
            component="p"
          >
            {contact.company ? (
              contact.company
            ) : (
              <IntlMessages id="common.na" />
            )}
          </Box>
        </Box>
        <Box
          sx={{
            pt: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <PhoneOutlinedIcon
            sx={{
              fontSize: 20,
            }}
          />
          <Box
            sx={{
              ml: 3.5,
            }}
            component="p"
          >
            {contact.contact}
          </Box>
        </Box>
      </Box>
    </GridCard>
  );
};

export default ContactGridItem;
