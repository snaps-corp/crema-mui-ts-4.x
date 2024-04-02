import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SpeakerNotesOutlinedIcon from "@mui/icons-material/SpeakerNotesOutlined";
import IntlMessages from "@crema/helpers/IntlMessages";
import Box from "@mui/material/Box";
import { Fonts } from "@crema/constants/AppEnums";
import AppCard from "@crema/components/AppCard";
import { SocialDataType } from "@crema/types/models/dashboards/Metrics";

type SocialDataCardPorps = {
  data: SocialDataType;
};

const SocialDataCard: React.FC<SocialDataCardPorps> = ({ data }) => {
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          py: { xs: 4, xl: 8 },
          display: "flex",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            px: 3,
            width: "50%",
            borderRight: 4,
            borderColor: "grey.100",
          }}
        >
          <Box
            sx={{
              color: "secondary.main",
              fontSize: { xs: 24, sm: 30, xl: 36 },
              mb: 2,
            }}
          >
            <FavoriteBorderOutlinedIcon />
          </Box>
          <Box
            component="h3"
            sx={{
              mb: 2,
              fontSize: 20,
              fontWeight: Fonts.MEDIUM,
            }}
          >
            {data.likes}
          </Box>
          <Box
            component="p"
            sx={{
              color: "text.secondary",
              mb: 1,
              fontSize: 14,
              fontWeight: Fonts.REGULAR,
            }}
          >
            <IntlMessages id="common.likes" />
          </Box>
        </Box>

        <Box
          sx={{
            width: "50%",
            px: 3,
          }}
        >
          <Box
            sx={{
              color: "primary.main",
              fontSize: { xs: 24, sm: 30, xl: 36 },
              mb: 2,
            }}
          >
            <SpeakerNotesOutlinedIcon />
          </Box>
          <Box
            component="h3"
            sx={{
              mb: 2,
              fontSize: 20,
              fontWeight: Fonts.MEDIUM,
            }}
          >
            {data.comments}
          </Box>
          <Box
            component="p"
            sx={{
              color: "text.secondary",
              mb: 1,
              fontSize: 14,
              fontWeight: Fonts.REGULAR,
            }}
          >
            <IntlMessages id="common.comments" />
          </Box>
        </Box>
      </Box>
    </AppCard>
  );
};

export default SocialDataCard;
