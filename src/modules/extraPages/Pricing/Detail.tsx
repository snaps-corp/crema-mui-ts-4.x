import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import AppGridContainer from "@crema/components/AppGridContainer";
import PackageOneNew from "./PackageOneNew";
import PackageTable from "./PackageTable";

import GitPackage from "./GitPackage";
import PricingFaq from "./Faq";

import { pricingData, pricingFaq } from "@crema/mockapi/fakedb/extraPages";

const PricingDetail = () => {
  const [billingFormat, setBillingFormat] = React.useState("month");

  return (
    <AppGridContainer>
      <Typography
        variant="h1"
        sx={{ mt: 8, width: "100%", fontSize: 48, textAlign: "center" }}
      >
        Plans that fit your scale
      </Typography>
      <Typography
        variant="body1"
        sx={{
          width: "100%",
          fontSize: 20,
          mt: 3,
          textAlign: "center",
          color: "text.secondary",
          mb: 6,
        }}
      >
        Simple, transparent pricing that grows with you. Try any plan free for
        30 days.
      </Typography>
      <Box
        sx={{
          width: "fit-content",
          m: "auto",
          borderRadius: 1.5,
          p: 1,
          bgcolor: (theme) => theme.palette.common.white,
          display: "flex",
          alignItems: "center",
          ".active": {
            boxShadow:
              "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
          },
        }}
      >
        <Box
          className={billingFormat === "month" ? "active" : ""}
          sx={{ p: 3, borderRadius: 1.5, cursor: "pointer" }}
          onClick={() => setBillingFormat("month")}
        >
          Monthly billing
        </Box>
        <Box
          className={billingFormat === "year" ? "active" : ""}
          sx={{ p: 3, borderRadius: 1.5, cursor: "pointer" }}
          onClick={() => setBillingFormat("year")}
        >
          Yearly billing
        </Box>
        <Box
          sx={{ borderRadius: "20px", bgcolor: "#F2F4F7", ml: 3, p: "4px 8px" }}
        >
          Save 20%
        </Box>
      </Box>
      <Grid item xs={12}>
        <PackageOneNew
          billingFormat={billingFormat}
          pricing={pricingData.pricingOneNew}
        />
      </Grid>
      <Box
        sx={{
          m: "60px auto 30px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Box sx={{ m: "10px auto" }}>
          <img src="/assets/images/heartglobe.svg" alt="heartglobe" />
        </Box>
        <Typography
          variant="h2"
          sx={{
            m: "auto",
            width: "40%",
            fontSize: 48,
            display: "block",
            textAlign: "center",
          }}
        >
          We love people who are changing the world
        </Typography>
      </Box>
      <Grid item xs={12}>
        <GitPackage pricing={pricingData.gitPackage} />
      </Grid>
      <Grid item xs={12}>
        <PackageTable
          billingFormat={billingFormat}
          pricing={pricingData.tableData}
        />
      </Grid>
      <Grid item xs={12} sx={{ mt: 7 }}>
        <PricingFaq pricingFaq={pricingFaq} />
      </Grid>
    </AppGridContainer>
  );
};

export default PricingDetail;
