import { Box } from "@mui/material";
import { Fonts, ThemeStyleRadius } from "@crema/constants/AppEnums";

type Props = {
  children: React.ReactNode;
};

const PackageWrapper = ({ children, ...rest }: Props) => {
  const cardRadius = ThemeStyleRadius.STANDARD;

  return (
    <Box
      sx={{
        pt: 2.5,
        position: "relative",
        "& .tag": {
          position: "absolute",
          left: 30,
          top: 0,
          zIndex: 1,
          padding: "2px 5px",
          minWidth: 70,
          fontSize: 12,
          fontWeight: Fonts.BOLD,
          textTransform: "uppercase",
          color: (theme) => theme.palette.common.white,
          textAlign: "center",
          borderRadius: cardRadius / 16,
        },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default PackageWrapper;
