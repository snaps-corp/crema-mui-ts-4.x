import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Typography } from "@mui/material";

import { styled } from "@mui/material/styles";
import { Fonts } from "@crema/constants/AppEnums";
import Box from "@mui/material/Box";
import { TopLeaderType } from "@crema/types/models/dashboards/CRM";

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
    "&.budget": {
      fontWeight: Fonts.MEDIUM,
    },
  };
});
type Props = {
  data: TopLeaderType;
};
const TableItem = ({ data }: Props) => {
  return (
    <TableRow key={data.project} className="item-hover">
      <TableCellWrapper component="th" scope="row">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              mr: 3.5,
              width: { lg: 44 },
              height: { lg: 44 },
            }}
            src={data.teamLead.image}
          />
          <Box
            sx={{
              flex: 1,
            }}
          >
            <Typography variant="h5" component="h5">
              {data.teamLead.name}
            </Typography>
            <Typography
              sx={{
                mt: 0.5,
                color: (theme) => theme.palette.text.secondary,
              }}
            >
              {data.teamLead.email}
            </Typography>
          </Box>
        </Box>
      </TableCellWrapper>
      <TableCellWrapper>{data.project}</TableCellWrapper>
      <TableCellWrapper>
        <AvatarGroup max={3} sx={{ justifyContent: "center" }}>
          {data.team.map((data) => (
            <Avatar key={data.id} src={data.image} />
          ))}
        </AvatarGroup>
      </TableCellWrapper>
      <TableCellWrapper align="center">
        <Box
          component="span"
          sx={{
            backgroundColor: data.color,
            width: 12,
            height: 12,
            borderRadius: "50%",
            display: "inline-block",
          }}
        >
          {/*{data.status}*/}
        </Box>
      </TableCellWrapper>
      <TableCellWrapper>{data.weeks}</TableCellWrapper>
      <TableCellWrapper className="budget">{data.budgets}</TableCellWrapper>
    </TableRow>
  );
};

export default TableItem;
