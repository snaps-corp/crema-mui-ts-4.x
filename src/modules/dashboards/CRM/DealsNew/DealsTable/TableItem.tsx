import TableCell from "@mui/material/TableCell";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import TableRow from "@mui/material/TableRow";
import { blue, green, red } from "@mui/material/colors";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Fonts } from "@crema/constants/AppEnums";
import { DealsTableDaumType } from "@crema/types/models/dashboards/CRM";

const TableCellWrapper = styled(TableCell)(() => {
  return {
    fontSize: 14,
    padding: 8,
    "&:first-of-type": {
      paddingLeft: 20,
    },
    "&:last-of-type": {
      paddingRight: 20,
    },
  };
});

const getProgressColor = (progress: string) => {
  switch (progress) {
    case "Pending":
      return `${red[600]}`;

    case "Approved":
      return `${blue[500]}`;

    case "Application":
      return `${green[600]}`;

    default:
      return `${red[600]}`;
  }
};
type Props = {
  row: DealsTableDaumType;
};
const TableItem = ({ row }: Props) => {
  return (
    <TableRow key={row.name} className="item-hover">
      <TableCellWrapper component="th" scope="row">
        {row.id}.
      </TableCellWrapper>
      <TableCellWrapper>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {row.logo ? (
            <Avatar
              sx={{
                width: 34,
                height: 34,
                mr: 3.5,
              }}
              src={row.logo}
            />
          ) : (
            <Avatar
              sx={{
                width: 34,
                height: 34,
                mr: 3.5,
              }}
            >
              {row.name[0].toUpperCase()}
            </Avatar>
          )}
          <Typography variant="h5" component="h5">
            {row.name}
          </Typography>
        </Box>
      </TableCellWrapper>
      <TableCellWrapper>{row.type}</TableCellWrapper>
      <TableCellWrapper align="left">
        <Box component="span" sx={{ fontWeight: Fonts.MEDIUM }}>
          {row.amount}
        </Box>
      </TableCellWrapper>
      <TableCellWrapper>
        <Box
          component="span"
          sx={{
            padding: "5px 14px",
            borderRadius: 30,
            fontSize: 12,
            fontWeight: Fonts.SEMI_BOLD,
            minWidth: 85,
            textAlign: "center",
            color: getProgressColor(row.progress),
            backgroundColor: getProgressColor(row.progress) + "33",
          }}
        >
          {row.progress}
        </Box>
      </TableCellWrapper>
      <TableCellWrapper>{row.created}</TableCellWrapper>
    </TableRow>
  );
};

export default TableItem;
