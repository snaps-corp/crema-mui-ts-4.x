import Box from "@mui/material/Box";
import { NotificationType } from "@crema/types/models/dashboards/HealthCare";
import { Fonts } from "@crema/constants/AppEnums";

type Props = {
  notification: NotificationType;
};

const NotificationCell = ({ notification }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        padding: "12px 20px",
      }}
      className="item-hover"
    >
      <Box
        sx={{
          mr: 4,
          mt: 1.5,
          height: 10,
          minWidth: 10,
          borderRadius: "50%",
          backgroundColor: notification.color,
        }}
      />
      <Box sx={{ fontSize: 14 }}>
        <Box
          component="h5"
          sx={{
            fontWeight: Fonts.MEDIUM,
            mb: 0.5,
          }}
        >
          {notification.title}
        </Box>
        <Box
          component="span"
          sx={{
            color: "text.secondary",
          }}
        >
          {notification.time}
        </Box>
      </Box>
    </Box>
  );
};

export default NotificationCell;
