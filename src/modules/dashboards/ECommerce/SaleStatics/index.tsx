import AppCard from "@crema/components/AppCard";
import { useIntl } from "react-intl";
import AppSelect from "@crema/components/AppSelect";
import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import AppCircularProgress from "@crema/components/AppCircularProgress";
import SaleStaticChart from "./SaleStaticChart";
import AppGridContainer from "@crema/components/AppGridContainer";

const SaleStatics = () => {
  const { messages } = useIntl();
  const handleSelectionType = (data: string) => {
    console.log("data: ", data);
  };

  return (
    <AppCard
      title={messages["eCommerce.saleStatics"] as string}
      action={
        <AppSelect
          menus={[
            messages["dashboard.thisWeek"],
            messages["dashboard.lastWeeks"],
            messages["dashboard.lastMonth"],
          ]}
          defaultValue={messages["dashboard.thisWeek"]}
          onChange={handleSelectionType}
        />
      }
    >
      <AppGridContainer>
        <Grid item xs={12} md={9}>
          <SaleStaticChart />
        </Grid>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: 1,
            }}
          >
            <Box
              sx={{
                mb: 9,
                pl: { xl: 8 },
              }}
            >
              <AppCircularProgress
                activeColor="#0A8FDC"
                pathColor="#F44D50"
                hidePercentage
                value={70}
                centerNode={
                  <img
                    alt="icon"
                    src={"/assets/images/dashboard/application_icon.svg"}
                  />
                }
                thickness={2}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  mr: 6,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#0A8FDC",
                    height: 10,
                    width: 10,
                    mr: 2,
                    borderRadius: "50%",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: 14,
                  }}
                >
                  Android
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#F44D50",
                    height: 10,
                    width: 10,
                    mr: 2,
                    borderRadius: "50%",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: 14,
                  }}
                >
                  IOS
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </AppGridContainer>
    </AppCard>
  );
};

export default SaleStatics;
