import React from "react";
import Box from "@mui/material/Box";
import { Avatar, IconButton, Typography } from "@mui/material";
import { AiFillHeart } from "react-icons/ai";
import Tag from "../Tag";
import { Fonts } from "@crema/constants/AppEnums";
import AppCardMedia from "@crema/components/AppCard/AppCardMedia";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import type { BlogContentType } from "@crema/types/models/extrapages/Blog";

type Props = {
  blog: BlogContentType;
  onViewBlogDetail: (blog: BlogContentType, isEdit?: boolean) => void;
};

const BlogCard = ({ blog, onViewBlogDetail }: Props) => {
  const [isLabelOpen, onOpenLabel] = React.useState<null | HTMLElement>(null);

  const onLabelOpen = (event: React.MouseEvent<HTMLElement>) => {
    onOpenLabel(event.currentTarget);
  };

  const onLabelClose = () => {
    onOpenLabel(null);
  };

  return (
    <AppCardMedia
      sxStyle={{ height: "100%", position: "relative" }}
      cardMedia={blog.blogDetailContent.cardMedia}
      cardMediaAction={blog.cardMediaAction}
      sxCardMediaAction={{ mr: 3 }}
      // onClick={() => onViewBlogDetail(blog)}
    >
      <Box sx={{ position: "absolute", top: 10, right: 0 }}>
        <IconButton
          style={{ height: 30, width: 30 }}
          aria-label="more"
          onClick={onLabelOpen}
          size="large"
        >
          <MoreVertIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            fontSize: 12,
            fontWeight: Fonts.MEDIUM,
            color: (theme) => theme.palette.primary.main,
            mb: 2.5,
            display: "block",
          }}
          component="span"
        >
          {blog.duration}
        </Box>
        <Typography
          sx={{
            fontWeight: Fonts.MEDIUM,
            mb: 4,
          }}
          component="h3"
        >
          {blog.blogDetailContent.title}
        </Typography>
        <Typography
          sx={{
            color: (theme) => theme.palette.text.secondary,
            mb: 4,
            fontSize: 12,
          }}
        >
          {blog.blogDetailContent.description}
        </Typography>
        {blog.blogDetailContent.tag ? (
          <Box sx={{ mb: 4 }}>
            <Tag tag={blog.blogDetailContent.tag} />
          </Box>
        ) : null}
        <Box
          sx={{
            mt: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ mr: 2 }}>
              <Avatar
                sx={{
                  width: 30,
                  height: 30,
                }}
                src={blog.blogDetailContent.post.user}
                alt={blog.blogDetailContent.post.userName}
              />
            </Box>
            <Box component="span" sx={{ fontSize: 12 }}>
              By {blog.blogDetailContent.post.userName}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ml: 2,
              color: (theme) => theme.palette.error.light,
              fontSize: 12,
              fontWeight: Fonts.SEMI_BOLD,
              "& svg": {
                mr: 1,
                display: "block",
                mt: 1,
              },
            }}
          >
            <AiFillHeart /> {blog.blogDetailContent.likeCount}
          </Box>
        </Box>
      </Box>
      <Menu
        anchorEl={isLabelOpen}
        keepMounted
        elevation={0}
        open={Boolean(isLabelOpen)}
        onClose={onLabelClose}
      >
        <MenuItem value={311} onClick={() => onViewBlogDetail(blog)}>
          View Blog
        </MenuItem>
        <MenuItem value={312} onClick={() => onViewBlogDetail(blog, true)}>
          Edit Blog
        </MenuItem>
      </Menu>
    </AppCardMedia>
  );
};

export default BlogCard;
