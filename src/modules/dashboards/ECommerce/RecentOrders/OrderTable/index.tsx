import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import AppTableContainer from "@crema/components/AppTableContainer";
import AppScrollbar from "@crema/components/AppScrollbar";

import TableHeading from "./TableHeading";
import TableItem from "./TableItem";
import { RecentOrderType } from "@crema/types/models/dashboards/Ecommerce";

type Props = {
  orderData: RecentOrderType[];
};

const OrderTable = ({ orderData }: Props) => {
  return (
    <AppTableContainer>
      <AppScrollbar style={{ maxHeight: 380 }}>
        <Table stickyHeader>
          <TableHead>
            <TableHeading />
          </TableHead>
          <TableBody>
            {orderData.map((data) => (
              <TableItem data={data} key={data.id} />
            ))}
          </TableBody>
        </Table>
      </AppScrollbar>
    </AppTableContainer>
  );
};

export default OrderTable;
