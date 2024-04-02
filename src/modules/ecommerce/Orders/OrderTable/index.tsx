import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableHeading from "./TableHeading";
import TableItem from "./TableItem";
import AppTableContainer from "@crema/components/AppTableContainer";

import { RecentOrdersType } from "@crema/types/models/ecommerce/EcommerceApp";

type OrderTableProps = {
  orderData: RecentOrdersType[];
};

const OrderTable: React.FC<OrderTableProps> = ({ orderData }) => {
  return (
    <AppTableContainer>
      <Table stickyHeader className="table">
        <TableHead>
          <TableHeading />
        </TableHead>
        <TableBody>
          {orderData.map((data: any) => (
            <TableItem data={data} key={data.id} />
          ))}
        </TableBody>
      </Table>
    </AppTableContainer>
  );
};

export default OrderTable;
