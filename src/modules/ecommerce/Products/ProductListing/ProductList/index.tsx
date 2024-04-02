import ListItem from "./ListItem";
import AppList from "@crema/components/AppList";
import ListEmptyResult from "@crema/components/AppList/ListEmptyResult";
import { ProductDataType } from "@crema/types/models/ecommerce/EcommerceApp";

type ProductListProps = {
  ecommerceList: ProductDataType[];
  loading: boolean;
};

const ProductList: React.FC<ProductListProps> = ({
  ecommerceList,
  loading,
}) => {
  return (
    <AppList
      delay={200}
      data={ecommerceList}
      renderRow={(item) => <ListItem item={item} key={item.id} />}
      ListEmptyComponent={
        <ListEmptyResult content="No product found" loading={loading} />
      }
    />
  );
};

export default ProductList;
