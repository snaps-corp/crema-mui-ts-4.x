export type MemberType = {
  id: number;
  title: string;
  image: string;
  name: string;
  email: string;
};

export type ActivityType = {
  id: number;
  title: string;
  defaultChecked: boolean;
};
export type ApplicationType = {
  id: number;
  title: string;
  defaultChecked: boolean;
};

export type CountryDataType = {
  member: MemberType[];
  notification: {
    activity: ActivityType[];
    application: ApplicationType[];
  };
};
export type AccountDataType = {
  member: MemberDataType[];
  notification: NotificationType;
};

export type MemberDataType = {
  id: number;
  title: string;
  image: string;
  name: string;
  email: string;
};

export type NotificationType = {
  activity: ActivityType[];
  application: ActivityType[];
};
