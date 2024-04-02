export type LabelType = {
  id: number;
  name: string;
  type: number;
  color: string;
};

export type MemberType = {
  id: number;
  name: string;
  image: string;
};

export type CheckedListType = {
  id: number;
  title: string;
};

export type AttachmentType = {
  id: number;
  file: {
    path: string;
    name: string;
    lastModified: number;
    lastModifiedDate: string;
  };
  preview: string;
};

export type CardType = {
  id: number;
  title: string;
  attachments: AttachmentType[];
  label: LabelType[];
  date: any;
  comments: any[];
  desc: string;
  members: MemberType[];
  checkedList: CheckedListType[];
};

export type CardListType = {
  id: number;
  name: string;
  cards: CardType[];
};

export type BoardType = {
  id: number;
  name: string;
  list: CardListType[];
};
