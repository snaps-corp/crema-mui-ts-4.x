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
  label: string;
  value: string;
  color: string;
};

export type PriorityType = {
  id: number;
  name: string;
  type: number;
  color: string;
};

export type StaffType = {
  id: number;
  name: string;
  image: string;
};

export type StatusType = {
  id: number;
  name: string;
  type: number;
};

export type CommentType = {
  comment: string;
  name: string;
  image: string;
  date: string;
  time?: string;
};

export type TodoDataType = {
  data: TodoType[];
  count: number;
};
export type TodoType = {
  id: number;
  title: string;
  isStarred?: boolean;
  label: LabelType[];
  priority: PriorityType;
  isAttachment: boolean;
  sentAt: string;
  folderValue: number;
  scheduleMobile: string;
  image: string;
  assignedTo: StaffType;
  createdBy: {
    name: string;
    image?: string;
  };
  createdOn: string;
  startDate: string;
  endDate?: string;
  status: number;
  comments: CommentType[];
  content: string;
  isReplied?: boolean;
  isRead?: boolean;
  date?: string;
};
