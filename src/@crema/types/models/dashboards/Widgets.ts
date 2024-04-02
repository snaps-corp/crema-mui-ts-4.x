import { PaletteColorOptions } from '@mui/material';

export type RecentActivityType = {
  id: number;
  image: string;
  name: string;
  message: string;
};

export type CategoriesType = {
  id: number;
  name: string;
  isChecked: boolean;
};

export type ProfileType = {
  id: number;
  name: string;
  image: string;
  photos: number;
  followers: number;
  following: number;
};

export type MessagesType = {
  id: number;
  image: string;
  message: string;
  name: string;
};

export type TaskListType = {
  id: number;
  title: string;
  desc: string;
};

export type ColorsListType = {
  id: number;
  name: string;
  color: PaletteColorOptions | string;
  isChecked: boolean;
};

export type TagsListType = {
  id: number;
  label: string;
  color: string;
};

export type ReviewsListType = {
  id: number;
  rating: number;
  by: string;
  content: string;
  time: string;
};

export type SocialInfoType = {
  image: string;
  name: string;
  id: string;
  desc: string;
};

export type MateInfoType = {
  facebookInfo: SocialInfoType;
  twitterInfo: SocialInfoType;
};

export type FormatListType = {
  id: number;
  name: string;
};

export type TemperaturesType = {
  id: number;
  day: string;
  image: string;
};

export type CityDataType = {
  id: number;
  name: string;
  desc: string;
  image: string;
};

export type WidgetsType = {
  recentActivity: RecentActivityType[];
  categories: CategoriesType[];
  profile: ProfileType;
  messages: MessagesType[];
  taskList: TaskListType[];
  colorsList: ColorsListType[];
  tagsList: TagsListType[];
  reviewsList: ReviewsListType[];
  mateInfo: MateInfoType;
  formatList: FormatListType[];
  temperatures: TemperaturesType[];
  cityData: CityDataType[];
};
