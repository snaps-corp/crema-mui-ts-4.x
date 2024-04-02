import PropsTypes from "prop-types";
import { alpha, Box } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const PremiumBrandWrapper = ({ children }: Props) => {
  return (
    <Box
      sx={{
        position: "relative",
        mb: { xs: 7.5, md: 15 },
        "& > img": {
          width: "100%",
          display: "block",
        },
        "& .premium-brand-content": {
          backgroundColor: (theme) => alpha(theme.palette.common.black, 0.6),
          color: (theme) => theme.palette.common.white,
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
        },
      }}
    >
      {children}
    </Box>
  );
};

export default PremiumBrandWrapper;

PremiumBrandWrapper.propTypes = {
  children: PropsTypes.node,
};
