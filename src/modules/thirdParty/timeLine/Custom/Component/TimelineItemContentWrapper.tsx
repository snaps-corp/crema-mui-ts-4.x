import { Box } from "@mui/material";

type Props = {
  children: React.ReactNode;
};
const TimelineItemContentWrapper = ({ children }: Props) => {
  return (
    <Box
      sx={{
        borderRadius: (theme: any) => theme?.cardRadius / 4,
        backgroundColor: (theme) => theme.palette.background.paper,
        padding: 5,
        position: "relative",
        maxWidth: { xs: 500, "@media (max-width: 1023px)": "100%" },

        "&:after": {
          content: '""',
          position: "absolute",
          right: { xs: "auto", sm: "-15px" },
          left: { xs: "-15px", sm: "auto" },
          top: "calc(50% - 20px)",
          width: 0,
          height: 0,
          borderTop: "16px solid transparent",
          borderBottom: "22px solid transparent",
          borderLeft: (theme) => `16px solid ${theme.palette.background.paper}`,
          transform: { xs: "rotate(180deg)", sm: "rotate(0deg)" },
        },
      }}
      className="timelineItemContent"
    >
      {children}
    </Box>
  );
};

export default TimelineItemContentWrapper;
