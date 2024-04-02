import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import OrderActions from "./OrderActions";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@mui/material";
import { InvoiceType } from "@crema/types/models/invoice";

const StyledTableCell = styled(TableCell)(() => ({
  fontSize: 14,
  padding: 8,
  "&:first-of-type": {
    paddingLeft: 20,
  },
  "&:last-of-type": {
    paddingRight: 20,
  },
}));

type TableItemProps = {
  data: InvoiceType;
  onChangeStatus: (invoice: InvoiceType, status: number) => void;
};

const TableItem = ({ data, onChangeStatus }: TableItemProps) => {
  const navigate = useNavigate();
  const statusName = {
    120: "Sent",
    121: "Paid",
    122: "Declined",
    123: "Cancelled",
  };
  const getPaymentStatusColor = () => {
    switch (data.folderValue) {
      case 120: {
        return "#2997ff";
      }
      case 121: {
        return "#43C888";
      }
      case 122: {
        return "#F84E4E";
      }
      case 123: {
        return "#FF8B26";
      }
    }
  };

  return (
    <TableRow key={data.id} className="item-hover">
      <StyledTableCell align="left">
        <Checkbox color="primary" />
      </StyledTableCell>
      <StyledTableCell align="left">
        <Box
          onClick={() => navigate(`/invoice/pdf/${data.id}`)}
          component="span"
          color="primary.main"
          style={{
            cursor: "pointer",
          }}
        >
          {data.inum}
        </Box>
      </StyledTableCell>
      <StyledTableCell align="left" sx={{ width: 400 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {data.clientName}
        </Box>
      </StyledTableCell>
      <StyledTableCell align="left">
        <Box
          sx={{
            color: getPaymentStatusColor(),
            backgroundColor: getPaymentStatusColor() + "44",
            padding: "3px 5px",
            borderRadius: 1,
            fontSize: 14,
            display: "inline-block",
          }}
        >
          {statusName[data.folderValue as keyof typeof statusName]}
        </Box>
      </StyledTableCell>
      <StyledTableCell align="left">{data.idt}</StyledTableCell>
      <StyledTableCell align="left">{data.dueDate}</StyledTableCell>
      <StyledTableCell align="left">${data.amount}</StyledTableCell>
      <TableCell align="right">
        <OrderActions
          id={data.id}
          data={data}
          status={data.folderValue}
          onChangeStatus={onChangeStatus}
        />
      </TableCell>
    </TableRow>
  );
};

export default TableItem;
