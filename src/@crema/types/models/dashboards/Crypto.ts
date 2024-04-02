export type CryptoPropsType = {
  coinsData: CoinsDataType;
  popularCoins: PopularCoinType[];
  totalBalanceData: TotalBalanceDataType;
  stories: StoryType[];
  ordersActivities: OrdersActivityType[];
  buySell: BuySellType;
  gainerLooser: GainerLooserType[];
  atcStatics: AtcStaticType[];
  cardDetails: CardDetailsType;
  quickTransfer: QuickTransferType;
};

export type CoinsDataType = {
  bitcoin: CoinType;
  etherium: CoinType;
  liteCoin: CoinType;
  ripple: CoinType;
};

export type CoinType = {
  price: string;
  increment: number;
};

export type PopularCoinType = {
  id: number;
  name: string;
  shortName: string;
  marketCap: string;
  volume: string;
  h: string;
  image: string;
  color: string;
};

export type TotalBalanceDataType = {
  balance: string;
  coins: CoinInfoDataType[];
};

export type CoinInfoDataType = {
  id: number;
  name: string;
  value: number;
};

export type StoryType = {
  id: number;
  srcImg: string;
  title: string;
  tag: string;
  time: string;
};

export type OrdersActivityType = {
  id: number;
  transactionID: string;
  type: OrderType[];
  description: string;
  date: string;
  usdAmount: string;
  amount: string;
  name?: string;
};

export type OrderType = {
  id: number;
  icon: string;
  title: string;
};

export type BuySellType = {
  coinList: CoinListType[];
};

export type CoinListType = {
  coinName?: string;
  id: number;
  icon: string;
  name: string;
  shortName: string;
  coinColor: string;
  usdPrice: number;
};

export type GainerLooserType = {
  id: number;
  icon: string;
  name: string;
  type: string;
  percentage: string;
  amount: string;
};

export type AtcStaticType = {
  name: string;
  Buy: number;
  Sell: number;
};

export type CardDetailsType = {
  cardDetail: CardDetailType[];
  monthlyLimit: MonthlyLimitType[];
};

export type CardDetailType = {
  id: number;
  title: string;
  name: string;
};

export type MonthlyLimitType = {
  id: number;
  value: number;
  activeColor: string;
  title: string;
  income: string;
};

export type QuickTransferType = {
  recentContact: RecentContactType[];
  coinList: CoinList2Type[];
};

export type RecentContactType = {
  id: number;
  image: string;
  name: string;
};

export type CoinList2Type = {
  id: number;
  icon: string;
  value: number;
  shortName: string;
  name?: string;
};
