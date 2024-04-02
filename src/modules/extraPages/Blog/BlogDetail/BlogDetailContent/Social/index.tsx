import { Box } from "@mui/material";
import { FaFacebook } from "react-icons/fa";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";

const socialData = [
  {
    id: 1,
    icon: <FaFacebook />,
  },
  {
    id: 2,
    icon: <AiOutlineInstagram />,
  },
  {
    id: 3,
    icon: <AiOutlineTwitter />,
  },
  {
    id: 4,
    icon: <AiOutlineGithub />,
  },
  {
    id: 5,
    icon: <FiGlobe />,
  },
];
const Social = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mx: { xs: -2, md: -4 },
      }}
    >
      {socialData?.map((social, index) => (
        <Box
          sx={{
            px: { xs: 2, md: 4 },
            color: (theme) => theme.palette.text.primary,
          }}
          key={index}
        >
          <Box
            component="span"
            sx={{
              cursor: "pointer",
              "& svg": {
                fontSize: 20,
              },
            }}
          >
            {social.icon}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Social;
