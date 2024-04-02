import { Box, useTheme } from "@mui/material";
import { ThemeStyleRadius } from "@crema/constants/AppEnums";

type Props = {
  children: React.ReactNode;
};

const CardWrapper = ({ children, ...rest }: Props) => {
  const theme = useTheme();
  const cardRadius = ThemeStyleRadius.STANDARD;

  return (
    <Box
      sx={{
        px: 7.5,
        py: 5,
        borderRadius: cardRadius / 4,
        border: `solid 1px ${theme.palette.divider}`,
        position: "relative",
        overflow: "hidden",
        "& .popular": {
          position: "absolute",
          right: -30,
          top: -10,
          zIndex: 0,
          maxWidth: 120,
          display: "flex",
          "&:before": {
            content: '""',
            position: "absolute",
            right: -50,
            bottom: -30,
            zIndex: -1,
            width: 200,
            height: 200,
            borderRadius: "50%",
            backgroundColor: theme.palette.background.default,
          },
        },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default CardWrapper;
