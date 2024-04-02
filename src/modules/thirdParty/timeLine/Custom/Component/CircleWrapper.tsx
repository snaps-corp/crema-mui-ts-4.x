import { Box } from "@mui/material";

type Props = {
  children: React.ReactNode;
};
const CircleWrapper = ({ children }: Props) => {
  return (
    <Box
      component="span"
      className="circle"
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
        border: (theme) => `2px solid ${theme.palette.secondary.main}`,
        borderRadius: "50%",
        position: "absolute",
        top: "calc(50% - 15px)",
        right: { xs: "auto", sm: "-60px", xl: "-80px" },
        left: { "@media (max-width: 499px)": "-56px", xs: "-75px", sm: "auto" },
        width: 30,
        height: 30,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
};

export default CircleWrapper;
