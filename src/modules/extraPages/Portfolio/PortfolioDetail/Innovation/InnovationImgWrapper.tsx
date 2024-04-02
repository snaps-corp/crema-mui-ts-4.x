import PropsTypes from "prop-types";
import { Box } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const InnovationImgWrapper = ({ children }: Props) => {
  return (
    <Box
      sx={{
        position: "relative",
        pl: { md: 12, xl: 17 },
        pb: { md: 7.5 },
        "& > img": {
          width: "100%",
          minHeight: 300,
          objectFit: "cover",
          display: "block",
        },
        "& .innovation-img-content": {
          position: "absolute",
          left: 0,
          bottom: 0,
          zIndex: 1,
          backgroundColor: (theme) => theme.palette.error.light,
          color: (theme) => theme.palette.common.white,
          px: { xs: 8, xl: 10 },
          py: { xs: 7, xl: 9 },
          maxWidth: 260,
        },
      }}
    >
      {children}
    </Box>
  );
};

export default InnovationImgWrapper;

InnovationImgWrapper.propTypes = {
  children: PropsTypes.node,
};
