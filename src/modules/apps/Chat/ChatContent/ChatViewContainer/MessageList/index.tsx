import Box from "@mui/material/Box";
import SenderMessageItem from "./SenderMessageItem";
import ReceiverMessageItem from "./ReceiverMessageItem";
import AppList from "@crema/components/AppList";
import {
  ConnectionType,
  MessageDataType,
  MessageObjType,
} from "@crema/types/models/apps/Chat";
import { AuthUserType } from "@crema/types/models/AuthUser";

type MessagesListProps = {
  userMessages: MessageObjType;
  authUser: AuthUserType;
  selectedUser: ConnectionType;
  onClickEditMessage: (data: MessageDataType) => void;
  deleteMessage: (id: number) => void;
};
const MessageList = ({
  userMessages,
  authUser,
  selectedUser,
  onClickEditMessage,
  deleteMessage,
}: MessagesListProps) => {
  return (
    <Box
      sx={{
        px: 5,
        py: 6,
      }}
    >
      <AppList
        animation="transition.slideUpIn"
        data={userMessages.messageData}
        renderRow={(item, index) => {
          if (item.sender === authUser.id) {
            return (
              <SenderMessageItem
                authUser={authUser}
                item={item}
                key={item.id}
                onClickEditMessage={onClickEditMessage}
                deleteMessage={deleteMessage}
                isPreviousSender={
                  index > 0 &&
                  item.sender === userMessages.messageData[index - 1].sender
                }
                isLast={
                  (index + 1 < userMessages.messageData.length &&
                    item.sender !==
                      userMessages.messageData[index + 1].sender) ||
                  index + 1 === userMessages.messageData.length
                }
              />
            );
          } else {
            return (
              <ReceiverMessageItem
                selectedUser={selectedUser}
                item={item}
                key={item.id}
                isPreviousSender={
                  index > 0 &&
                  item.sender === userMessages.messageData[index - 1].sender
                }
                isLast={
                  (index + 1 < userMessages.messageData.length &&
                    item.sender !==
                      userMessages.messageData[index + 1].sender) ||
                  index + 1 === userMessages.messageData.length
                }
              />
            );
          }
        }}
      />
    </Box>
  );
};

export default MessageList;
