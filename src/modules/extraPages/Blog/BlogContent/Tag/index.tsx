import Box from "@mui/material/Box";
import { Fonts } from "@crema/constants/AppEnums";
import type { TagType } from "@crema/types/models/extrapages/Blog";

type Props = {
  tag?: TagType[];
};

const Tag = ({ tag }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        mx: -0.75,
      }}
    >
      {tag?.map((tag, index) => (
        <Box
          sx={{
            px: 0.75,
            mb: 1.5,
          }}
          key={index}
        >
          <Box
            sx={{
              border: (theme) => `solid 1px ${theme.palette.divider}`,
              borderRadius: 1,
              display: "block",
              fontSize: 12,
              fontWeight: Fonts.MEDIUM,
              color: (theme) => theme.palette.text.secondary,
              px: 4,
              pt: 1.25,
              pb: 1.75,
            }}
            component="span"
          >
            {tag.name}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Tag;
