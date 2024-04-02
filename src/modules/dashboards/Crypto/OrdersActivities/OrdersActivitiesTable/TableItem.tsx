import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import { styled } from "@mui/material/styles";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import {
  OrdersActivityType,
  OrderType,
} from "@crema/types/models/dashboards/Crypto";

const TableCellWrapper = styled(TableCell)(() => {
  return {
    fontSize: 14,
    padding: "9.5px 8px",
    "&:first-of-type": {
      paddingLeft: 20,
    },
    "&:last-of-type": {
      paddingRight: 20,
    },
  };
});
type Props = {
  data: OrdersActivityType;
};

const TableItem = ({ data }: Props) => {
  return (
    <TableRow key={data.name} className="item-hover">
      <TableCellWrapper align="left">{data.transactionID}</TableCellWrapper>
      <TableCellWrapper align="left">
        <Box sx={{ display: "flex" }}>
          <AvatarGroup max={2}>
            {data.type.map((item: OrderType, index: number) => (
              <Avatar
                sx={{ border: "0 none !important", width: 30, height: 30 }}
                alt={item.title}
                key={index}
                src={item.icon}
              />
            ))}
          </AvatarGroup>
        </Box>
      </TableCellWrapper>
      <TableCellWrapper align="left">{data.description}</TableCellWrapper>
      <TableCellWrapper align="left">{data.date}</TableCellWrapper>
      <TableCellWrapper align="left">{data.usdAmount} USD</TableCellWrapper>
      <TableCellWrapper align="right">{data.amount} BTC</TableCellWrapper>
    </TableRow>
  );
};

export default TableItem;
