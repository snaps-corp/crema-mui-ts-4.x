import { Dayjs } from 'dayjs';

export type ContactType = { data: ContactObjType[]; count: number };

export type ContactObjType = {
  id: number;
  name: string;
  email: string;
  contact: string;
  company: string;
  isStarred: boolean;
  isFrequent: boolean;
  label: number;
  image: string;
  address?: string;
  facebookId?: string;
  twitterId?: string;
  notes?: string;
  website?: string;
  birthday?: string | Dayjs;
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
};
