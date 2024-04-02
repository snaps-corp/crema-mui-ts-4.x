import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { GainerLooserType } from "@crema/types/models/dashboards/Crypto";

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
  data: GainerLooserType;
};
const TableItem = ({ data }: Props) => {
  return (
    <TableRow key={data.name} className="item-hover">
      <TableCellWrapper align="left">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            sx={{ border: "0 none !important", width: 30, height: 30 }}
            alt={data.name}
            key={data.id}
            src={data.icon}
          />
          <Box
            component="h5"
            sx={{
              ml: 3,
            }}
          >
            {data.name}
          </Box>
        </Box>
      </TableCellWrapper>
      <TableCellWrapper align="left">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: data.type === "looser" ? "#EA3943" : "#16C784",
          }}
        >
          <Box component="span" sx={{ mr: 2 }}>
            {data.percentage}
          </Box>
          <img src={`/assets/icon/${data.type}.svg`} alt={data.type} />
        </Box>
      </TableCellWrapper>
      <TableCellWrapper align="right">{data.amount}</TableCellWrapper>
    </TableRow>
  );
};

export default TableItem;
