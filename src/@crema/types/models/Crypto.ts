import { PaletteColorOptions } from '@mui/material';

export type CoinGraphData = {
  bitcoin: {
    yearlyData: { month: string; amount: number }[];
    monthlyData: { date: string; amount: number }[];
    weeklyData: { day: string; amount: number }[];
    dailyData: { time: string; amount: number }[];
  };
  litecoin: {
    yearlyData: { month: string; amount: number }[];
    monthlyData: { date: string; amount: number }[];
    weeklyData: { day: string; amount: number }[];
    dailyData: { time: string; amount: number }[];
  };
  ripple: {
    yearlyData: { month: string; amount: number }[];
    monthlyData: { date: string; amount: number }[];
    weeklyData: { day: string; amount: number }[];
    dailyData: { time: string; amount: number }[];
  };
};

export type BuySellDataProps = {
  value: string;
  price: string;
  amount: string;
};

export type BuySellProps = {
  buyData: BuySellDataProps;
  sellData: BuySellDataProps;
};

export type CoinData = {
  price: string;
  increment: number;
};

export type CoinsDataProps = {
  bitcoin: CoinData;
  etherium: CoinData;
  liteCoin: CoinData;
  ripple: CoinData;
};

export type MarketGraphData = {
  month: string;
  medium: number;
  low: number;
  high: number;
  amt: number;
};

export type NewsData = {
  id: number;
  news: string;
  created: string;
  image: string;
  by: string;
};

export type PopularCoinsData = {
  id: number;
  name: string;
  shortName: string;
  marketCap: string;
  volume: string;
  h: string;
  image: string;
  color: PaletteColorOptions;
};

export type BalanceCoins = {
  id: number;
  name: string;
  value: number;
};

export type TotalBalanceData = {
  balance: string;
  coins: BalanceCoins[];
};

export type BtcChartData = {
  id: number;
  name: string;
  value: number;
  color: string;
};

export type Crypto = {
  coinGraphData: CoinGraphData;
  buySell: BuySellProps;
  coinsData: CoinsDataProps;
  marketGraphData: MarketGraphData[];
  newsData: NewsData[];
  popularCoins: PopularCoinsData[];
  totalBalanceData: TotalBalanceData;
  btcChartData: BtcChartData[];
};
