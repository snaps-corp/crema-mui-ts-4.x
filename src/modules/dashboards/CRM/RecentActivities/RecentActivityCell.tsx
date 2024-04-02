import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Fonts } from "@crema/constants/AppEnums";
import { RecentActivityType } from "@crema/types/models/dashboards/CRM";

type Props = {
  activity: RecentActivityType;
};
const RecentActivityCell = ({ activity }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "3px 20px",
      }}
      className="item-hover"
    >
      <Avatar
        sx={{
          width: 36,
          height: 36,
          mr: 3.5,
        }}
        src={activity.profile_pic}
      />
      <Box
        sx={{
          fontSize: 14,
          flex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: Fonts.MEDIUM,
              color: (theme) => theme.palette.text.primary,
            }}
          >
            {activity.name}
          </Typography>
          <Box
            sx={{
              color: (theme) => theme.palette.text.secondary,
              ml: "auto",
            }}
          >
            <Typography
              sx={{
                fontSize: 12,
              }}
            >
              {activity.created_at}
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{
            color: (theme) => theme.palette.text.secondary,
            fontSize: 13,
            mb: 1,
          }}
        >
          {activity.message}
        </Typography>
      </Box>
    </Box>
  );
};

export default RecentActivityCell;
