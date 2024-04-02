import AppGrid from "@crema/components/AppGrid";
import GridItem from "./GridItem";
import ListEmptyResult from "@crema/components/AppList/ListEmptyResult";
import { ProductDataType } from "@crema/types/models/ecommerce/EcommerceApp";

type ProductGridProps = {
  ecommerceList: ProductDataType[];
  loading: boolean;
};

const ProductGrid: React.FC<ProductGridProps> = ({
  ecommerceList,
  loading,
}) => (
  <AppGrid
    delay={200}
    responsive={{
      xs: 1,
      sm: 2,
      xl: 3,
    }}
    data={ecommerceList}
    renderRow={(item) => <GridItem item={item} key={item.id} />}
    ListEmptyComponent={
      <ListEmptyResult content="No product found" loading={loading} />
    }
  />
);
export default ProductGrid;
