import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";

import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import AppMenu from "@crema/components/AppMenu";
import { RecentPatientType } from "@crema/types/models/dashboards/HealthCare";

const TableCellWrapper = styled(TableCell)(() => {
  return {
    fontSize: 14,
    padding: 8,
    whiteSpace: "nowrap",
    "&:first-of-type": {
      paddingLeft: 20,
    },
    "&:last-of-type": {
      paddingRight: 20,
    },
  };
});

type Props = {
  data: RecentPatientType;
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
          <Box
            sx={{
              mr: 3,
            }}
          >
            <Avatar src={data.profile_pic} />
          </Box>
          <Typography variant="h5" component="h5">
            {data.name}
          </Typography>
        </Box>
      </TableCellWrapper>
      <TableCellWrapper align="left">{data.gender}</TableCellWrapper>
      <TableCellWrapper align="left">{data.weight}</TableCellWrapper>
      <TableCellWrapper align="left">{data.assignedDr}</TableCellWrapper>
      <TableCellWrapper align="left" sx={{ fontSize: 12 }}>
        {data.date}
      </TableCellWrapper>
      <TableCellWrapper align="left">
        <Box
          component="span"
          sx={{
            padding: "3px 10px 4px",
            borderRadius: 4,
            display: "inline-block",
            color: data.color,
            backgroundColor: data.color + "44",
            fontSize: 12,
          }}
        >
          {data.status}
        </Box>
      </TableCellWrapper>
      <TableCellWrapper align="right">
        <AppMenu />
      </TableCellWrapper>
    </TableRow>
  );
};

export default TableItem;
