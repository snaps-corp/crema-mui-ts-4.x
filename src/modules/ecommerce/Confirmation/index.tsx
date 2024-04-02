import { Box } from "@mui/material";
import AppAnimate from "@crema/components/AppAnimate";
import { useGetDataApi } from "@crema/hooks/APIHooks";
import OrderPlaced from "./OrderPlaced";
import AddressInfo from "./AddressInfo";
import ItemsList from "./ItemsList";

import { addresses } from "@crema/mockapi/fakedb/ecommerce/ecommerceData";
import AppLoader from "@crema/components/AppLoader";
import { CartItemsType } from "@crema/types/models/ecommerce/EcommerceApp";

const Confirmation = () => {
  const [{ apiData: cartItems, loading }] = useGetDataApi<CartItemsType[]>(
    "/api/cart/get",
    [],
  );
  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <AppAnimate animation="transition.slideUpIn" delay={200}>
          <Box>
            <OrderPlaced cartItems={cartItems} />
            <AddressInfo address={addresses[0]} />
            <ItemsList cartItems={cartItems} />
          </Box>
        </AppAnimate>
      )}
    </>
  );
};

export default Confirmation;
