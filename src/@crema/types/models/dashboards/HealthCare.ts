export type DrStateType = {
  id: number;
  category: string;
  name: string;
  bgColor?: string;
  time: string;
  icon: string;
};

export type HeathStaticsType = {
  dataOne: {
    month: string;
    number: number;
  }[];
  dataTwo: {
    month: string;
    number: number;
  }[];
  dataThree: {
    month: string;
    number: number;
  }[];
};

export type NewpatientsType = {
  month: string;
  number: number;
};

export type CancelVisitType = {
  month: string;
  number: number;
};

export type TopDoctorType = {
  id: number;
  name: string;
  speciality: string;
  profile_pic: string;
  rating: string;
  scheduled: boolean;
};

export type UpcomingAppointmentType = {
  id: number;
  name: string;
  speciality: string;
  profile_pic: string;
  appointmentTime: string;
  appointmentDate: string;
};

export type NotificationType = {
  id: number;
  title: string;
  time: string;
  color: string;
};

export type RecentPatientType = {
  id: string;
  name: string;
  profile_pic: string;
  gender: string;
  weight: string;
  assignedDr: string;
  date: string;
  status: string;
  color: string;
};

export type HospitalActivityType = {
  name: string;
  Consultations: number;
  Patients: number;
};

export type BloodCardType = {
  id: number;
  name: string;
  icon: string;
  measurement: string;
  color: string;
};

export type AppointmentCardsType = {
  id: number;
  name: string;
  value: string;
  icon: string;
  chartValue: string;
  chartTime: string;
  chartData: {
    month: string;
    users: number;
  }[];
  color: string;
};

export type HeartCardType = {
  id: number;
  title: string;
  measurement: string;
  unit: string;
  graphData: {
    name: string;
    rate: number;
  }[];
  color: string;
};

export type DosesType = {
  id: number;
  value: string;
  name: string;
  icon: string;
  bgColor?: string;
};

export type YourActivityType = {
  day: string;
  Visits: number;
};

export type ActivityType = {
  id: number;
  srcImg: string;
  name: string;
  value: any;
};

export type HealthCareType = {
  salesState: DrStateType[];
  heathStatics: HeathStaticsType;
  newPatients: NewpatientsType[];
  cancelVisits: CancelVisitType[];
  topDoctors: TopDoctorType[];
  upcomingAppointment: UpcomingAppointmentType[];
  notifications: NotificationType[];
  hospitalStatics: DosesType[];
  recentPatients: RecentPatientType[];
  hospitalActivity: HospitalActivityType[];
  bloodCard: BloodCardType[];
  appointmentCards: AppointmentCardsType[];
  heartCard: HeartCardType;
  temperatureCard: HeartCardType;
  doses: DosesType[];
  yourActivity: YourActivityType[];
  activities: ActivityType[];
};
