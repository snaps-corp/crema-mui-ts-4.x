import { MessageType } from './Chat';

export type FriendRequestType = {
  id: number;
  profilePic: string;
  name: string;
  date: any;
};

export type ImageType = {
  id: number;
  thumb: string;
};

export type RecentNewsType = {
  id: number;
  user: {
    name: string;
    profilePic: string;
  };
  title: string;
  desc: string;
};

export type WhoToFollowType = {
  id: number;
  title: string;
  subTitle: string;
  profilePic: string;
};

export type SuggestionType = {
  id: number;
  name: string;
  desc: string;
  thumb: string;
};

export type MediaType = {
  id: number | string;
  url: string;
  mime_type: string;
};

export type AttachmentType = {
  id: number;
  path: string;
  preview: string;
  metaData: {
    type: string;
    size: number;
  };
};

export type CommentType = {
  id?: number;
  author: {
    name: string;
    profilePic: string;
    id: number;
  };
  liked?: boolean;
  comment?: string;
  message_type: MessageType;
  date?: any;
  media?: MediaType;
};

export type AbutDataType = {
  id: number;
  icon: string;
  text: string;
  linkType: string;
};

export type SuggestTeamType = {
  icon: string;
  title: string;
  subTitle: string;
  mediaImg: string;
};

export type StoriesDataType = {
  id: number;
  avatar: string;
  title: string;
  imgSrc: string;
};

export type WhatsHappenDataType = {
  id: number;
  imgSrc: string;
  title: string;
  subTitle: string;
  tag: TagType[];
};

export type TagType = {
  id: number;
  name?: string;
};

export type WallDataType = {
  id: number;
  name: string;
  profilePic: string;
  videoCall: {
    users: {
      id: number;
      name: string;
      profilePic: string;
    }[];
    title: string;
  };
  whatsHappen: WhatsHappenDataType[];
  suggestTeam: SuggestTeamType;
  stories: StoriesDataType[];
  about: AbutDataType[];
  friendRequests: FriendRequestType[];
  photos: ImageType[];
  recentNews: RecentNewsType[];
  whoToFollow: WhoToFollowType[];
  suggestions: SuggestionType[];
};

export type UserObjType = {
  name: string;
  profilePic: string;
  id: number;
};

export type PostObjType = {
  id: number;
  owner: UserObjType;
  date: any;
  attachments: AttachmentType[];
  message?: string;
  liked: boolean;
  likes: number;
  shares: number;
  views: number;
  comments: CommentType[];
  content?: string;
};
