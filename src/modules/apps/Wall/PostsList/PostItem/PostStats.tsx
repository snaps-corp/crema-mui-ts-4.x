import Box from "@mui/material/Box";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import { Fonts } from "@crema/constants/AppEnums";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import { putDataApi } from "@crema/hooks/APIHooks";
import { PostObjType } from "@crema/types/models/apps/Wall";

type Props = {
  post: PostObjType;
  setPostList: (data: PostObjType[]) => void;
};

const PostStats = ({ post, setPostList }: Props) => {
  const infoViewActionsContext = useInfoViewActionsContext();

  const toggleLikeStatus = () => {
    putDataApi<PostObjType[]>("/wall/posts", infoViewActionsContext, {
      postId: post.id,
      status: !post.liked,
    })
      .then((data) => {
        setPostList(data);
        infoViewActionsContext.showMessage("Post Updated Successfully!");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  return (
    <Box
      mb={{ xs: 4, xl: 6 }}
      fontWeight={Fonts.MEDIUM}
      color="text.secondary"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
    >
      <Box
        display="flex"
        alignItems="center"
        className="pointer"
        color={post.liked ? "primary.main" : "text.secondary"}
        onClick={toggleLikeStatus}
      >
        <ThumbUpAltOutlinedIcon
          sx={{
            fontSize: 18,
          }}
        />
        <Box fontSize={{ xs: 12, md: 14 }} component="span" ml={1.5}>
          {post.likes} likes
        </Box>
      </Box>
      {post.comments.length > 0 && (
        <Box display="flex" className="pointer" alignItems="center" ml={3}>
          <CommentOutlinedIcon
            sx={{
              fontSize: 18,
            }}
          />
          <Box fontSize={{ xs: 12, md: 14 }} component="span" ml={1.5}>
            {post.comments.length} Comments
          </Box>
        </Box>
      )}
      <Box display="flex" alignItems="center" className="pointer" ml={3}>
        <ShareOutlinedIcon
          sx={{
            fontSize: 18,
          }}
        />
        <Box fontSize={{ xs: 12, md: 14 }} component="span" ml={1.5}>
          {post.shares} Shares
        </Box>
      </Box>
    </Box>
  );
};

export default PostStats;
