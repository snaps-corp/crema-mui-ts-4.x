import Box from "@mui/material/Box";
import { Fonts } from "@crema/constants/AppEnums";
import { green, red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import StatGraphs from "./StatGraphs";
import AppCard from "@crema/components/AppCard";
import { RevenueCardType } from "@crema/types/models/dashboards/Analytics";

type Props = {
  data: RevenueCardType;
};
const StateCard = ({ data }: Props) => {
  return (
    <AppCard>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
          }}
        >
          <IconButton
            sx={{
              height: 50,
              width: 50,
              p: 0,
              mr: 4,
            }}
          >
            <img alt="icon" src={data.icon} />
          </IconButton>
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Box
              sx={{
                mb: 0.5,
              }}
            >
              <Box
                component="h3"
                sx={{
                  display: "inline-block",
                  fontWeight: Fonts.MEDIUM,
                  fontSize: 18,
                }}
              >
                {data.value}
              </Box>
              <Box
                sx={{
                  ml: 3,
                  fontSize: 14,
                  fontWeight: Fonts.MEDIUM,
                  color: data.growth > 0.0 ? green[500] : red[500],
                }}
                component="span"
              >
                {data.growth}%
              </Box>
            </Box>
            <Box
              component="p"
              sx={{
                fontSize: 14,
                color: "text.secondary",
                mb: 1,
              }}
            >
              {data.type}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            margin: "0 -24px -20px",
          }}
        >
          <StatGraphs data={data.graphData} strokeColor={data.strokeColor} />
        </Box>
      </Box>
    </AppCard>
  );
};

export default StateCard;
