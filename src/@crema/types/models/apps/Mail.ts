export type ConnectionType = {
  id: number;
  name: string;
  status: string;
  image: string;
  email: string;
  address: string;
  designation: string;
};

export type FolderType = {
  id: number;
  name: string;
  alias: string;
  icon?: string;
};

export type LabelType = {
  id: number;
  name: string;
  alias: string;
  color: string;
  icon?: any;
};

export type SenderType = {
  id: number | string;
  name: string;
  email: string;
  profilePic?: string;
};

export type MessageType = {
  messageId: number;
  description: string;
  sender: SenderType;
  to: SenderType[];
  cc: any[];
  bcc: any[];
  isStarred: boolean;
  sentOn: string;
};

export type MailType = {
  id: number;
  isChecked?: boolean;
  isStarred?: boolean;
  isReplied?: boolean;
  label: LabelType;
  sentBy?: string;
  detail?: string;
  subject: string;
  hasAttachments: boolean;
  sentAt?: string;
  sentOn?: string;
  messages?: MessageType[];
  isRead?: boolean;
  folderValue: number;
};
