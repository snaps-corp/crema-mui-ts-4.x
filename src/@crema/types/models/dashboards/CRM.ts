export type CRMType = {
  progressGraphData: ProgressGraphDaumType[];
  quickStatsData: QuickStatsDataType;
  revenueData: RevenueDataType;
  stateData: StateDaumType[];
  visitorPageView: VisitorPageViewType[];
  opportunitiesWonGraphData: OpportunitiesWonGraphDaumType[];
  teamStateData: TeamStateDaumType[];
  topLeaders: TopLeaderType[];
  timesheet: TimesheetType[];
  recentActivities: RecentActivityType[];
  todoLists: TodoListType[];
  screenshots: ScreenshotType[];
  dealsTableData: DealsTableDaumType[];
  totalVisitors: TotalVisitorType[];
  emailMarketing: EmailMarketingType[];
  socialMediaData: SocialMediaDaumType[];
  ticketSupportData: TicketSupportDaumType[];
};

export type ProgressGraphDaumType = {
  name: string;
  actual: number;
  progress: number;
};

export type QuickStatsDataType = {
  clientsData: ClientsDataType;
  invoiceData: InvoiceDataType;
  totalProjectsData: TotalProjectsDataType;
  openProjectsData: OpenProjectsDataType;
};

export type ClientsDataType = {
  count: string;
};

export type InvoiceDataType = {
  count: string;
};

export type TotalProjectsDataType = {
  count: string;
};

export type OpenProjectsDataType = {
  count: string;
};

export type RevenueDataType = {
  ytdRevenue: string;
  clients: number;
  countries: string;
  clientsColor: string;
  countriesColor: string;
  revenueGraphData: RevenueGraphDaumType[];
};

export type RevenueGraphDaumType = {
  name: string;
  revenue: number;
  revenue1: number;
};

export type StateDaumType = {
  id: number;
  name: string;
  duration: string;
  value: string;
  percentageChange: number;
  iconImg: string;
  color: string;
  hidePercent?: boolean;
  icon?: any;
};

export type VisitorPageViewType = {
  name: string;
  Visitor: number;
  PageView: number;
};

export type OpportunitiesWonGraphDaumType = {
  name: string;
  actual: number;
  progress: number;
};

export type TeamStateDaumType = {
  id: number;
  name: string;
  duration: string;
  tags: TagType[];
  status: boolean;
  members: MemberType[];
};

export type TagType = {
  id: number;
  color: string;
  title: string;
};

export type MemberType = {
  id: number;
  name: string;
  image: string;
};

export type TopLeaderType = {
  id: string;
  teamLead: TeamLeadType;
  project: string;
  team: TeamType[];
  status: string;
  color: string;
  weeks: string;
  budgets: string;
};

export type TeamLeadType = {
  name: string;
  email: string;
  image: string;
};

export type TeamType = {
  id: number;
  name: string;
  image: string;
};

export type TimesheetType = {
  id: number;
  name: string;
  date: string;
  start_time: string;
  end_time: string;
  duration: string;
};

export type RecentActivityType = {
  id: number;
  name: string;
  position: string;
  message: string;
  profile_pic: string;
  created_at: string;
};

export type TodoListType = {
  id: number;
  title: string;
  date: string;
  time_from: string;
  completed: boolean;
};

export type ScreenshotType = {
  id: number;
  title: string;
  type: string;
};

export type DealsTableDaumType = {
  id: number;
  name: string;
  progress: string;
  type: string;
  amount: string;
  created: string;
  logo: string;
};

export type TotalVisitorType = {
  name: string;
  value: number;
  color: string;
};

export type EmailMarketingType = {
  id: number;
  value: number;
  name: string;
  fill: string;
};

export type SocialMediaDaumType = {
  id: number;
  name: string;
  revenue: number;
  change: any;
  color: string;
  changeColor: string;
};

export type TicketSupportDaumType = {
  id: number;
  name: string;
  ticketId: string;
  created: string;
  contact: string;
  image: string;
};
