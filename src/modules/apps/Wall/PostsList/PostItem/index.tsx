import AppCard from "@crema/components/AppCard";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Avatar from "@mui/material/Avatar";
import Attachments from "./Attachments";
import PostStats from "./PostStats";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";
import { timeFromNow } from "@crema/helpers/DateHelper";
import { PostObjType, WallDataType } from "@crema/types/models/apps/Wall";

type Props = {
  wallData: WallDataType;
  post: PostObjType;
  setPostList: (data: PostObjType[]) => void;
};

const PostItem = ({ post, wallData, setPostList }: Props) => {
  const { owner, message, date, attachments, comments } = post;

  const getTitle = () => (
    <Box display="flex" alignItems="center">
      <Avatar
        sx={{
          width: 44,
          height: 44,
        }}
        src={owner.profilePic}
      />
      <Box ml={3.5}>
        <Box component="h4" mb={0.5}>
          {owner.name}
        </Box>
        <Box component="p" color="text.secondary" fontSize={14}>
          {timeFromNow(date)}
        </Box>
      </Box>
    </Box>
  );

  return (
    <AppCard
      sxStyle={{
        "&:not(:last-of-type)": {
          marginBottom: 8,
        },
      }}
      title={getTitle()}
      action={
        <IconButton
          sx={{
            padding: 1.5,
          }}
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          size="large"
        >
          <MoreHorizIcon />
        </IconButton>
      }
    >
      {message ? (
        <Box component="p" mb={2} fontSize={14}>
          {message}
        </Box>
      ) : null}
      <Attachments attachments={attachments} />
      <PostStats post={post} setPostList={setPostList} />
      <AddComment
        postId={post.id}
        wallData={wallData}
        setPostList={setPostList}
      />
      {comments.length > 0 && <CommentsList comments={comments} />}
    </AppCard>
  );
};

export default PostItem;
