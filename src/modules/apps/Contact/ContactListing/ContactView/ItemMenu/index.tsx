import React from "react";
import IntlMessages from "@crema/helpers/IntlMessages";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AppTooltip from "@crema/components/AppTooltip";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";
import { ContactObjType } from "@crema/types/models/apps/Contact";

const ContactActionHoverWrapper = styled("div")(() => {
  return {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: -30,
    top: "50%",
    zIndex: 1,
    transform: "translateY(-50%)",
    transition: "all 0.4s ease",
    opacity: 0,
    visibility: "hidden",
  };
});

interface Props {
  onSelectContactsForDelete: (ids: number[]) => void;
  contact: ContactObjType;
  onChangeStarred: (isStarred: boolean, contact: ContactObjType) => void;
  onOpenEditContact: (contact: ContactObjType) => void;
}

const ItemMenu = (props: Props) => {
  const {
    onSelectContactsForDelete,
    contact,
    onChangeStarred,
    onOpenEditContact,
  } = props;

  const onDeleteContact = (
    e:
      | React.MouseEvent<HTMLAnchorElement>
      | React.MouseEvent<HTMLButtonElement>,
  ) => {
    onSelectContactsForDelete([contact.id]);
    e.stopPropagation();
  };

  const onChangeStarredStatus = (
    e:
      | React.MouseEvent<HTMLAnchorElement>
      | React.MouseEvent<HTMLButtonElement>,
  ) => {
    onChangeStarred(!contact.isStarred, contact);
    e.stopPropagation();
  };

  const onClickEditOption = (
    e:
      | React.MouseEvent<HTMLAnchorElement>
      | React.MouseEvent<HTMLButtonElement>,
  ) => {
    onOpenEditContact(contact);
    e.stopPropagation();
  };

  return (
    <Box
      component="span"
      sx={{
        display: "flex",
        alignItems: "center",
        marginLeft: "auto",
        position: "relative",
      }}
    >
      <span className="conActionHoverHideRoot">
        <AppTooltip title={<IntlMessages id="common.more" />}>
          <IconButton
            sx={{
              color: (theme) => theme.palette.text.disabled,
              padding: 2,
              "& .MuiSvgIcon-root": {
                fontSize: 22,
              },
            }}
            size="large"
          >
            <MoreVertIcon />
          </IconButton>
        </AppTooltip>
      </span>

      <ContactActionHoverWrapper className="conActionHoverRoot">
        <IconButton
          sx={{
            color: (theme) => theme.palette.warning.main,
            padding: 2,
            "& .MuiSvgIcon-root": {
              fontSize: 22,
            },
          }}
          onClick={onChangeStarredStatus}
          size="large"
        >
          {contact.isStarred ? <StarBorderIcon /> : <StarIcon />}
        </IconButton>
        <IconButton
          sx={{
            color: (theme) => theme.palette.text.disabled,
            padding: 2,
            "& .MuiSvgIcon-root": {
              fontSize: 22,
            },
          }}
          onClick={onClickEditOption}
          size="large"
        >
          <EditOutlinedIcon />
        </IconButton>
        <IconButton
          sx={{
            color: (theme) => theme.palette.text.disabled,
            padding: 2,
            "& .MuiSvgIcon-root": {
              fontSize: 22,
            },
          }}
          onClick={onDeleteContact}
          size="large"
        >
          <DeleteOutlinedIcon />
        </IconButton>
      </ContactActionHoverWrapper>
    </Box>
  );
};

export default ItemMenu;
