import AppCard from "@crema/components/AppCard";
import { Box } from "@mui/material";
import { Fonts } from "@crema/constants/AppEnums";
import Divider from "@mui/material/Divider";
import { useIntl } from "react-intl";
import AppAnimate from "@crema/components/AppAnimate";
import { CartItemsType } from "@crema/types/models/ecommerce/EcommerceApp";
import { getTotalPrice } from "../Confirmation/helper";

type OrderSummaryProps = {
  cartItems: CartItemsType[];
};

const OrderSummary: React.FC<OrderSummaryProps> = ({ cartItems }) => {
  const { messages } = useIntl();
  const totalPrice = getTotalPrice(cartItems);
  return (
    <AppAnimate animation="transition.slideUpIn" delay={200}>
      <AppCard
        title={
          <Box fontSize={16} fontWeight={Fonts.BOLD}>
            {messages["ecommerce.orderSummary"] as string}
          </Box>
        }
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 14,
            fontWeight: Fonts.MEDIUM,
            mt: 2,
            mb: 4,
          }}
        >
          <Box sx={{ color: "text.secondary" }}>Grand Total: </Box>
          <Box>${totalPrice}</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 14,
            fontWeight: Fonts.MEDIUM,
            mb: 4,
          }}
        >
          <Box sx={{ color: "text.secondary" }}>Discount: </Box>
          <Box>$4</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 14,
            fontWeight: Fonts.MEDIUM,
            mb: 4,
          }}
        >
          <Box sx={{ color: "text.secondary" }}>Shipping Charge: </Box>
          <Box>$4</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 14,
            fontWeight: Fonts.MEDIUM,
            mb: 4,
          }}
        >
          <Box sx={{ color: "text.secondary" }}>Estimated Tax: </Box>
          <Box>$1</Box>
        </Box>

        <Divider />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 14,
            fontWeight: Fonts.MEDIUM,
            my: 4,
          }}
        >
          <Box sx={{ color: "text.secondary" }}>Order Total: </Box>
          <Box>${totalPrice + 1}</Box>
        </Box>
      </AppCard>
    </AppAnimate>
  );
};

export default OrderSummary;
