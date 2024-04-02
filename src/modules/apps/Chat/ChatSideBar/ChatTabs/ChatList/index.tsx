import React from "react";
import ChatItem from "./ChatItem";
import AppList from "@crema/components/AppList";
import ListEmptyResult from "@crema/components/AppList/ListEmptyResult";
import { useIntl } from "react-intl";
import ChatListSkeleton from "@crema/components/AppSkeleton/ChatListSkeleton";
import { ConnectionType } from "@crema/types/models/apps/Chat";

type ChatListProps = {
  chatListData: ConnectionType[];
  loading: boolean;
  selectedUser: ConnectionType;
  setSelectedUser: (user: ConnectionType) => void;
};

const ChatList: React.FC<ChatListProps> = ({
  chatListData,
  loading,
  setSelectedUser,
  selectedUser,
}) => {
  const { messages } = useIntl();
  return (
    <AppList
      containerStyle={{
        display: "flex",
        flexDirection: "column",
      }}
      data={chatListData}
      ListEmptyComponent={
        <ListEmptyResult
          content={messages["chatApp.noUserFound"] as string}
          loading={loading}
          placeholder={<ChatListSkeleton />}
        />
      }
      renderRow={(item) => (
        <ChatItem
          key={"chat-item-" + item.id}
          item={item}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      )}
    />
  );
};

export default ChatList;
