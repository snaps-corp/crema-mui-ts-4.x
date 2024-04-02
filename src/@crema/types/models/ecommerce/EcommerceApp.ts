export type BrandDataType = {
  id: number;
  name: string;
};

export type ProductColorsType = {
  BLUE: string;
  GREY: string;
  PARROT: string;
  LIGHT_PINK: string;
  PINK: string;
};

export type IdealForType = {
  id: number;
  name: string;
};

export type AddressesType = {
  id: number;
  name: string;
  mobile: string;
  addressLine: string;
  city: string;
  pin: string;
};

export type DiscountListType = {
  id: number;
  name: string;
};

export type ProductCartItemsType = {
  id: number;
  title: string;
  mrp: number;
  discount: string;
  brand?: number | string;
  image: string;
  count: number;
  createdAt?: string;
  description: string;
  price?: string;
  rating?: number;
  ideaFor?: number;
  color?: string;
  reviews?: number;
  inStock?: boolean;
  category?: number;
  SKU?: string;
  productInfo?: ProductInfoType[];
  productSpec?: ProductInfoType[];
  tag?: TagType[];
};

export type CartItemsType = {
  id: number;
  title: string;
  mrp: number;
  discount: string;
  brand?: number | string;
  image: string;
  count: number;
};

export type ProductDataType = {
  id: number;
  createdAt?: string;
  title: string;
  description: string;
  price?: string;
  mrp: number;
  discount: string;
  rating?: number;
  ideaFor?: number;
  brand?: number | string;
  color?: string;
  reviews?: number;
  image: FileType[];
  inStock?: boolean;
  category?: number;
  SKU?: string;
  productInfo?: ProductInfoType[];
  productSpec?: ProductInfoType[];
  tag?: TagType[];
};

export type RecentOrdersType = {
  id: string;
  customer: string;
  product: string;
  date: string;
  paymentType: string;
  price: string;
  status: string;
};

export type FilterDataType = {
  title: string;
  page?: string | number;
  brand: number[];
  ideaFor: number[];
  discount: number[];
  color: any[];
  rating: number[];
};

export type CustomersDataType = {
  id: number;
  name: string;
  email: string;
  lastItem: string;
  lastOrder: string;
  rating: string;
  balance: string;
  address: string;
  joinDate: string;
};

export enum VIEW_TYPE {
  LIST = 1,
  GRID = 2,
}

export type ProductInfoType = {
  id: number;
  title: string;
  desc: string;
};

export type FilterType = {
  title: string;
  inStock: boolean[];
  mrp: { start: number; end: number };
  createdAt?: { start?: string; end?: string };
};

export type TagType = {
  id: number;
  name: string;
};

export type FileType = Partial<File> & {
  preview?: string;
  path?: string;
  src?: string;
  id?: number;
};
