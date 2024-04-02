import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableHeading from "./TableHeading";
import TableItem from "./TableItem";
import AppTableContainer from "@crema/components/AppTableContainer";
import { CartItemsType } from "@crema/types/models/ecommerce/EcommerceApp";

type CartTableProps = {
  cartItems: CartItemsType[];
  onRemoveItem: (data: CartItemsType) => void;
  onIncrement: (data: CartItemsType) => void;
  onDecrement: (data: CartItemsType) => void;
};

const CartTable = ({
  cartItems,
  onRemoveItem,
  onIncrement,
  onDecrement,
}: CartTableProps) => {
  return (
    <AppTableContainer>
      <Table stickyHeader className="table">
        <TableHead>
          <TableHeading />
        </TableHead>
        <TableBody>
          {cartItems.map((data: any) => (
            <TableItem
              data={data}
              key={data.id}
              onRemoveItem={onRemoveItem}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          ))}
        </TableBody>
      </Table>
    </AppTableContainer>
  );
};

export default CartTable;
