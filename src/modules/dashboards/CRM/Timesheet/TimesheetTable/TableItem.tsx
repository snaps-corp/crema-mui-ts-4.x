import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { alpha, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Fonts } from "@crema/constants/AppEnums";
import { TimesheetType } from "@crema/types/models/dashboards/CRM";

const TableCellWrapper = styled(TableCell)(() => {
  return {
    fontSize: 14,
    padding: "11.5px 8px",
    "&:first-of-type": {
      paddingLeft: 20,
    },
    "&:last-of-type": {
      paddingRight: 20,
    },
  };
});
const NumberWrapper = styled("span")(({ theme }) => {
  return {
    width: 26,
    height: 26,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
    color: theme.palette.primary.main,
    fontSize: 14,
    fontWeight: Fonts.SEMI_BOLD,
    marginRight: 14,
  };
});
type Props = {
  data: TimesheetType;
};
const TableItem = ({ data }: Props) => {
  return (
    <TableRow key={data.name} className="item-hover">
      <TableCellWrapper component="th" scope="row">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <NumberWrapper>{data.id}</NumberWrapper>
          <Typography variant="h5" component="h5">
            {data.name}
          </Typography>
        </Box>
      </TableCellWrapper>
      <TableCellWrapper align="left">{data.date}</TableCellWrapper>
      <TableCellWrapper align="left">{data.start_time}</TableCellWrapper>
      <TableCellWrapper align="left">{data.end_time}</TableCellWrapper>
      <TableCellWrapper align="left">{data.duration}</TableCellWrapper>
    </TableRow>
  );
};

export default TableItem;
