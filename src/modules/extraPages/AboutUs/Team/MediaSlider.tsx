import { Box, lighten } from "@mui/material";

type MediaSliderProps = {
  children: React.ReactNode;
};

const MediaSlider = ({ children }: MediaSliderProps) => {
  return (
    <Box
      sx={{
        mx: -2.5,
        "& .slick-slider": {
          pb: 8,
        },
        "& .slick-dots": {
          bottom: 0,
          "& li": {
            width: 10,
            height: 10,
            "& button": {
              width: 10,
              height: 10,
              padding: 0,
            },
            "& button:before": {
              fontSize: 0,
              backgroundColor: (theme) =>
                lighten(theme.palette.common.black, 0.5),
              width: 10,
              height: 10,
              borderRadius: "50%",
            },
          },
        },
      }}
    >
      {children}
    </Box>
  );
};

export default MediaSlider;
