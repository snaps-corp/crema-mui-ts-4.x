import { PaletteColorOptions } from '@mui/material';

export type DealsTableData = {
  id: number;
  name: string;
  progress: string;
  type: string;
  amount: string;
  created: string;
  logo: string;
};

export type EarningGraphData = {
  name: string;
  value: number;
  color: string;
  colorName: PaletteColorOptions;
};

export type ProgressGraphData = {
  name: string;
  actual: number;
  progress: number;
};

export type QuickStatsData = {
  clientsData: {
    count: string;
  };
  invoiceData: {
    count: string;
  };
  totalProjectsData: {
    count: string;
  };
  openProjectsData: {
    count: string;
  };
};

export type RevenueData = {
  ytdRevenue: string;
  clients: number;
  countries: string;
  revenueGraphData: ReviewGraphData[];
};

export type ReviewGraphData = {
  name: string;
  value: number;
};

export type SocialMediaData = {
  id: number;
  name: string;
  revenue: number;
  change: number;
  color: string;
};

export type StatisticData = {
  month: string;
  number: number;
};

export type StatisticsGraph = {
  projectData: StatisticData[];
  clientsData: StatisticData[];
  incomeData: StatisticData[];
};

export type TicketSupportDataProps = {
  id: number;
  name: string;
  ticketId: string;
  created: string;
  contact: string;
  image: string;
};

export type TodayTaskData = {
  id: number;
  task: string;
  date: string;
  isChecked: boolean;
};

export type WebsiteTrafficData = {
  month: number;
  users: number;
};

export type CRM = {
  dealsTableData: DealsTableData[];
  earningGraphData: EarningGraphData[];
  progressGraphData: ProgressGraphData[];
  quickStatsData: QuickStatsData;
  revenueData: RevenueData;
  reviewGraphData: ReviewGraphData[];
  socialMediaData: SocialMediaData[];
  statisticsGraph: StatisticsGraph;
  ticketSupportData: TicketSupportDataProps[];
  todayTaskData: TodayTaskData[];
  websiteTrafficData: WebsiteTrafficData[];
};
