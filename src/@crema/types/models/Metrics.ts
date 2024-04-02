import { PaletteColorOptions } from '@mui/material';

export type IncomeLastYear = {
  value: string;
  graphData: { name: ''; revenue: number }[];
};

export type WebsiteTrafficData = {
  value: string;
  graphData: { name: string; traffic: number }[];
};

export type RevenueGrowthData = {
  value: string;
  graphData: { name: string; growth: number }[];
};

export type IncrementActiveUsers = {
  value: string;
  graphData: { name: string; activeUsers: number }[];
};

export type ExtraRevenue = {
  value: string;
  graphData: { name: string; revenue: number }[];
};

export type TrafficRaise = {
  value: string;
  graphData: { name: string; traffic: number }[];
};

export type LessOrders = {
  value: string;
  graphData: { name: string; orders: number }[];
};
/*
export type SalesData={
  salesToday: string;
  salesYesterday: string;
  salesGraphData:{ day: number; number: number }[];
}*/

export type SalesData = {
  value: string;
  change: number;
  strokeColor: string;
  areaColor: string;
  graphData: { number: string; value: number }[];
};
export type EarningInMonthData = {
  id: number;
  name: string;
  value: number;
  color: string;
  colorName: PaletteColorOptions;
};

export type SubscriptionData = {
  dataOne: { number: number; value: number }[];
  dataTwo: { number: number; value: number }[];
  dataThree: { number: number; value: number }[];
};

export type MetricsLineGraphData = {
  value: string;
  difference: string;
  differencePercent: string;
  graphData: { number: string; value: number }[];
};

export type MetricsFloatingGraphData = {
  salesData: SalesData;
  clientsData: SalesData;
  revenueData: SalesData;
  newUserData: SalesData;
};

export type VisitsData = {
  new: number;
  returning: number;
  graphData: {
    dataOne: { number: string; value: number }[];
    dataTwo: { number: string; value: number }[];
    dataThree: { number: string; value: number }[];
  };
};

export type OrdersData = {
  revenue: number;
  orders: number;
  graphData: {
    dataOne: { number: number; value: number }[];
    dataTwo: { number: number; value: number }[];
    dataThree: { number: number; value: number }[];
  };
};

export type ProfileViewsData = {
  views: string;
  graphData: { day: number; number: number }[];
};

export type WorkViewsData = {
  views: string;
  graphData: { name: string; value: number }[];
};

export type SocialData = {
  likes: number;
  comments: number;
};

export type StateGraphData = {
  number: number;
  value: number;
};

export type StatsGraphData = {
  dataOne: {
    stats1: StateGraphData[];
    stats2: StateGraphData[];
  };
  dataTwo: {
    stats1: StateGraphData[];
    stats2: StateGraphData[];
  };
  dataThree: {
    stats1: StateGraphData[];
    stats2: StateGraphData[];
  };
};

export type SocialVisitorsData = {
  id: number;
  name: string;
  visitors: number;
  change: number;
  color: string;
};

export type AccountData = {
  name: string;
  complete: number;
  week: number;
};

export type ShareData = {
  facebook: number;
  twitter: number;
  youtube: number;
  google: number;
  linkedin: number;
  bitbucket: number;
};

export type Metrics = {
  ordersThisYear: string;
  queryIcon: string;
  revenueThisYear: string;
  visitsThisYear: string;
  queriesThisYear: string;
  websiteTraffic: string;
  incomeLastYear: IncomeLastYear;
  websiteTrafficData: WebsiteTrafficData;
  revenueGrowthData: RevenueGrowthData;
  incrementActiveUsers: IncrementActiveUsers;
  extraRevenue: ExtraRevenue;
  trafficRaise: TrafficRaise;
  lessOrders: LessOrders;
  salesData: SalesData;
  earningInMonth: EarningInMonthData[];
  subscriptionData: SubscriptionData;
  metricsLineGraphData: MetricsLineGraphData;
  metricsFloatingGraphData: MetricsFloatingGraphData;
  visitsData: VisitsData;
  ordersData: OrdersData;
  profileViewsData: ProfileViewsData;
  workViewsData: WorkViewsData;
  socialData: SocialData;
  statsGraph: StatsGraphData;
  socialVisitorsData: SocialVisitorsData[];
  accountData: AccountData[];
  shareData: ShareData;
};
