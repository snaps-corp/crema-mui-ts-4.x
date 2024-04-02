import { Box } from "@mui/material";

type Props = {
  children: React.ReactNode;
};
const TimelineItemWrapper = ({ children }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        paddingRight: { xs: 0, sm: "45px", xl: "65px" },
        paddingLeft: { "@media (max-width: 499px)": "50px", xs: "90px", sm: 0 },
        position: "relative",
        margin: "10px 0",
        width: { xs: "100%", sm: "50%" },

        "&:nth-child(odd)": {
          alignSelf: "flex-end",
          justifyContent: "flex-start",
          paddingLeft: {
            "@media (max-width: 499px)": "50px",
            xs: "90px",
            sm: "45px",
            xl: "65px",
          },
          paddingRight: 0,

          "& .timelineItemContent": {
            "&:after": {
              right: "auto",
              left: "-15px",
              transform: "rotate(180deg)",
            },

            "& .circle": {
              right: "auto",
              left: {
                "@media (max-width: 499px)": "-56px",
                xs: "-75px",
                sm: "-60px",
                xl: "-80px",
              },
            },
          },
        },
      }}
    >
      {children}
    </Box>
  );
};

export default TimelineItemWrapper;
