import { alpha, Box, Typography, useTheme } from "@mui/material";
import { Fonts } from "@crema/constants/AppEnums";
import AppCircularProgress from "@crema/components/AppCircularProgress";
import { MonthlyLimitType } from "@crema/types/models/dashboards/Crypto";

type Props = {
  monthlyLimit: MonthlyLimitType;
};
const MonthlyLimitItem = ({ monthlyLimit }: Props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          mb: 1.5,
        }}
      >
        <AppCircularProgress
          pathColor={alpha(monthlyLimit.activeColor, 0.1)}
          value={monthlyLimit.value}
          activeColor={monthlyLimit.activeColor}
          thickness={3}
          minWidth={120}
          maxWidth={130}
          valueStyle={{
            color: theme.palette.text.primary,
            fontWeight: Fonts.BOLD,
            fontSize: 24,
          }}
        />
      </Box>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: Fonts.BOLD,
          }}
        >
          {monthlyLimit.title}
        </Typography>
        <Typography
          sx={{
            color: "text.secondary",
          }}
        >
          {monthlyLimit.income}
        </Typography>
      </Box>
    </Box>
  );
};

export default MonthlyLimitItem;
