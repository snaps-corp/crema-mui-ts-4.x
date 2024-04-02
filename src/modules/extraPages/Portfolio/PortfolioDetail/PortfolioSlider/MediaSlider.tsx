import PropsTypes from "prop-types";
import { Box } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const MediaSlider = ({ children }: Props) => {
  return (
    <Box
      sx={{
        position: "relative",
        mb: { xs: 7.5, md: 15 },
        "& .slick-slider": {
          "& .slick-prev, & .slick-next": {
            width: { xs: 30, lg: 40 },
            height: { xs: 30, lg: 40 },
            backgroundImage: `url('/assets/images/arrow-prev.svg')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundColor: (theme) => theme.palette.common.white,
            borderRadius: "50%",
            zIndex: 3,
            p: 1,
            "&:before": {
              display: "none",
            },
          },
          "& .slick-prev": {
            left: 25,
            backgroundPositionX: "46%",
          },
          "& .slick-next": {
            right: 25,
            backgroundImage: `url('/assets/images/arrow-next.svg')`,
            backgroundPositionX: "54%",
          },
        },
      }}
    >
      {children}
    </Box>
  );
};

export default MediaSlider;

MediaSlider.propTypes = {
  children: PropsTypes.node,
};
