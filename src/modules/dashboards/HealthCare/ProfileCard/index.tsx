import AppCard from "@crema/components/AppCard";
import Avatar from "@mui/material/Avatar";
import { alpha, Box } from "@mui/material";

import { styled } from "@mui/material/styles";

const ProfilePic = styled("div")(({ theme }) => {
  return {
    position: "relative",
    border: `solid 2px ${alpha(theme.palette.primary.main, 0.7)}`,
    padding: 4,
    borderRadius: "50%",
    marginBottom: 10,
    marginTop: 10,
    "& .avatar-pic": {
      height: 84,
      width: 84,
    },
  };
});

const ProfileCard = () => {
  return (
    <AppCard>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ProfilePic>
          <Avatar className="avatar-pic" src={"/assets/images/avatar/A5.jpg"} />
        </ProfilePic>
        <Box sx={{ mb: 0.5 }} component="h5">
          Talan Phips
        </Box>
        <Box
          sx={{
            mb: 4,
            fontSize: 12,
            color: "text.secondary",
          }}
        >
          Heart Specialist
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                py: 3.5,
                px: 2,
                width: 1 / 2,
                borderRight: (theme) => `solid 1px ${theme.palette.grey[200]}`,
              }}
            >
              <Box component="h5">24</Box>
              <Box component="p" color="text.secondary">
                Years
              </Box>
            </Box>
            <Box
              sx={{
                py: 3.5,
                px: 2,
                width: 1 / 2,
              }}
            >
              <Box component="h5">A+</Box>
              <Box component="p" sx={{ color: "text.secondary" }}>
                Blood
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              borderTop: (theme) => `solid 1px ${theme.palette.grey[200]}`,
            }}
          >
            <Box
              sx={{
                py: 3.5,
                px: 2,
                width: 1 / 2,
                borderRight: (theme) => `solid 1px ${theme.palette.grey[200]}`,
              }}
            >
              <Box component="h5">185 cm</Box>
              <Box component="p" sx={{ color: "text.secondary" }}>
                Height
              </Box>
            </Box>
            <Box
              sx={{
                py: 3.5,
                px: 2,
                width: 1 / 2,
              }}
            >
              <Box component="h5">84 kg</Box>
              <Box component="p" sx={{ color: "text.secondary" }}>
                Weight
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </AppCard>
  );
};

export default ProfileCard;
