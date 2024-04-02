import AppCard from "@crema/components/AppCard";
import CardDetailItem from "./CardDetailItem";
import Box from "@mui/material/Box";
import MonthlyLimitItem from "./MonthlyLimitItem";
import { Typography } from "@mui/material";
import {
  CardDetailsType,
  CardDetailType,
} from "@crema/types/models/dashboards/Crypto";
import IntlMessages from "@crema/helpers/IntlMessages";

type Props = {
  cardDetails: CardDetailsType;
};
const CardDetails = ({ cardDetails }: Props) => {
  return (
    <AppCard title={<IntlMessages id="dashboard.crypto.cardDetails" />}>
      <Box
        sx={{
          borderBottom: (theme) => `solid 2px ${theme.palette.divider}`,
          pb: 1,
          mb: 2.5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            mx: -2.5,
          }}
        >
          {cardDetails.cardDetail.map((data: CardDetailType, index: number) => (
            <Box
              sx={{
                px: 2.5,
                pb: 1.5,
              }}
              key={index}
            >
              <CardDetailItem cardDetail={data} />
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Typography
          sx={{
            color: "text.secondary",
            mb: 2.5,
          }}
        >
          Monthly Limits
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            mx: -2.5,
          }}
        >
          {cardDetails.monthlyLimit.map((data, index) => (
            <Box
              sx={{
                px: 2.5,
                pb: 2.5,
              }}
              key={index}
            >
              <MonthlyLimitItem monthlyLimit={data} />
            </Box>
          ))}
        </Box>
      </Box>
    </AppCard>
  );
};

export default CardDetails;
