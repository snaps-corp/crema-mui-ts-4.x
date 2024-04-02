import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";
import { MemberType } from "@crema/types/models/apps/ScrumbBoard";

type Props = {
  members: MemberType[];
};

const Members = (props: Props) => {
  const { members } = props;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {members.map((member) => {
        return (
          <Tooltip title={member.name} key={member.id}>
            {member.image ? (
              <Avatar
                sx={{
                  width: 35,
                  height: 35,
                  mr: 2,
                }}
                src={member.image}
                alt="created"
              />
            ) : (
              <Avatar
                sx={{
                  width: 35,
                  height: 35,
                  mr: 2,
                }}
              >
                {member.name.toUpperCase()}
              </Avatar>
            )}
          </Tooltip>
        );
      })}
    </Box>
  );
};

export default Members;
