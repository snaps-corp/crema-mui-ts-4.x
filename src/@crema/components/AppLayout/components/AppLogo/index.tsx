import React from "react";
import { Box } from "@mui/material";
import Logo from "../../../../../assets/icon/logo.svg";
import LogoText from "../../../../../assets/icon/logo_text.svg";

type AppLogoProps = {
  color?: string;
};

const AppLogo: React.FC<AppLogoProps> = ({ color }) => {
  console.log("AppLogo: color:", color);

  return (
    <Box
      sx={{
        height: { xs: 56, sm: 70 },
        padding: 2.5,
        display: "flex",
        flexDirection: "row",
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "center",
        "& img": {
          height: { xs: 40, sm: 45 },
        },
      }}
      className="app-logo"
    >
      <img src={Logo} alt="Logo" />
      <Box
        sx={{
          mt: 1,
          display: { xs: "none", md: "block" },
          "& img": {
            height: { xs: 25, sm: 30 },
            color: "red",
          },
        }}
      >
        <img src={LogoText} alt="LogoText" />
      </Box>
    </Box>
  );
};

export default AppLogo;
