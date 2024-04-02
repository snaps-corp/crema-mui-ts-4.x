export type PortfolioType = {
  all: AllPortfolioType[];
  branding: BrandingPortfolioType[];
  graphics: GraphicsPortfolioType[];
  logos: LogosPortfolioType[];
};

export type AllPortfolioType = {
  id: number;
  srcImg: string;
  title: string;
  subTitle: string;
};

export type BrandingPortfolioType = {
  id: number;
  srcImg: string;
  title: string;
  subTitle: string;
};

export type GraphicsPortfolioType = {
  id: number;
  srcImg: string;
  title: string;
  subTitle: string;
};

export type LogosPortfolioType = {
  id: number;
  srcImg: string;
  title: string;
  subTitle: string;
};

export type PortfolioDetailType = {
  product: ProductType[];
  premiumBrand: PremiumBrandType;
  innovation: InnovationType;
  slide: SlideType[];
  projectDescription: ProjectDescriptionType;
};

export type ProductType = {
  id: number;
  srcImg: string;
};

export type PremiumBrandType = {
  srcImg: string;
  subTitle: string;
  title: string;
};

export type InnovationType = {
  srcImg: string;
  brandSubTitle: string;
  brandTitle: string;
  title: string;
  description: string;
};

export type SlideType = {
  id: number;
  srcImg: string;
};

export type ProjectDescriptionType = {
  service: ServiceType[];
  content: ContentType[];
};

export type ServiceType = {
  id: number;
  title: string;
  subTitle: string;
};

export type ContentType = {
  id: number;
  line: string;
};

export type PortfolioDataType = {
  portfolio: PortfolioType;
  portfolioDetail: PortfolioDetailType;
};

export type PortfolioTypes =
  | AllPortfolioType
  | BrandingPortfolioType
  | GraphicsPortfolioType
  | LogosPortfolioType;

export type SalesDataType = {
  id: number;
  ques: string;
  ans: string;
  tags: string[];
};

export type InstallationDataType = {
  id: number;
  ques: string;
  ans: string;
  tags: string[];
};
