import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Fonts } from "@crema/constants/AppEnums";
import Card from "@mui/material/Card";
import { AiOutlineArrowRight } from "react-icons/ai";
import type { GitPackageType } from "@crema/types/models/extrapages/Pricing";

type Props = {
  pricing: GitPackageType;
};

const PackageCard = ({ pricing }: Props) => {
  return (
    <Card
      sx={{
        boxShadow:
          "0px 4.00784px 8.01569px -2.00392px rgba(16, 24, 40, 0.1), 0px 2.00392px 4.00784px -2.00392px rgba(16, 24, 40, 0.06)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box
        sx={{
          py: 5,
          px: 5,
          textAlign: "left",
        }}
      >
        <img src={pricing.src} alt={pricing.title} />
        <Typography
          component="h3"
          sx={{
            fontWeight: Fonts.BOLD,
            fontSize: 36,
            mb: 4,
          }}
        >
          {pricing.title}
        </Typography>
        <Typography>{pricing.description}</Typography>
      </Box>
      <Box
        sx={{
          color: "primary.main",
          p: "0 24px 15px",
          mt: "auto",
          display: "flex",
          alignItems: "center",
          fontWeight: Fonts.BOLD,
        }}
      >
        Learn more
        <AiOutlineArrowRight style={{ marginLeft: "10px" }} size={20} />
      </Box>
    </Card>
  );
};

export default PackageCard;
