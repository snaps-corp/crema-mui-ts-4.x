import Typography from "@mui/material/Typography";
import { Fonts } from "@crema/constants/AppEnums";
import AppCardMedia from "@crema/components/AppCard/AppCardMedia";
import { TeamData } from "@crema/mockapi/fakedb/extraPages";

type MemberItemProps = {
  member: TeamData;
};

const MemberItem = ({ member }: MemberItemProps) => {
  return (
    <AppCardMedia
      cardMedia={member.srcImg}
      sxStyle={{
        boxShadow: "0px 6px 10px rgba(160, 165, 185, 0.1)",
        borderRadius: 1,
        border: (theme: any) => `solid 1px ${theme.palette.divider}`,
      }}
    >
      <Typography
        component="h5"
        sx={{
          mb: 1,
          fontWeight: Fonts.SEMI_BOLD,
          fontSize: { xs: 16, md: 18 },
        }}
      >
        {member.name}
      </Typography>
      <Typography
        sx={{
          fontWeight: Fonts.MEDIUM,
          color: (theme) => theme.palette.text.secondary,
        }}
      >
        {member.position}
      </Typography>
    </AppCardMedia>
  );
};

export default MemberItem;
