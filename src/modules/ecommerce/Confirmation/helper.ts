import { CartItemsType } from '@crema/types/models/ecommerce/EcommerceApp';

export const getTotalPrice = (cartItems: CartItemsType[]) => {
  let total = 0;
  cartItems.map((data: any) => {
    total = total + (+data.mrp - +data.discount) * +data.count;
    return data;
  });
  return total;
};
