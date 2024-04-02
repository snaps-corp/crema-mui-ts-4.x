import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import PackageCard from "./PackageCard";
import type { PricingOneNewType } from "@crema/types/models/extrapages/Pricing";

type Props = {
  billingFormat: string;
  pricing: PricingOneNewType[];
};

const PackageOne = ({ billingFormat, pricing }: Props) => {
  return (
    <AppGridContainer>
      {pricing.map((data, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <PackageCard billingFormat={billingFormat} pricing={data} />
        </Grid>
      ))}
    </AppGridContainer>
  );
};

export default PackageOne;
