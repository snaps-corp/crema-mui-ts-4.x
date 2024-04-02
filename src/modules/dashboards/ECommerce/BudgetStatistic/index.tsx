import { FormattedNumber, useIntl } from "react-intl";
import IntlMessages from "@crema/helpers/IntlMessages";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";
import { Fonts } from "@crema/constants/AppEnums";
import AppCard from "@crema/components/AppCard";
import AppCircularProgress from "@crema/components/AppCircularProgress";

const FooterActionItem = styled("div")(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    paddingBottom: 2,
    "&:not(:first-of-type)": {
      marginLeft: 16,
      paddingLeft: 16,
      borderLeft: `solid 1px ${alpha(theme.palette.text.secondary, 0.2)}`,
    },
    "& .footer-title": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      lineHeight: 1,
    },
    "& .footer-dot": {
      height: 10,
      width: 10,
      minWidth: 10,
      marginRight: 4,
      marginTop: 3,
      borderRadius: "50%",
    },
  };
});

const BudgetStatistic = () => {
  const { messages } = useIntl();
  const theme = useTheme();

  return (
    <AppCard
      sxStyle={{ height: 1 }}
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      title={messages["dashboard.eCommerce.budgetStatistic"] as string}
      footerPosition="center"
      footerStyle={{ paddingBottom: 7.5, paddingTop: 0 }}
      footer={
        <Box
          sx={{
            flex: 1,
            overflow: "hidden",
            color: theme.palette.text.secondary,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FooterActionItem>
            <Box
              className="footer-dot"
              sx={{
                backgroundColor: "success.main",
              }}
            />
            <span className="footer-title">
              <IntlMessages id="dashboard.eCommerce.completed" />
            </span>
          </FooterActionItem>
          <FooterActionItem>
            <Box
              className="footer-dot"
              sx={{
                backgroundColor: "grey.300",
              }}
            />
            <span className="footer-title">
              <IntlMessages id="dashboard.eCommerce.remaining" />
            </span>
          </FooterActionItem>
        </Box>
      }
    >
      <AppCircularProgress
        activeColor="#0A8FDC"
        pathColor="#F5F6FA"
        value={70}
        hidePercentage
        thickness={2}
        maxWidth={176}
        minWidth={170}
        centerNode={
          <Box
            sx={{
              textAlign: "center",
              color: theme.palette.text.secondary,
            }}
          >
            <Typography
              component="h1"
              variant="h1"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: Fonts.SEMI_BOLD,
              }}
            >
              <FormattedNumber
                value={1000}
                maximumFractionDigits={0}
                style="currency"
                currency="USD"
              />
            </Typography>
            <Typography>
              <IntlMessages id="dashboard.eCommerce.totalBudget" />
            </Typography>
          </Box>
        }
      />
    </AppCard>
  );
};

export default BudgetStatistic;
