import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import PackageCard from "./PackageCard";
import type { GitPackageType } from "@crema/types/models/extrapages/Pricing";

type Props = {
  pricing: GitPackageType[];
};

const GitPackage = ({ pricing }: Props) => {
  return (
    <AppGridContainer>
      {pricing.map((data, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <PackageCard pricing={data} />
        </Grid>
      ))}
    </AppGridContainer>
  );
};

export default GitPackage;
