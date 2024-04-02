import AppCard from "@crema/components/AppCard";
import { Box, Typography } from "@mui/material";
import { Fonts } from "@crema/constants/AppEnums";
import { DosesType } from "@crema/types/models/dashboards/HealthCare";

type Props = {
  data: DosesType;
};

const HospitalStatics = ({ data }: Props) => {
  const { bgColor, icon, value, name } = data;

  return (
    <AppCard
      sxStyle={{ height: 1 }}
      style={{ backgroundColor: bgColor }}
      className="card-hover"
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            mr: 4,
            alignSelf: "flex-start",
          }}
        >
          <img src={icon} alt="icon" />
        </Box>
        <Box
          sx={{
            width: "calc(100% - 70px)",
          }}
        >
          <Typography
            component="h5"
            variant="inherit"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              width: "100%",
              fontSize: 16,
              color: "inherit",
              fontWeight: Fonts.SEMI_BOLD,
            }}
          >
            {value}
          </Typography>
          <Box
            component="p"
            sx={{
              pt: 0.5,
              color: "text.secondary",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              width: "100%",
            }}
          >
            {name}
          </Box>
        </Box>
      </Box>
    </AppCard>
  );
};

export default HospitalStatics;
