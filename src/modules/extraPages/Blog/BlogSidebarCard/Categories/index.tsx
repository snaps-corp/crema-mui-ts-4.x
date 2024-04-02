import { Box, Typography } from "@mui/material";
import CategoriesItem from "./CategoriesItem";
import { Fonts } from "@crema/constants/AppEnums";
import IntlMessages from "@crema/helpers/IntlMessages";
import AppList from "@crema/components/AppList";
import { CategoriesType } from "@crema/types/models/extrapages/Blog";

type Props = {
  categories?: CategoriesType[];
};

const Categories = ({ categories }: Props) => {
  return (
    <Box
      sx={{
        mb: 5.5,
        pb: 5,
        borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
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
        <IntlMessages id="dashboard.categories" />
      </Typography>
      <Box
        sx={{
          position: "relative",
        }}
      >
        {categories && (
          <AppList
            data={categories}
            renderRow={(categories, index) => (
              <CategoriesItem key={index} categories={categories} />
            )}
          />
        )}
      </Box>
    </Box>
  );
};

export default Categories;
