export type PricingDataType = {
  pricingOne: PricingOneType[];
  pricingOneNew: PricingOneNewType[];
  pricingFour: PricingFourType[];
  pricingTwo: PricingTwoType[];
  gitPackage: GitPackageType[];
  tableData: TableDataType[];
};

export type PricingOneType = {
  id: number;
  tag: string;
  tagColor: string;
  title: string;
  price: number;
  popular?: string;
  pricingList: PricingListType[];
};

export type PricingOneNewType = {
  id: number;
  tag: string;
  tagColor: string;
  title: string;
  btnText: string;
  price: number;
  popular?: string;
  pricingList: PricingListType[];
};

export type PricingFourType = {
  id: number;
  priceColor: string;
  title: string;
  price: number;
  pricingList: PricingListType[];
};

export type PricingTwoType = {
  id: number;
  title: string;
  description: string;
  price: number;
  priceColor: string;
  priceDescription: string;
  pricingList: PricingListType[];
};

export type GitPackageType = {
  id: number;
  src: string;
  title: string;
  description: string;
};

export type TableDataType = {
  title: string;
  free?: string;
  basic?: string;
  pro?: string;
};

export type PricingListType = {
  id: number;
  title: string;
};
