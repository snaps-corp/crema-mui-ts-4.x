export type WelcomeCardType = {
  id: number;
  type: string;
  counts: number;
};

export type RevenueCardsType = {
  id: number;
  type: string;
  value: string;
  growth: number;
  icon: string;
  strokeColor: string;
  graphData: { month: string; number: number }[];
};

export type SalesStateType = {
  id: number;
  amount: string;
  type: string;
  icon: string;
};

export type ChartDataType = {
  title: string;
  value: number;
  color: string;
};

export type ActiveVisitorsType = {
  growth: number;
  value: number;
  slug: string;
  graphData: { time: string; value: number }[];
};

export type TopSellingProductType = {
  id: number;
  icon: string;
  name: string;
  description: string;
  price: number;
  rate: number;
  color: string;
};

export type EarningDataType = {
  id: number;
  color: string;
  amount: number;
  country: string;
};

export type TicketsType = {
  id: number;
  name: string;
  opened: number;
  overAllPercentage: {
    open: number;
    close: number;
    hold: number;
  };
};

export type PageVisitType = {
  id: number;
  page: string;
  pageView: number;
  visitors: number;
};

export type TransactionType = {
  id: string;
  customer: string;
  date: string;
  paymentType: string;
  status: string;
};

export type InfoWidgetsType = {
  id: number;
  icon: string;
  count: number;
  details: string;
  bgColor: string;
};

export type TrafficDataType = {
  id: number;
  title: string;
  value: number;
  session: number;
};

export type Analytics = {
  welcomeCard: WelcomeCardType[];
  revenueCards: RevenueCardsType[];
  salesState: SalesStateType[];
  salesChartData: ChartDataType[];
  visitorsPageView: ChartDataType[];
  activeVisitors: ActiveVisitorsType;
  topSellingProduct: TopSellingProductType[];
  earningData: EarningDataType[];
  tickets: TicketsType[];
  pageVisits: PageVisitType[];
  transactionData: TransactionType[];
  infoWidgets: InfoWidgetsType[];
  trafficData: TrafficDataType[];
};
