import { Box, Typography } from "@mui/material";
import PremiumBrandWrapper from "./PremiumBrandWrapper";
import { Fonts } from "@crema/constants/AppEnums";
import type { PremiumBrandType } from "@crema/types/models/extrapages/Portfolio";

type Props = {
  premiumBrand: PremiumBrandType;
};

const PremiumBrand = ({ premiumBrand }: Props) => {
  return (
    <PremiumBrandWrapper>
      <img src={premiumBrand.srcImg} alt={premiumBrand.subTitle} />
      <Box className="premium-brand-content">
        <Typography
          component="h5"
          sx={{
            fontSize: { xs: 16, md: 18 },
            fontWeight: Fonts.BOLD,
            textTransform: "uppercase",
          }}
        >
          {premiumBrand.subTitle}
        </Typography>
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: 26, sm: 30, md: 36, lg: 44, xl: 50 },
            fontWeight: Fonts.BOLD,
            textTransform: "uppercase",
          }}
        >
          {premiumBrand.title}
        </Typography>
      </Box>
    </PremiumBrandWrapper>
  );
};

export default PremiumBrand;
