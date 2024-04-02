import TableCell from "@mui/material/TableCell";
import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import TableRow from "@mui/material/TableRow";
import { red } from "@mui/material/colors";
import { Fonts } from "@crema/constants/AppEnums";
import { TicketSupportDaumType } from "@crema/types/models/dashboards/CRM";

type Props = {
  row: TicketSupportDaumType;
};
const TableItem = (props: Props) => {
  const { row } = props;

  return (
    <TableRow
      sx={{
        borderBottom: "0 none",
        "& .tableCell": {
          borderBottom: "0 none",
          fontSize: 13,
          padding: "6px 8px",
          "&:first-of-type": {
            pl: 5,
          },
          "&:last-of-type": {
            pr: 5,
          },
        },
      }}
      className="item-hover"
    >
      <TableCell scope="row" className="tableCell">
        {row.id}.
      </TableCell>
      <TableCell align="left" className="tableCell">
        <Box display="flex" alignItems="center">
          {row.image ? (
            <Avatar
              sx={{
                width: { xs: 30, xl: 40 },
                height: { xs: 30, xl: 40 },
                backgroundColor: red[500],
              }}
              src={row.image}
            />
          ) : (
            <Avatar
              sx={{
                width: { xs: 30, xl: 40 },
                height: { xs: 30, xl: 40 },
                backgroundColor: red[500],
              }}
            >
              {row.name[0].toUpperCase()}
            </Avatar>
          )}
          <Box component="span" ml={3.5} fontWeight={Fonts.MEDIUM}>
            {row.name}
          </Box>
        </Box>
      </TableCell>
      <TableCell align="left" className="tableCell">
        {row.ticketId}
      </TableCell>
      <TableCell align="left" className="tableCell">
        {row.created}
      </TableCell>
      <TableCell align="left" className="tableCell">
        {row.contact}
      </TableCell>
    </TableRow>
  );
};

export default TableItem;
