import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";
import { BiArchiveIn } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";

import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { RecentOrderType } from "@crema/types/models/dashboards/Ecommerce";

const TableCellWrapper = styled(TableCell)(({ theme }) => {
  return {
    padding: 16,
    fontSize: 14,
    "&:first-of-type": {
      paddingLeft: 20,
    },
    "&:last-of-type": {
      paddingRight: 20,
    },
    "& .icon-btn": {
      border: `solid 1px ${alpha("#F84E4E", 0.5)}`,
      color: alpha("#F84E4E", 0.5),
      padding: 3,
      fontSize: 16,
      "&:not(:first-of-type)": {
        marginLeft: 8,
      },
    },
    "& .icon-btn-eye": {
      border: `solid 1px ${alpha(theme.palette.primary.main, 0.5)}`,
      color: alpha(theme.palette.primary.main, 0.5),
    },
    "&:hover": {
      "& .icon-btn": {
        border: `solid 1px #F84E4E`,
        color: "#F84E4E",
      },
      "& .icon-btn-eye": {
        border: `solid 1px ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
      },
    },
  };
});

type Props = {
  data: RecentOrderType;
};

const TableItem = ({ data }: Props) => {
  const getPaymentStatusColor = () => {
    switch (data.status) {
      case "Pending": {
        return "#F84E4E";
      }
      case "Delivered": {
        return "#43C888";
      }
      default: {
        return "#E2A72E";
      }
    }
  };

  return (
    <TableRow key={data.id} className="item-hover">
      <TableCellWrapper component="th" scope="row">
        <Typography
          sx={{
            color: (theme) => theme.palette.primary.main,
            display: "inline-block",
          }}
          component="h5"
          variant="h5"
        >
          {data.id}
        </Typography>
      </TableCellWrapper>
      <TableCellWrapper align="left">{data.product}</TableCellWrapper>
      <TableCellWrapper align="left">{data.customer}</TableCellWrapper>
      <TableCellWrapper align="left">{data.date}</TableCellWrapper>
      <TableCellWrapper align="left">{data.price}</TableCellWrapper>
      <TableCellWrapper align="left">
        <Box
          component="span"
          sx={{
            padding: "4px 10px",
            borderRadius: 30,
            display: "inline-block",
            color: getPaymentStatusColor(),
            backgroundColor: getPaymentStatusColor() + "44",
          }}
        >
          {data.status}
        </Box>
      </TableCellWrapper>
      <TableCellWrapper align="right">
        <IconButton size="small" className="icon-btn icon-btn-eye">
          <AiOutlineEye />
        </IconButton>
        <IconButton size="small" className="icon-btn">
          <BiArchiveIn />
        </IconButton>
      </TableCellWrapper>
    </TableRow>
  );
};

export default TableItem;
