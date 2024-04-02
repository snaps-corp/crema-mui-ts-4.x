import { Box, Typography } from "@mui/material";
import { Fonts } from "@crema/constants/AppEnums";
import { StoryType } from "@crema/types/models/dashboards/Crypto";

type Props = {
  stories: StoryType;
};
const StoriesItem = ({ stories }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          mr: 4,
          maxWidth: 60,
          minWidth: 60,
          maxHeight: 60,
          "& img": {
            borderRadius: 2,
            display: "block",
            objectFit: "cover",
            width: "100%",
          },
        }}
      >
        <img src={stories.srcImg} alt="stories" />
      </Box>
      <Box>
        <Typography
          component="h5"
          sx={{
            fontWeight: Fonts.MEDIUM,
            mb: 0.5,
            fontSize: 14,
          }}
        >
          {stories.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            color: "text.secondary",
            fontSize: 12,
            fontWeight: Fonts.MEDIUM,
          }}
        >
          <Box component="span" sx={{ mr: 1 }}>
            {stories.tag}
          </Box>
          <Box component="span" sx={{ mr: 1 }}>
            .
          </Box>
          <Box component="span">{stories.time}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StoriesItem;
