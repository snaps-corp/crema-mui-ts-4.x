import { Box, Typography } from "@mui/material";
import { Fonts } from "@crema/constants/AppEnums";
import { CategoriesType } from "@crema/types/models/extrapages/Blog";

type Props = {
  categories: CategoriesType;
};

const CategoriesItem = ({ categories }: Props) => {
  return (
    <Box
      sx={{
        color: (theme) => theme.palette.text.secondary,
        py: 2.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography>{categories.title}</Typography>
      <Box
        sx={{
          fontWeight: Fonts.MEDIUM,
          ml: 2,
        }}
        component="span"
      >
        {categories.number}
      </Box>
    </Box>
  );
};

export default CategoriesItem;
