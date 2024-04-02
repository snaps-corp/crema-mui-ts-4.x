import TableCell from "@mui/material/TableCell";
import { Box } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { PageVisitType } from "@crema/types/models/dashboards/Analytics";

type Props = {
  data: PageVisitType;
};
const TableItem = ({ data }: Props) => {
  return (
    <TableRow
      sx={{
        "& .tableCell": {
          fontSize: 13,
          padding: 2,
          "&:first-of-type": {
            pl: 5,
          },
          "&:last-of-type": {
            pr: 5,
          },
        },
      }}
      key={data.id}
      className="item-hover"
    >
      <TableCell component="th" scope="data" className="tableCell">
        {data.page}
      </TableCell>
      <TableCell align="right" className="tableCell">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <ArrowDropUpIcon
            sx={{
              color: (theme) => theme.palette.success.main,
              width: 30,
              height: 30,
            }}
          />{" "}
          {data.pageView}
        </Box>
      </TableCell>
      <TableCell align="right" className="tableCell">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <ArrowDropDownIcon
            sx={{
              color: (theme) => theme.palette.secondary.main,
              width: 30,
              height: 30,
            }}
          />
          {data.visitors}
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default TableItem;
