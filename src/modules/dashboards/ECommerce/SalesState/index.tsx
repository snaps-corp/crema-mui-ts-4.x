import { Box, Typography } from "@mui/material";
import AppCard from "@crema/components/AppCard";
import { StateDataType } from "@crema/types/models/dashboards/Ecommerce";

type Props = {
  state: StateDataType;
};

const SalesState = (props: Props) => {
  const { color, icon, title, value } = props.state;

  return (
    <AppCard
      sxStyle={{
        backgroundColor: color,
        height: 1,
      }}
      className="card-hover"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            mr: 4,
            alignSelf: "flex-start",
            "& img": {
              display: "block",
              width: { xs: "auto", lg: 50, xl: "auto" },
            },
          }}
        >
          <img src={icon} alt="icon" />
        </Box>
        <Box
          sx={{
            flex: 1,
            color: "white",
          }}
        >
          <Typography
            component="h3"
            variant="inherit"
            sx={{
              color: "inherit",
            }}
          >
            {value}
          </Typography>
          <Box
            sx={{
              mt: 0.5,
            }}
            component="p"
          >
            {title}
          </Box>
        </Box>
      </Box>
    </AppCard>
  );
};

export default SalesState;
