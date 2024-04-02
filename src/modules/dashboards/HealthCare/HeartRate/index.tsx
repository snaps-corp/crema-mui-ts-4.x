import AppCard from "@crema/components/AppCard";
import { alpha, Box } from "@mui/material";
import ViewGraph from "./ViewGraph";
import { HeartCardType } from "@crema/types/models/dashboards/HealthCare";
import { Fonts } from "@crema/constants/AppEnums";

type Props = {
  data: HeartCardType;
};

const HeartRate = ({ data }: Props) => {
  return (
    <AppCard>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          component="h3"
          sx={{
            color: "text.primary",
            fontWeight: Fonts.MEDIUM,
            fontSize: 16,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            width: "100%",
          }}
        >
          {data.title}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: 1,
            mb: -10,
          }}
        >
          <Box
            sx={{
              width: "90%",
            }}
          >
            <ViewGraph data={data.graphData} color={data.color} />
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: (theme) => alpha(theme.palette.common.black, 0.04),
            margin: "0 -24px -20px",
            padding: { xs: "8px 24px 14px", xl: "4px 24px 14px" },
            fontSize: { xs: 20, xl: 24 },
            fontWeight: Fonts.BOLD,
          }}
        >
          {data.measurement}
          <Box sx={{ fontSize: 16, ml: 2 }} component="span">
            {data.unit}
          </Box>
        </Box>
      </Box>
    </AppCard>
  );
};

export default HeartRate;
