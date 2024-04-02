import { alpha, Card } from "@mui/material";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

const CardWrapper = ({ children, ...rest }: Props) => {
  return (
    <Card
      sx={{
        position: "relative",
        cursor: "pointer",
        "& .card-media-wrapper": {
          position: "relative",
          "& .card-media-content": {
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.8),
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.4s linear",
            transform: "scale(0)",
            p: 3,
          },
          "& .icon": {
            width: 40,
            height: 40,
            backgroundColor: (theme) => theme.palette.background.paper,
            color: (theme) => theme.palette.text.primary,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
            mx: 1.25,
            borderRadius: "50%",
            "& svg": {
              fontSize: 16,
            },
          },
        },
        "&:hover .card-media-wrapper": {
          "& .card-media-content": {
            transform: "scale(1)",
          },
        },
      }}
      {...rest}
    >
      {children}
    </Card>
  );
};

export default CardWrapper;
