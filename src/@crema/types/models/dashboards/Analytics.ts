export type AnalyticsType = {
  welcomeCard: WelcomeCardType[];
  revenueCards: RevenueCardType[];
  salesState: SalesStateType[];
  salesChartData: SalesChartDaumType[];
  visitorsPageView: VisitorsPageViewType[];
  activeVisitors: ActiveVisitorsType;
  topSellingProduct: TopSellingProductType[];
  earningData: EarningDaumType[];
  tickets: TicketType[];
  pageVisits: PageVisitType[];
  transactionData: TransactionDaumType[];
  infoWidgets: InfoWidgetType[];
  trafficData: TrafficDaumType[];
};

export type WelcomeCardType = {
  id: number;
  type: string;
  counts: number;
  icon: string;
};

export type RevenueCardType = {
  id: number;
  type: string;
  value: string;
  growth: number;
  icon: string;
  strokeColor: string;
  graphData: GraphDaumType[];
};

export type GraphDaumType = {
  month: string;
  number: number;
};

export type SalesStateType = {
  id: number;
  amount: string;
  type: string;
  icon: string;
};

export type SalesChartDaumType = {
  name: string;
  AS: number;
  Rev: number;
  amt: number;
};

export type VisitorsPageViewType = {
  name: string;
  Page: number;
  Visitor: number;
};

export type ActiveVisitorsType = {
  growth: number;
  value: number;
  slug: string;
  graphData: GraphDaum2Type[];
};

export type GraphDaum2Type = {
  time: string;
  value: number;
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

export type EarningDaumType = {
  id: number;
  color: string;
  amount: number;
  country: string;
};

export type TicketType = {
  id: number;
  name: string;
  opened: number;
  overAllPercentage: OverAllPercentageType;
};

export type OverAllPercentageType = {
  open: number;
  close: number;
  hold: number;
};

export type PageVisitType = {
  id: number;
  page: string;
  pageView: number;
  visitors: number;
};

export type TransactionDaumType = {
  id: string;
  customer: string;
  date: string;
  paymentType: string;
  status: string;
};

export type InfoWidgetType = {
  id: number;
  icon: string;
  count: string;
  details: string;
  bgColor?: string;
};

export type TrafficDaumType = {
  id: number;
  title: string;
  value: number;
  session: number;
};
