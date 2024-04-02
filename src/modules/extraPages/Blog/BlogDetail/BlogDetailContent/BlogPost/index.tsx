import { Avatar, Box, Typography } from "@mui/material";
import { Fonts } from "@crema/constants/AppEnums";
import Button from "@mui/material/Button";
import type { PostType } from "@crema/types/models/extrapages/Blog";

type Props = {
  post?: PostType;
};

const BlogPost = ({ post }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        border: (theme) => `solid 1px ${theme.palette.divider}`,
        borderRadius: 1,
        py: { xs: 5, lg: 7.5 },
        pr: { xs: 5, lg: 7.5 },
        pl: { xs: 5, lg: 7.5, xl: 15 },
      }}
    >
      <Box
        sx={{
          mr: { xs: 5, md: 7.5, xl: 15 },
          minWidth: 80,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ mb: { xs: 2, md: 4 } }}>
          <Avatar
            sx={{
              width: { xs: 40, md: 60, lg: 80 },
              height: { xs: 40, md: 60, lg: 80 },
            }}
            src={post?.user}
          />
        </Box>
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: Fonts.SEMI_BOLD,
            color: (theme) => theme.palette.text.primary,
            mb: 1,
          }}
          component="h6"
        >
          {post?.userName}
        </Typography>
        <Typography
          sx={{
            fontSize: 12,
            color: (theme) => theme.palette.text.secondary,
          }}
        >
          {post?.userPosition}
        </Typography>
      </Box>
      <Box
        sx={{
          color: (theme) => theme.palette.text.secondary,
        }}
      >
        <Typography sx={{ mb: 3 }}>{post?.description}</Typography>
        <Button
          variant="text"
          sx={{
            fontSize: 14,
            fontWeight: Fonts.SEMI_BOLD,
            color: (theme) => theme.palette.text.primary,
            textDecoration: "underline",
            textTransform: "uppercase",
            boxShadow: "none",
          }}
        >
          All author posts
        </Button>
      </Box>
    </Box>
  );
};

export default BlogPost;
