import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import AttachmentIcon from "@mui/icons-material/Attachment";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { Box } from "@mui/material";

type Props = {
  item: any;
};
const TaskItem = ({ item }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        borderRadius: 2,
        backgroundColor: item?.priority?.color + "AA",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        justifyContent: "space-between",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          borderRadius: "8px 6px 6px 8px",
          backgroundColor: item?.priority?.color,
          minWidth: 100,
          height: 34,
        }}
      >
        <Box
          sx={{
            pl: 2,
            pr: 4,
            py: 1.5,
            m: 0,
            color: "white",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {item.title}
        </Box>
      </Box>
      <Box sx={{ display: "flex", p: 1 }}>
        {item.hasAttachments ? (
          <Box
            sx={{
              pl: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AttachmentIcon sx={{ fontSize: 16 }} />
          </Box>
        ) : null}
        <Box
          sx={{
            pl: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {item.hasAttachments ? (
            <StarIcon sx={{ fontSize: 14 }} />
          ) : (
            <StarBorderIcon sx={{ fontSize: 14 }} />
          )}
        </Box>
        <Box
          sx={{
            px: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InsertCommentIcon sx={{ fontSize: 14 }} />
          <Box
            sx={{
              fontSize: 14,
              pr: 2,
              pl: 1,
              mb: 1,
            }}
          >
            {item.comments.length}
          </Box>
        </Box>
        <AvatarGroup max={4}>
          <Avatar
            alt={item?.createdBy?.name}
            src={item?.assignedTo?.image}
            sx={{ width: 24, height: 24 }}
          />
          <Avatar
            alt={item?.createdBy?.name}
            src={item?.createdBy?.image}
            sx={{ width: 24, height: 24 }}
          />
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default TaskItem;
