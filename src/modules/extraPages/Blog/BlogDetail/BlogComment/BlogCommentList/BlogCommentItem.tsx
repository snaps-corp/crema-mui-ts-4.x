import { Avatar, Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Fonts } from "@crema/constants/AppEnums";
import IntlMessages from "@crema/helpers/IntlMessages";
import type { BlogCommentType } from "@crema/types/models/extrapages/Blog";

type Props = {
  comment: BlogCommentType;
};

const BlogCommentItem = ({ comment }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box sx={{ mr: 4 }}>
        <Avatar
          sx={{ width: { md: 50 }, height: { md: 50 } }}
          src={comment.image}
          alt={comment.name}
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: { xs: 2, md: 3 },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              component="h5"
              sx={{
                fontSize: 16,
                fontWeight: Fonts.SEMI_BOLD,
                mb: 0.5,
              }}
            >
              {comment.name}
            </Typography>
            <Box
              component="span"
              sx={{
                fontSize: 11,
                fontWeight: Fonts.MEDIUM,
                color: (theme) => theme.palette.text.secondary,
              }}
            >
              {comment.duration}
            </Box>
          </Box>
          <Box sx={{ ml: 2 }}>
            <Button
              variant="outlined"
              sx={{
                textTransform: "uppercase",
                pt: 0.25,
                pb: 0.75,
              }}
            >
              <IntlMessages id="common.reply" />
            </Button>
          </Box>
        </Box>
        <Typography sx={{ color: (theme) => theme.palette.text.secondary }}>
          {comment.comment}
        </Typography>
      </Box>
    </Box>
  );
};

export default BlogCommentItem;
