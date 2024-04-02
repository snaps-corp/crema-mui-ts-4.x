import { PaletteColorOptions } from '@mui/material';

export type IncomeLastYearType = {
  value: string;
  graphData: { name: string; revenue: number }[];
};

export type WebsiteTrafficType = {
  value: string;
  graphData: { name: string; traffic: number }[];
};

export type RevenueGrowthType = {
  value: string;
  graphData: { name: string; growth: number }[];
};

export type IncrementActiveUsersType = {
  value: string;
  graphData: { name: string; activeUsers: number }[];
};

export type ExtraRevenueType = {
  value: string;
  graphData: { name: string; revenue: number }[];
};

export type TrafficRaiseType = {
  value: string;
  graphData: { name: string; traffic: number }[];
};

export type LessOrdersType = {
  value: string;
  graphData: { name: string; orders: number }[];
};

export type EarningInMonthType = {
  id: number;
  name: string;
  value: number;
  color: string;
  colorName: PaletteColorOptions | string;
};

export type SubscriptionType = {
  dataOne: { number: number; value: number }[];
  dataTwo: { number: number; value: number }[];
  dataThree: { number: number; value: number }[];
};

export type MetricsLineGraphType = {
  value: string;
  difference: string;
  differencePercent: string;
  graphData: { number: string; value: number }[];
};

export type SalesDataType = {
  salesToday: string;
  salesYesterday: string;
  salesGraphData: {
    day: number;
    number: number;
  }[];
};

export type MetricsFloatingChildType = {
  value: string;
  change: number;
  strokeColor: string;
  areaColor: string;
  graphData: {
    number: string;
    value: number;
  }[];
};

export type MetricsFloatingGraphType = {
  salesData: MetricsFloatingChildType;
  clientsData: MetricsFloatingChildType;
  revenueData: MetricsFloatingChildType;
  newUserData: MetricsFloatingChildType;
};

export type VisitsType = {
  new: number;
  returning: number;
  graphData: {
    dataOne: { number: string; value: number }[];
    dataTwo: { number: string; value: number }[];
    dataThree: { number: string; value: number }[];
  };
};

export type OrdersType = {
  revenue: number;
  orders: number;
  graphData: {
    dataOne: { number: string; value: number }[];
    dataTwo: { number: string; value: number }[];
    dataThree: { number: string; value: number }[];
  };
};

export type ProfileViewsType = {
  views: string;
  graphData: { day: number; number: number }[];
};

export type WorkViewsType = {
  views: string;
  graphData: { name: string; value: number }[];
};

export type SocialDataType = {
  likes: number;
  comments: number;
};

export type StateGraphType = {
  number: number;
  value: number;
};

export type StatsGraphType = {
  dataOne: {
    stats1: StateGraphType[];
    stats2: StateGraphType[];
  };
  dataTwo: {
    stats1: StateGraphType[];
    stats2: StateGraphType[];
  };
  dataThree: {
    stats1: StateGraphType[];
    stats2: StateGraphType[];
  };
};

export type SocialVisitorsType = {
  id: number;
  name: string;
  visitors: number;
  change: number;
  color: string;
};

export type AccountDataType = {
  name: string;
  complete: number;
  week: number;
};

export type ShareDataType = {
  icon: string;
  color: string;
  value: number;
};

export type MetricStatsType = {
  id: number;
  title: string;
  count: string;
  new: string;
  badgeColor: string;
  bgcolor: string;
  icon: string;
};

export type StateDataType = {
  id: number;
  name: string;
  duration: string;
  value: string;
  percentageChange: number;
  iconImg: string;
  color: string;
};

export type ReportDataType = {
  id: number;
  value: string;
  percentageChange: number;
  type: string;
  changes: string;
  icon: string;
  color: string;
  graphData: {
    number: number;
    month: string;
  }[];
};

export type VisitorsPageViewType = {
  name: string;
  Page: number;
  Visitor: number;
};

export type HeartCardType = {
  id: number;
  title: string;
  measurement: string;
  unit: string;
  color: string;
  graphData: {
    rate: number;
    name: string;
  }[];
};

export type YourActivityType = {
  day: string;
  Visits: number;
};

export type MetricsType = {
  ordersThisYear: string;
  queryIcon: string;
  revenueThisYear: string;
  visitsThisYear: string;
  queriesThisYear: string;
  websiteTraffic: string;
  incomeLastYear: IncomeLastYearType;
  websiteTrafficData: WebsiteTrafficType;
  revenueGrowthData: RevenueGrowthType;
  incrementActiveUsers: IncrementActiveUsersType;
  extraRevenue: ExtraRevenueType;
  trafficRaise: TrafficRaiseType;
  lessOrders: LessOrdersType;
  salesData: SalesDataType;
  earningInMonth: EarningInMonthType[];
  subscriptionData: SubscriptionType;
  metricsLineGraphData: MetricsLineGraphType;
  metricsFloatingGraphData: MetricsFloatingGraphType;
  visitsData: VisitsType;
  ordersData: OrdersType;
  profileViewsData: ProfileViewsType;
  workViewsData: WorkViewsType;
  socialData: SocialDataType;
  statsGraph: StatsGraphType;
  socialVisitorsData: SocialVisitorsType[];
  accountData: AccountDataType[];
  shareData: ShareDataType[];
  metricsStats: MetricStatsType[];
  stateData: StateDataType[];
  reportData: ReportDataType[];
  visitorsPageView: VisitorsPageViewType[];
  heartCard: HeartCardType;
  yourActivity: YourActivityType[];
};
