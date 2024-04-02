import AttachFileIcon from "@mui/icons-material/AttachFile";

import dayjs from "dayjs";
import clsx from "clsx";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppsStarredIcon from "@crema/components/AppsStarredIcon";
import Avatar from "@mui/material/Avatar";
import {
  AttachmentWrapper,
  AvatarWrapper,
  MailMobileItemWrapper,
} from "./index.styles";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { Fonts } from "@crema/constants/AppEnums";
import { getStringFromHtml } from "@crema/helpers/StringHelper";
import { MailType } from "@crema/types/models/apps/Mail";

type Props = {
  mail: MailType;
  checkedMails: number[];
  onChangeCheckedMails: (check: boolean, id: number) => void;
  onChangeStarred: (checked: boolean, mail: MailType) => void;
  onViewMailDetail: (mail: MailType) => void;
};
const MailListItemMobile = (props: Props) => {
  const {
    mail,
    checkedMails,
    onChangeCheckedMails,
    onChangeStarred,
    onViewMailDetail,
  } = props;

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
  const getLastMessage = () => {
    return getStringFromHtml(mail.messages![0].description);
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
    <MailMobileItemWrapper
      dense
      key={mail.id}
      className={clsx("item-hover", {
        active: checkedMails.includes(mail.id),
      })}
      onClick={() => onViewMailDetail(mail)}
    >
      <Box
        sx={{
          mr: 3.5,
          mt: 1,
        }}
      >
        <AvatarWrapper
          className={clsx({
            checked: checkedMails.includes(mail.id),
          })}
          onClick={(event) => {
            event.stopPropagation();
            onChangeCheckedMails(!checkedMails.includes(mail.id), mail.id);
          }}
        >
          {checkedMails.includes(mail.id) ? (
            <CheckOutlinedIcon />
          ) : (
            <Avatar
              className="avatar"
              alt={getSenderName()}
              src={getSenderImage()}
            />
          )}
        </AvatarWrapper>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: "calc(100% - 50px)",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "calc(100% - 60px)",
            pr: 2,
            transition: "all 0.4s ease",
          }}
        >
          <Typography
            sx={{
              fontWeight: Fonts.MEDIUM,
              fontSize: 14,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {mail.isReplied
              ? `${getSenderName()}, me(${messages})`
              : getLastSenderName()}
          </Typography>
          <Typography
            sx={{
              color: (theme) => theme.palette.text.secondary,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {mail.subject}
          </Typography>
          <Typography
            sx={{
              color: (theme) => theme.palette.text.secondary,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {getLastMessage()}
          </Typography>
          {mail.hasAttachments ? (
            <AttachmentWrapper>
              <AttachFileIcon />
            </AttachmentWrapper>
          ) : null}
        </Box>

        <Box
          sx={{
            minWidth: 60,
            pt: 0.75,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            transition: "all 0.4s ease",
          }}
        >
          <Box
            component="span"
            sx={{
              fontWeight: Fonts.MEDIUM,
              fontSize: 12,
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            {onGetMailDate(mail.sentOn!)}
          </Box>

          <Box
            component="span"
            sx={{
              mt: "auto",
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <AppsStarredIcon item={mail} onChange={onChangeStarred} />
          </Box>
        </Box>
      </Box>
    </MailMobileItemWrapper>
  );
};

export default MailListItemMobile;

MailListItemMobile.defaultProps = {
  labelList: [],
  checkedMails: [],
};
