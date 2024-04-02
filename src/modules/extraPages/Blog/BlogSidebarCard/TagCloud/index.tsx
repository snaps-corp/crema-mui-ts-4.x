import { Box, Typography } from "@mui/material";
import { Fonts } from "@crema/constants/AppEnums";
import IntlMessages from "@crema/helpers/IntlMessages";
import { TagType } from "@crema/types/models/extrapages/Blog";

type Props = {
  tag?: TagType[];
};

const TagCloud = ({ tag }: Props) => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Typography
        component="h3"
        sx={{
          mb: 5,
          fontWeight: Fonts.SEMI_BOLD,
          fontSize: 14,
        }}
      >
        <IntlMessages id="extraPages.tagsCloud" />
      </Typography>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            mx: -1,
          }}
        >
          {tag?.map((tag, index) => (
            <Box
              sx={{
                px: 1,
                mb: 2.5,
              }}
              key={index}
            >
              <Box
                sx={{
                  border: (theme) => `solid 1px ${theme.palette.divider}`,
                  borderRadius: 7.5,
                  display: "block",
                  fontSize: 14,
                  color: (theme) => theme.palette.text.secondary,
                  px: 5,
                  pt: 2.25,
                  pb: 2.75,
                }}
                component="span"
              >
                {tag.name}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TagCloud;
