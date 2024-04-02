import { PaletteColorOptions } from '@mui/material';

export type RecentActivityData = {
  id: number;
  image: string;
  name: string;
  message: string;
};

export type CategoriesData = {
  id: number;
  name: string;
  isChecked: boolean;
};

export type ProfileData = {
  id: number;
  name: string;
  image: string;
  photos: number;
  followers: number;
  following: number;
};

export type MessagesData = {
  id: number;
  image: string;
  message: string;
  name: string;
};

export type TaskListData = {
  id: number;
  title: string;
  desc: string;
};

export type ColorsList = {
  id: number;
  name: string;
  color: PaletteColorOptions;
  isChecked: boolean;
};

export type TagsList = {
  id: number;
  label: string;
  color: string;
};

export type ReviewsList = {
  id: number;
  rating: number;
  by: string;
  content: string;
  time: string;
};

export type SocialInfo = {
  image: string;
  name: string;
  id: string;
  desc: string;
};

export type MateInfo = {
  facebookInfo: SocialInfo;
  twitterInfo: SocialInfo;
};

export type FormatList = {
  id: number;
  name: string;
};

export type Temperatures = {
  id: number;
  day: string;
  image: string;
};

export type CityData = {
  id: number;
  name: string;
  desc: string;
  image: string;
};

export type Widgets = {
  recentActivity: RecentActivityData[];
  categories: CategoriesData[];
  profile: ProfileData;
  messages: MessagesData[];
  taskList: TaskListData[];
  colorsList: ColorsList[];
  tagsList: TagsList[];
  reviewsList: ReviewsList[];
  mateInfo: MateInfo;
  formatList: FormatList[];
  temperatures: Temperatures[];
  cityData: CityData[];
};
