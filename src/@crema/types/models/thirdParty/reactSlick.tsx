export type ProfileSlideType = {
  id: number;
  srcImg: string;
  name: string;
  designation: string;
  years: number;
  blood: string;
  height: number;
  weight: number;
};

export type SlideBasicType = {
  id: number;
  srcImg: string;
  title: string;
  description?: string;
};

export type SlideBasicFiveType = {
  id: number;
  srcImg: string;
  srcThumb: string;
  title: string;
  description: string;
};

export type SlideBasicFourType = {
  id: number;
  srcImg: string;
  title: string;
  avatar: string;
  avatarName: string;
  data: string;
  description: string;
};
export type ReactSlickDataType = {
  profileSlide: ProfileSlideType[];
  slideBasic: SlideBasicType[];
  slideBasicArrow: SlideBasicType[];
  slideBasicTwo: SlideBasicType[];
  slideBasicThree: SlideBasicType[];
  slideBasicFour: SlideBasicFourType[];
  slideBasicFive: SlideBasicFiveType[];
};
