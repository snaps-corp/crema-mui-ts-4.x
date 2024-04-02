import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import ProductSpecification from "./ProductSpecification";
import ProductInfo from "./ProductInfo";
import DeliveryInfo from "./DeliveryInfo";
import Reviews from "./Reviews";
import AvailableOffers from "./AvailableOffers";
import { ProductDataType } from "@crema/types/models/ecommerce/EcommerceApp";

type ProductViewProps = {
  product: ProductDataType;
};

const ProductView: React.FC<ProductViewProps> = ({ product }) => {
  return (
    <Grid item sm={12} md={8}>
      <Box
        component="h3"
        sx={{
          color: "text.primary",
          fontSize: 20,
          mb: 1,
        }}
      >
        ${+product.mrp - Math.round((+product.mrp * +product.discount) / 100)}
        <Box
          component="span"
          sx={{
            textDecoration: "line-through",
            color: "text.secondary",
            fontSize: 16,
            ml: 3,
          }}
        >
          ${product.mrp}
        </Box>
      </Box>
      <Box
        sx={{
          color: "primary.main",
          fontSize: 16,
          mb: 4,
        }}
      >
        In stock
      </Box>
      <Box
        component="p"
        sx={{
          color: "text.secondary",
        }}
      >
        {product.description || "No description found"}
      </Box>
      <Divider style={{ marginTop: 15, marginBottom: 15 }} />
      <AvailableOffers />
      <DeliveryInfo />
      <Divider style={{ marginTop: 15, marginBottom: 15 }} />
      <ProductSpecification productSpec={product.productSpec || []} />
      <Divider style={{ marginTop: 15, marginBottom: 15 }} />
      <ProductInfo productInfo={product.productInfo || []} />
      <Divider style={{ marginTop: 15, marginBottom: 15 }} />
      <Reviews />
    </Grid>
  );
};

export default ProductView;
