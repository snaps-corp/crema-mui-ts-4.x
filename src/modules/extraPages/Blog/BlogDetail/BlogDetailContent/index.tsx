import Box from "@mui/material/Box";
import { Typography, useTheme } from "@mui/material";
import { Fonts } from "@crema/constants/AppEnums";
import { AiFillHeart } from "react-icons/ai";
import Tag from "../../BlogContent/Tag";
import BlogPost from "./BlogPost";
import Social from "./Social";
import AppCardMedia from "@crema/components/AppCard/AppCardMedia";
import type { BlogDetailContentType } from "@crema/types/models/extrapages/Blog";

type Props = {
  blogDetailContent?: BlogDetailContentType;
};

const BlogDetailContent = ({ blogDetailContent }: Props) => {
  const theme = useTheme();

  return (
    <AppCardMedia
      sxStyle={{
        color: theme.palette.text.secondary,
        mb: { xs: 5, md: 7.5 },
      }}
      cardMedia={blogDetailContent?.cardMedia}
    >
      <Typography sx={{ mb: 7.5 }}>{blogDetailContent?.description}</Typography>
      <Box>
        <div
          dangerouslySetInnerHTML={{ __html: `${blogDetailContent?.content}` }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3.5,
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Tag tag={blogDetailContent?.tag} />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            ml: 2,
            mb: 3.5,
            color: theme.palette.error.light,
            border: `solid 1px ${theme.palette.error.light}`,
            borderRadius: 1,
            py: 1.5,
            px: 3,
            fontSize: 12,
            fontWeight: Fonts.SEMI_BOLD,
            cursor: "pointer",
            "& svg": {
              mr: 1,
              display: "block",
              mt: 1,
            },
          }}
        >
          <AiFillHeart /> {blogDetailContent?.likeCount} Likes
        </Box>
      </Box>

      <Box sx={{ mb: { xs: 5, sm: 7, md: 10, lg: 15 } }}>
        <BlogPost post={blogDetailContent?.post} />
      </Box>

      <Box
        sx={{
          mb: { xs: 2, sm: 4, md: 8, lg: 10 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Social />
      </Box>
    </AppCardMedia>
  );
};

export default BlogDetailContent;
