import { Box } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Graph from "./Graph";
import AppCard from "@crema/components/AppCard";
import { Fonts } from "@crema/constants/AppEnums";
import { FormattedNumber } from "react-intl";
import { AppointmentCardsType } from "@crema/types/models/dashboards/HealthCare";

type Props = {
  data: AppointmentCardsType;
};

const AppointmentCard = ({ data }: Props) => {
  return (
    <AppCard className="card-hover">
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ width: "45%", display: "flex", flexDirection: "column" }}>
          <Box
            sx={{ boxShadow: 2, height: 46, width: 46, borderRadius: "50%" }}
          >
            <img src={data.icon} alt={data.name} />
          </Box>
          <Box
            sx={{
              py: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              width: "100%",
              color: "text.secondary",
            }}
          >
            {data.name}
          </Box>
          <Box
            sx={{ fontSize: 20, fontWeight: Fonts.BOLD, color: "text.primary" }}
          >
            <FormattedNumber value={+data.value} />
          </Box>
        </Box>
        <Box
          sx={{
            width: "55%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "text.primary",
              fontWeight: Fonts.BOLD,
            }}
          >
            <ArrowUpwardIcon sx={{ fontSize: 18, mr: 0.5 }} />
            <Box>{data.chartValue}</Box>
          </Box>
          <Box
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              width: "100%",
              fontSize: 12,
              mb: 3,
              textAlign: "right",
              color: "text.secondary",
            }}
          >
            {data.chartTime}
          </Box>
          <Graph data={data.chartData} color={data.color} />
        </Box>
      </Box>
    </AppCard>
  );
};

export default AppointmentCard;
