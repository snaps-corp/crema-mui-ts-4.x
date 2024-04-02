import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import IntlMessages from "@crema/helpers/IntlMessages";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppTooltip from "@crema/components/AppTooltip";
import IconButton from "@mui/material/IconButton";
import { putDataApi } from "@crema/hooks/APIHooks";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import { MailType } from "@crema/types/models/apps/Mail";
import { useMailContext } from "../../../context/MailContextProvider";

type Props = {
  selectedMail: MailType;
  onUpdateSelectedMail: (data: MailType) => void;
};

const MailDetailHeader = (props: Props) => {
  const { selectedMail, onUpdateSelectedMail } = props;
  const infoViewActionsContext = useInfoViewActionsContext();

  const navigate = useNavigate();

  const { labelList } = useMailContext();
  const [isLabelOpen, onOpenLabel] = React.useState<null | HTMLElement>(null);

  const [isMoreIcon, onOpenMoreIcon] = React.useState<null | HTMLElement>(null);

  const onClickBackButton = () => {
    navigate(-1);
  };

  const onLabelOpen = (event: React.MouseEvent<HTMLElement>) => {
    onOpenLabel(event.currentTarget);
  };

  const onLabelClose = () => {
    onOpenLabel(null);
  };

  const onViewMoreOpen = (event: React.MouseEvent<HTMLElement>) => {
    onOpenMoreIcon(event.currentTarget);
  };

  const onViewMoreClose = () => {
    onOpenMoreIcon(null);
  };

  const onSelectLabel = (event: any) => {
    const mail = selectedMail;
    mail.label = event.target.value;
    putDataApi("/api/mailApp/mail/", infoViewActionsContext, { mail })
      .then(() => {
        onUpdateSelectedMail(mail);
        onOpenLabel(null);
        infoViewActionsContext.showMessage("Mail Updated Successfully");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onChangeMailFolder = (type: number) => {
    const mail = selectedMail;
    mail.folderValue = type;
    putDataApi("/api/mailApp/update/folder", infoViewActionsContext, {
      mailIds: [selectedMail.id],
      type,
    })
      .then(() => {
        selectedMail.folderValue = type;
        navigate(-1);
        onUpdateSelectedMail(selectedMail);
        infoViewActionsContext.showMessage("Mail Updated Successfully");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onChangeReadStatus = () => {
    const mail = selectedMail;
    mail.isRead = false;
    putDataApi<MailType>("/api/mailApp/mail/", infoViewActionsContext, { mail })
      .then((data) => {
        onUpdateSelectedMail(data);
        navigate(-1);
        infoViewActionsContext.showMessage(
          mail.isRead
            ? "Mail Marked as Read Successfully"
            : "Mail Marked as Unread Successfully",
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onChangeStarredStatus = () => {
    const mail = selectedMail;
    mail.isStarred = !mail.isStarred;
    putDataApi("/api/mailApp/update/starred", infoViewActionsContext, {
      mailIds: [mail.id],
      status: mail.isStarred,
    })
      .then(() => {
        onUpdateSelectedMail(mail);
        infoViewActionsContext.showMessage(
          mail.isStarred
            ? "Mail Marked as Starred Successfully"
            : "Mail Marked as Unstarred Successfully",
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
    onOpenMoreIcon(null);
  };

  if (!selectedMail) return null;
  return (
    <>
      <AppTooltip title={<IntlMessages id="common.back" />}>
        <IconButton
          sx={{
            color: (theme) => theme.palette.text.disabled,
          }}
          onClick={onClickBackButton}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </AppTooltip>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <AppTooltip title={<IntlMessages id="common.archive" />}>
          <IconButton
            sx={{
              color: (theme) => theme.palette.text.disabled,
            }}
            onClick={() => onChangeMailFolder(127)}
          >
            <ArchiveOutlinedIcon />
          </IconButton>
        </AppTooltip>

        <AppTooltip title={<IntlMessages id="common.reportSpam" />}>
          <IconButton
            sx={{
              color: (theme) => theme.palette.text.disabled,
            }}
            onClick={() => onChangeMailFolder(125)}
          >
            <InfoOutlinedIcon />
          </IconButton>
        </AppTooltip>

        <AppTooltip title={<IntlMessages id="common.trash" />}>
          <IconButton
            sx={{
              color: (theme) => theme.palette.text.disabled,
            }}
            onClick={() => onChangeMailFolder(126)}
          >
            <DeleteOutlinedIcon />
          </IconButton>
        </AppTooltip>

        <AppTooltip title={<IntlMessages id="mailApp.markAsUnread" />}>
          <IconButton
            sx={{
              color: (theme) => theme.palette.text.disabled,
            }}
            onClick={() => onChangeReadStatus()}
          >
            <MarkunreadOutlinedIcon />
          </IconButton>
        </AppTooltip>

        <AppTooltip title={<IntlMessages id="common.label" />}>
          <IconButton
            sx={{
              color: (theme) => theme.palette.text.disabled,
            }}
            value={1}
            onClick={onLabelOpen}
          >
            <LabelOutlinedIcon />
          </IconButton>
        </AppTooltip>

        <Menu
          anchorEl={isLabelOpen}
          open={Boolean(isLabelOpen)}
          onClose={onLabelClose}
        >
          {labelList.map((label) => {
            return (
              <MenuItem onClick={onSelectLabel} value={label.id} key={label.id}>
                {label.name}
              </MenuItem>
            );
          })}
        </Menu>
      </Box>

      <Box
        sx={{
          ml: "auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        <AppTooltip title={<IntlMessages id="common.more" />}>
          <IconButton
            sx={{
              color: (theme) => theme.palette.text.disabled,
            }}
            onClick={onViewMoreOpen}
          >
            <MoreVertIcon />
          </IconButton>
        </AppTooltip>

        <Menu
          anchorEl={isMoreIcon}
          open={Boolean(isMoreIcon)}
          onClose={onViewMoreClose}
        >
          <MenuItem onClick={onChangeReadStatus}>
            <IntlMessages id="mailApp.markAsUnread" />
          </MenuItem>
          <MenuItem onClick={onChangeStarredStatus}>
            {selectedMail.isStarred ? (
              <IntlMessages id="mailApp.markAsNotImportant" />
            ) : (
              <IntlMessages id="mailApp.markAsImportant" />
            )}
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};

export default MailDetailHeader;
