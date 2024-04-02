import { alpha, lighten } from "@mui/material";
import Card from "@mui/material/Card";

type Props = {
  children: React.ReactNode;
};

const CardWrapper = ({ children, ...rest }: Props) => {
  return (
    <Card
      sx={{
        boxShadow: "none",
        border: "1px solid #e8e5dd",
        backgroundColor: (theme) => lighten(theme.palette.common.black, 0.1),
        color: (theme) => theme.palette.common.white,
        position: "relative",
        "&:before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: -26,
          zIndex: 1,
          height: 55,
          width: "calc(100% + 30px)",
          backgroundColor: (theme) => alpha(theme.palette.common.white, 0.1),
          transform: "rotate(10deg)",
        },
      }}
      {...rest}
    >
      {children}
    </Card>
  );
};

export default CardWrapper;
