import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { MarketingCampaignType } from "@crema/types/models/dashboards/Ecommerce";

const TableRowWrapper = styled(TableRow)(() => {
  return {
    "& td": {
      fontSize: 14,
      padding: 8,
      "&:first-of-type": {
        paddingLeft: 20,
      },
      "&:last-of-type": {
        paddingRight: 20,
      },
    },
  };
});

type Props = {
  data: MarketingCampaignType;
};

const TableItem = (props: Props) => {
  return (
    <TableRowWrapper key={props.data.name} className="item-hover">
      <TableCell>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              width: 36,
              height: 36,
              mr: 3.5,
            }}
            src={props.data.icon}
          />
          <Box
            sx={{
              fontSize: 14,
              flex: 1,
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            <Typography
              sx={{
                mb: 0.5,
                color: (theme) => theme.palette.text.primary,
              }}
              variant="h5"
              component="h5"
            >
              {props.data.name}
            </Typography>
            <Typography>{props.data.description}</Typography>
          </Box>
        </Box>
      </TableCell>
      <TableCell>{props.data.duration}</TableCell>
      <TableCell>{props.data.spent}</TableCell>
      <TableCell>{props.data.budget}</TableCell>
      <TableCell>
        {props.data.growth ? (
          <img
            src={"/assets/images/dashboard/growth_icon.svg"}
            alt="growth_icon"
          />
        ) : (
          <img
            src={"/assets/images/dashboard/decries_icon.svg"}
            alt="decries_icon"
          />
        )}
        <Box
          component="span"
          sx={{
            display: "inline-block",
            ml: 2,
            color: props.data.growth ? "#0A8FDC" : "#F44D50",
          }}
        >
          {props.data.graph}
        </Box>
        <Box
          component="span"
          sx={{
            display: "inline-block",
            color: (theme) => theme.palette.text.secondary,
            ml: 2,
          }}
        >
          {props.data.growth ? "Up" : "Down"}
        </Box>
      </TableCell>
    </TableRowWrapper>
  );
};

export default TableItem;
