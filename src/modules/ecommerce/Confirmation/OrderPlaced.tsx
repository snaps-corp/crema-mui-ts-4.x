import AppCard from "@crema/components/AppCard";
import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import { Box, Button } from "@mui/material";
import { CartItemsType } from "@crema/types/models/ecommerce/EcommerceApp";
import { getTotalPrice } from "./helper";

type OrderPlacedProps = {
  cartItems: CartItemsType[];
};

const OrderPlaced: React.FC<OrderPlacedProps> = ({ cartItems }) => {
  return (
    <AppCard style={{ marginBottom: 24 }}>
      <AppGridContainer>
        <Grid xs={12} md={8} item>
          <Box sx={{ display: "flex", p: 4, alignItems: "center" }}>
            <img src={"/assets/images/ecommerce/gift.png"} alt="confirm" />
            <Box p={4}>
              <Box
                component="h3"
                sx={{ color: "primary.main", mb: 0.5, fontSize: 16 }}
              >
                Order placed for ${getTotalPrice(cartItems)}!
              </Box>
              <Box sx={{ fontSize: 14 }}>
                Your {cartItems.length} Item will be delivered by Mon, 27 Aug
                20.
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} md={4} item>
          <Box sx={{ display: "flex", p: 4 }}>
            <Box>
              <Box sx={{ fontSize: 14 }}>Why call? Just click!</Box>
              <Box sx={{ py: 3 }}>Easily track all your orders! </Box>
              <Button variant="contained" color="primary">
                Go to My Orders
              </Button>
            </Box>
            <Box sx={{ ml: "auto" }}>
              <img
                style={{ maxHeight: 60, marginTop: 20 }}
                src={"/assets/images/ecommerce/confirm-box.png"}
                alt="confirm"
              />
            </Box>
          </Box>
        </Grid>
      </AppGridContainer>
    </AppCard>
  );
};

export default OrderPlaced;
