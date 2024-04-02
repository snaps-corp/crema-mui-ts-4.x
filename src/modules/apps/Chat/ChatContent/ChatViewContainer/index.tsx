import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import dayjs from "dayjs";
import IntlMessages from "@crema/helpers/IntlMessages";
import AppsHeader from "@crema/components/AppsContainer/AppsHeader";
import AppsFooter from "@crema/components/AppsContainer/AppsFooter";
import { useAuthUser } from "@crema/hooks/AuthHooks";
import SimpleBarReact from "simplebar-react";

import { styled } from "@mui/material/styles";
import { postDataApi, putDataApi, useGetDataApi } from "@crema/hooks/APIHooks";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import SendMessage from "./SendMessage";
import MessagesList from "./MessageList";
import Header from "./Header";

import {
  ConnectionType,
  MessageDataType,
  MessageObjType,
  MessageType,
} from "@crema/types/models/apps/Chat";
import { useChatActionsContext } from "../../../context/ChatContextProvider";

const ScrollbarWrapper = styled(SimpleBarReact)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    height: `calc(100% - 132px)`,
  };
});
const ScrollChatNoMainWrapper = styled("div")(() => {
  return {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  };
});

type Props = {
  selectedUser: ConnectionType;
  setSelectedUser: (member: ConnectionType) => void;
};
const ChatViewContainer = ({ selectedUser, setSelectedUser }: Props) => {
  const [message, setMessage] = useState<string | undefined>("");
  const { setConnectionData } = useChatActionsContext();
  const [isEdit, setIsEdit] = useState(false);
  const infoViewActionsContext = useInfoViewActionsContext();
  const [selectedMessage, setSelectedMessage] =
    useState<MessageDataType | null>(null);
  const { user } = useAuthUser();

  const _scrollBarRef = useRef<any>(null);
  const [{ apiData: userMessages }, { setQueryParams, setData }] =
    useGetDataApi<MessageObjType>("/api/chatApp/connection/messages");

  useEffect(() => {
    setQueryParams({ id: selectedUser?.channelId });
  }, [selectedUser?.channelId]);

  useEffect(() => {
    if (
      userMessages &&
      userMessages.messageData &&
      userMessages.messageData.length > 0
    ) {
      if (_scrollBarRef?.current) {
        const scrollEl = _scrollBarRef.current!.getScrollElement();
        scrollEl.scrollTop = scrollEl.scrollHeight;
      }
    }
  }, [userMessages, _scrollBarRef]);

  type Props = {
    userMessages: MessageObjType;
    connectionData: ConnectionType[];
  };
  const sendFileMessage = (fileMessage: MessageDataType) => {
    const data = {
      ...fileMessage,
      sender: user.id,
      time: dayjs().format("llll"),
    };
    postDataApi<Props>("/api/chatApp/message", infoViewActionsContext, {
      channelId: selectedUser?.channelId,
      message: data,
    })
      .then((data) => {
        setData(data?.userMessages);
        setConnectionData(data?.connectionData);
        infoViewActionsContext.showMessage("Message Added Successfully!");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onSend = (message: string) => {
    const data = {
      ...selectedMessage,
      message,
      message_type: MessageType.TEXT,
      sender: user.id,
      time: dayjs().format("llll"),
    };

    if (isEdit) {
      data.edited = true;
      putDataApi<Props>("/api/chatApp/message", infoViewActionsContext, {
        channelId: selectedUser?.channelId,
        message: data,
      })
        .then((data) => {
          setData(data?.userMessages);
          setConnectionData(data?.connectionData);
          infoViewActionsContext.showMessage("Message Edited Successfully!");
          setMessage("");
          setIsEdit(false);
          setSelectedMessage(null);
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });
    } else {
      postDataApi<Props>("/api/chatApp/message", infoViewActionsContext, {
        channelId: selectedUser?.channelId,
        message: data,
      })
        .then((data) => {
          setMessage("");
          setData(data?.userMessages);
          setConnectionData(data?.connectionData);
          infoViewActionsContext.showMessage("Message Added Successfully!");
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });
    }
  };

  const onClickEditMessage = (data: MessageDataType) => {
    if (data.message_type === MessageType.TEXT) {
      setIsEdit(true);
      setMessage(data.message);
      setSelectedMessage(data);
    }
  };

  const deleteMessage = (messageId: number) => {
    postDataApi<Props>("/api/chatApp/delete/message", infoViewActionsContext, {
      channelId: selectedUser?.channelId,
      messageId,
    })
      .then((data) => {
        setData(data?.userMessages);
        setConnectionData(data?.connectionData);
        infoViewActionsContext.showMessage("Message Deleted Successfully!");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const deleteConversation = () => {
    postDataApi<ConnectionType[]>(
      "/api/chatApp/delete/user/messages",
      infoViewActionsContext,
      {
        channelId: selectedUser?.channelId,
      },
    )
      .then((data) => {
        setSelectedUser(undefined as any);
        setConnectionData(data);
        infoViewActionsContext.showMessage("Chat Deleted Successfully!");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  return (
    <Box
      sx={{
        height: 1,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        "& .apps-header": {
          minHeight: 72,
        },
      }}
    >
      <AppsHeader>
        <Header
          selectedUser={selectedUser}
          deleteConversation={deleteConversation}
        />
      </AppsHeader>

      {userMessages && user ? (
        <ScrollbarWrapper ref={_scrollBarRef}>
          <MessagesList
            userMessages={userMessages}
            authUser={user}
            selectedUser={selectedUser}
            onClickEditMessage={onClickEditMessage}
            deleteMessage={deleteMessage}
          />
        </ScrollbarWrapper>
      ) : (
        <ScrollChatNoMainWrapper>
          <Box
            component="span"
            sx={{
              fontSize: 18,
              color: "grey.700",
            }}
          >
            <IntlMessages id="chatApp.sayHi" /> {selectedUser.name}
          </Box>
        </ScrollChatNoMainWrapper>
      )}

      <AppsFooter>
        <SendMessage
          currentMessage={message}
          sendFileMessage={sendFileMessage}
          onSendMessage={onSend}
        />
      </AppsFooter>
    </Box>
  );
};

export default ChatViewContainer;
