import AppCard from "@crema/components/AppCard";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Switch, { SwitchProps } from "@mui/material/Switch";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Fonts } from "@crema/constants/AppEnums";
import { TeamStateDaumType } from "@crema/types/models/dashboards/CRM";

const AvatarGroupRoot = styled(AvatarGroup)(({ theme }) => {
  return {
    "& .MuiAvatar-root": {
      fontSize: 14,
      fontWeight: Fonts.SEMI_BOLD,
      "@media only screen and (min-width: 1200px) and (max-width: 1399px)": {
        width: 30,
        height: 30,
      },
    },
    "& .MuiAvatar-colorDefault": {
      backgroundColor: alpha(theme.palette.primary.main, 0.6),
      color: theme.palette.primary.contrastText,
    },
    "&:hover": {
      "& .MuiAvatar-colorDefault": {
        backgroundColor: theme.palette.primary.main,
      },
    },
  };
});

const IconBtnRoot = styled(IconButton)(({ theme }) => {
  return {
    border: `solid 1px ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    padding: 7,
    "&:hover, &:focus": {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
    },
    "& .MuiSvgIcon-root": {
      fontSize: 20,
    },
    "@media only screen and (min-width: 1200px) and (max-width: 1399px)": {
      padding: 4,
      width: 26,
      height: 26,
      "& .MuiSvgIcon-root": {
        fontSize: 16,
      },
    },
  };
});

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 36,
  height: 20,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.primary.main
            : alpha(theme.palette.primary.main, 0.6),
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.mode === "light" ? "grey.100" : "grey.600",
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 16,
    height: 16,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

type Props = {
  data: TeamStateDaumType;
};
const TeamState = ({ data }: Props) => {
  return (
    <AppCard>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Box
          sx={{
            width: "calc(100% - 60px)",
            color: (theme) => theme.palette.text.secondary,
          }}
        >
          <Typography
            component="h3"
            variant="h3"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              width: "100%",
              color: (theme) => theme.palette.text.primary,
              fontWeight: Fonts.SEMI_BOLD,
              mb: 1,
            }}
          >
            {data.name}
          </Typography>
          <Typography>{data.duration}</Typography>
        </Box>
        <IOSSwitch defaultChecked={data.status} />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 5,
        }}
      >
        {data.tags.map((data, index) => (
          <Box
            component="span"
            sx={{
              padding: "2px 12px",
              mr: 1.5,
              borderRadius: 30,
            }}
            key={"team-" + index}
            style={{ backgroundColor: data.color + "21", color: data.color }}
          >
            <Typography component="span" variant="h6">
              {data.title}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <AvatarGroupRoot max={3}>
          {data.members.map((data, index) => (
            <Avatar key={"member-" + index} alt={data.name} src={data.image} />
          ))}
        </AvatarGroupRoot>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            component="span"
            sx={{
              display: "block",
            }}
          >
            <IconBtnRoot size="large">
              <EditIcon />
            </IconBtnRoot>
          </Box>

          <Box
            component="span"
            sx={{
              display: "block",
              ml: 1.5,
            }}
          >
            <IconBtnRoot size="large">
              <CallMadeOutlinedIcon />
            </IconBtnRoot>
          </Box>
        </Box>
      </Box>
    </AppCard>
  );
};

export default TeamState;
