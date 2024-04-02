export enum MessageType {
  MEDIA = 1,
  TEXT = 2,
}

export type MemberType = {
  id: number;
  name: string;
  image: string;
  status: string;
  username?: string;
};

export type ConnectionType = {
  id: number;
  channelId: number;
  name: string;
  displayName?: string;
  photoURL?: string;
  image: string;
  status: string;
  username: string;
  isGroup?: boolean;
  members?: MemberType[];
  lastMessage?: {
    id: number;
    message: string;
    type: string;
    time: string;
  };
};

export type MediaType = {
  id: string | number;
  url: string;
  mime_type: string;
  file_name: string;
  file_size?: number;
};

export type MessageDataType = {
  id?: number;
  sender: number | string;
  message?: string;
  message_type: MessageType;
  time: string;
  edited?: boolean;
  media?: MediaType[];
};

export type MessageObjType = {
  channelId: number;
  messageData: MessageDataType[];
};
