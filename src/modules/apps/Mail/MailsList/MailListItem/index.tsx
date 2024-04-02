import { Checkbox } from "@mui/material";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";

import dayjs from "dayjs";
import clsx from "clsx";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppsStarredIcon from "@crema/components/AppsStarredIcon";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
  MailInfoWrapper,
  MailItemWrapper,
  MainActionWrapper,
} from "./index.styles";
import { Fonts } from "@crema/constants/AppEnums";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import { putDataApi } from "@crema/hooks/APIHooks";
import { MailType } from "@crema/types/models/apps/Mail";

type Props = {
  mail: MailType;
  checkedMails: number[];
  onChangeCheckedMails: (check: boolean, id: number) => void;
  onChangeStarred: (checked: boolean, mail: MailType) => void;
  onViewMailDetail: (mail: MailType) => void;
  onRemoveItem: (data: MailType) => void;
  onUpdateItem: (data: MailType) => void;
};

const MailListItem = (props: Props) => {
  const {
    mail,
    checkedMails,
    onChangeCheckedMails,
    onChangeStarred,
    onViewMailDetail,
    onRemoveItem,
    onUpdateItem,
  } = props;
  const infoViewActionsContext = useInfoViewActionsContext();
  const messages = mail.messages!.length;
  const onGetMailDate = (date: string) => {
    if (
      dayjs(date, "ddd, MMM DD, YYYY").format() ===
      dayjs("ddd, MMM DD, YYYY").format()
    ) {
      return dayjs(date).format("LT");
    } else {
      return date.split(",")[1];
    }
  };

  const onArchive = (e: any) => {
    e.stopPropagation();
    putDataApi("/api/mailApp/update/folder", infoViewActionsContext, {
      mailIds: [mail.id],
      type: 127,
    })
      .then(() => {
        onRemoveItem(mail);
        infoViewActionsContext.showMessage("Mail Archieved Successfully");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };
  const onUpdateReadStatus = (e: any) => {
    e.stopPropagation();
    putDataApi<MailType>("/api/mailApp/update/read", infoViewActionsContext, {
      mailIds: [mail.id],
      status: !mail.isRead,
    })
      .then((data) => {
        onUpdateItem(data);
        console.log("onChangeReadStatus: ", data);
        infoViewActionsContext.showMessage(
          data.isRead
            ? "Mail Marked as Read Successfully"
            : "Mail Marked as Unread Successfully",
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };
  const onReportSpam = (e: any) => {
    e.stopPropagation();
    putDataApi("/api/mailApp/update/folder", infoViewActionsContext, {
      mailIds: [mail.id],
      type: 125,
    })
      .then(() => {
        onRemoveItem(mail);
        infoViewActionsContext.showMessage("Mail Reported Successfully");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };
  const onDelete = (e: any) => {
    e.stopPropagation();
    putDataApi("/api/mailApp/update/folder", infoViewActionsContext, {
      mailIds: [mail.id],
      type: 126,
    })
      .then(() => {
        onRemoveItem(mail);
        infoViewActionsContext.showMessage("Mail Deleted Successfully");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const getSenderName = () => {
    if (messages === 1) {
      return mail!.messages![0].sender!.name;
    } else if (messages === 2) {
      return `${mail.messages![0].sender.name}, ${
        mail.messages![1].sender.name
      }(2)`;
    } else {
      return `${mail.messages![0].sender.name}, ${
        mail.messages![messages - 2].sender.name
      }, ${mail.messages![messages - 1].sender.name}(${messages})`;
    }
  };
  const getLastSenderName = () => {
    if (messages === 1) {
      return mail.messages![0].sender.name;
    } else if (messages === 2) {
      return `${mail.messages![0].sender.name}, ${
        mail.messages![1].sender.name
      }(2)`;
    } else {
      return `${mail.messages![0].sender.name}, ${
        mail.messages![messages - 2].sender.name
      }, ${mail.messages![messages - 1].sender.name}(${messages})`;
    }
  };

  const getSenderImage = () => {
    if (messages === 1) {
      return mail.messages![0].sender.profilePic;
    } else if (messages === 2) {
      return mail.messages![1].sender.profilePic;
    } else {
      return mail.messages![2].sender.profilePic;
    }
  };

  return (
    <MailItemWrapper
      dense
      key={mail.id}
      className={clsx("item-hover", {
        active: checkedMails.includes(mail.id),
      })}
      onClick={() => onViewMailDetail(mail)}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: { xs: "100%", sm: "auto" },
        }}
      >
        <Box
          component="span"
          sx={{
            display: "inline-block",
          }}
          onClick={(event) => event.stopPropagation()}
        >
          <Checkbox
            sx={{
              color: (theme) => theme.palette.text.disabled,
            }}
            checked={checkedMails.includes(mail.id)}
            onChange={(event) =>
              onChangeCheckedMails(event.target.checked, mail.id)
            }
            color="primary"
          />
        </Box>
        <Box
          sx={{
            mr: 2.5,
            display: { xs: "none", sm: "inline-block" },
            "& .MuiCheckbox-root": {
              color: (theme) => theme.palette.warning.main,
            },
          }}
          component="span"
          onClick={(event) => event.stopPropagation()}
        >
          <AppsStarredIcon item={mail} onChange={onChangeStarred} />
        </Box>

        <Box
          sx={{
            mr: 3.5,
          }}
        >
          <Avatar
            className="avatar"
            alt={getSenderName()}
            src={getSenderImage()}
          />
        </Box>

        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontWeight: mail.isRead ? Fonts.REGULAR : Fonts.MEDIUM,
            fontSize: 14,
            width: { sm: "120px" },
          }}
          className={clsx(!mail.isRead ? "fontBold" : "")}
        >
          {mail.isReplied
            ? `${getSenderName()}, me(${messages})`
            : getLastSenderName()}
        </Typography>
      </Box>

      <MailInfoWrapper>
        <Box
          className="mail-info-content"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "calc(100% - 120px)",
            transition: "all 0.4s ease",
          }}
        >
          <Box
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              mr: 3,
              mb: 0,
            }}
            component="p"
            className={clsx(!mail.isRead ? "fontBold" : "")}
          >
            {mail.subject}
          </Box>
          {mail?.hasAttachments ? (
            <Box
              component="p"
              sx={{
                color: "text.secondary",
                position: "relative",
                "& .MuiSvgIcon-root": {
                  fontSize: 16,
                  display: "block",
                },
              }}
            >
              <AttachFileIcon />
            </Box>
          ) : null}
          <Box
            component="p"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              color: "text.secondary",
            }}
          >
            {mail.detail}
          </Box>
        </Box>

        <Box
          className="mail-time"
          component="span"
          sx={{
            px: 2.5,
            minWidth: 110,
            marginLeft: "auto",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            transition: "all 0.4s ease",
          }}
        >
          <Box
            sx={{
              color: mail.label.color,
            }}
            component="span"
          >
            <LabelOutlinedIcon
              sx={{
                display: "block",
              }}
            />
          </Box>
          <Box
            component="span"
            sx={{
              whiteSpace: "pre",
              fontWeight: Fonts.MEDIUM,
              pl: 2,
            }}
          >
            {onGetMailDate(mail.sentOn!)}
          </Box>
        </Box>

        <MainActionWrapper className="main-action-wrapper">
          <IconButton
            sx={{
              color: (theme) => theme.palette.text.disabled,
            }}
            onClick={onArchive}
            size="large"
          >
            <ArchiveOutlinedIcon />
          </IconButton>
          <IconButton
            sx={{
              color: (theme) => theme.palette.text.disabled,
            }}
            onClick={onDelete}
            size="large"
          >
            <DeleteOutlinedIcon />
          </IconButton>
          <IconButton
            sx={{
              color: (theme) => theme.palette.text.disabled,
            }}
            onClick={onUpdateReadStatus}
            size="large"
          >
            {mail.isRead ? <MailOutlinedIcon /> : <DraftsOutlinedIcon />}
          </IconButton>
          <IconButton
            sx={{
              color: (theme) => theme.palette.text.disabled,
            }}
            onClick={onReportSpam}
            size="large"
          >
            <InfoOutlinedIcon />
          </IconButton>
        </MainActionWrapper>
      </MailInfoWrapper>
    </MailItemWrapper>
  );
};

export default MailListItem;

MailListItem.defaultProps = {
  labelList: [],
  checkedMails: [],
};
