import Box from "@mui/material/Box";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import AppTooltip from "@crema/components/AppTooltip";
import { putDataApi } from "@crema/hooks/APIHooks";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import { MailType, MessageType } from "@crema/types/models/apps/Mail";
import MessageItem from "./MessageItem";

type Props = {
  selectedMail: MailType;
  onUpdateSelectedMail: (data: MailType) => void;
};

function addObjectInMiddle(
  array: MessageType[],
  index: number,
  object: MessageType,
) {
  const newArray = new Array(array.length);
  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i];
  }
  newArray[index] = object;
  return newArray;
}

const MailDetailBody = (props: Props) => {
  const infoViewActionsContext = useInfoViewActionsContext();
  const { selectedMail, onUpdateSelectedMail } = props;

  const onSubmitMail = (message: MessageType, index: number) => {
    const messages = selectedMail.messages;
    if (messages)
      selectedMail.messages = addObjectInMiddle(messages, index + 1, message);
    putDataApi<MailType>("/api/mailApp/mail/", infoViewActionsContext, {
      mail: selectedMail,
    })
      .then((data) => {
        onUpdateSelectedMail(data);
        infoViewActionsContext.showMessage("Mail Sent Successfully");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onChangeStarred = (message: MessageType, isStarred: boolean) => {
    message.isStarred = isStarred;
    selectedMail.messages = selectedMail.messages!.map((data) =>
      data.messageId === message.messageId ? message : data,
    );
    putDataApi<MailType>("/api/mailApp/mail/", infoViewActionsContext, {
      mail: selectedMail,
    })
      .then((data) => {
        onUpdateSelectedMail(data);
        infoViewActionsContext.showMessage("Mail Updated Successfully");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };
  return (
    <Box sx={{ px: 5, py: 1 }}>
      {selectedMail ? (
        <>
          <Box
            sx={{
              pt: 1,
              pb: 3,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              component="span"
              sx={{
                fontSize: { xs: 16, sm: 18 },
                marginRight: 3,
                paddingLeft: { xs: 0, sm: 12.5 },
              }}
            >
              {selectedMail.subject}
            </Box>
            <AppTooltip title={selectedMail?.label?.name}>
              <span
                style={{
                  color: selectedMail?.label?.color,
                  height: 22,
                  cursor: "pointer",
                }}
              >
                <LabelOutlinedIcon />
              </span>
            </AppTooltip>
          </Box>
          {selectedMail.messages?.map((message, index) => (
            <MessageItem
              key={index}
              index={index}
              mailLength={selectedMail.messages!.length}
              message={message}
              onSubmitMail={onSubmitMail}
              onChangeStarred={onChangeStarred}
            />
          ))}
        </>
      ) : null}
    </Box>
  );
};

export default MailDetailBody;
