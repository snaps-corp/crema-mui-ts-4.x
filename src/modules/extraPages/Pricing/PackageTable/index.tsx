import { Box, Typography } from "@mui/material";

import PricingTable from "./Table";
import { TableDataType } from "@crema/types/models/extrapages/Pricing";
import { ThemeStyleRadius } from "@crema/constants/AppEnums";

type Props = {
  billingFormat: string;
  pricing: TableDataType[];
};

const PackageTable = ({ billingFormat, pricing }: Props) => {
  const cardRadius = ThemeStyleRadius.STANDARD;

  return (
    <Box
      sx={{
        p: 6,
        borderRadius: cardRadius / 4,
        backgroundColor: (theme) => theme.palette.common.white,
        boxShadow:
          "0px 4.00784px 8.01569px -2.00392px rgba(16, 24, 40, 0.1), 0px 2.00392px 4.00784px -2.00392px rgba(16, 24, 40, 0.06)",
      }}
    >
      <Typography
        variant="h3"
        sx={{ mt: 8, width: "100%", fontSize: 48, textAlign: "center" }}
      >
        Compare Our Plans
      </Typography>
      <Box sx={{ mt: 4 }}>
        <PricingTable billingFormat={billingFormat} tableData={pricing} />
      </Box>
    </Box>
  );
};

export default PackageTable;
