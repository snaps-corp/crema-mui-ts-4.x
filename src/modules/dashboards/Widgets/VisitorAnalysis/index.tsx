import { Box } from "@mui/material";
import IntlMessages from "@crema/helpers/IntlMessages";
import Typography from "@mui/material/Typography";
import AppCircularProgress from "@crema/components/AppCircularProgress";
import AppCard from "@crema/components/AppCard";
import { useIntl } from "react-intl";

const VisitorAnalysis = () => {
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages["dashboard.visitorAnalysis"] as string}
      sxStyle={{ height: 1 }}
      footer={
        <Box color="text.secondary" display="flex" alignItems="center">
          <Box
            sx={{
              backgroundColor: "secondary.main",
              height: { xs: 12, xl: 16 },
              width: { xs: 12, xl: 16 },
              mr: 4,
              borderRadius: "50%",
            }}
          />
          <Box
            sx={{
              flex: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: 14,
              }}
            >
              <IntlMessages id="dashboard.visitorAnalysisContent" />
            </Typography>
          </Box>
        </Box>
      }
    >
      <Box>
        <AppCircularProgress activeColor="#F04F47" value={59} thickness={2} />
      </Box>
    </AppCard>
  );
};

export default VisitorAnalysis;
