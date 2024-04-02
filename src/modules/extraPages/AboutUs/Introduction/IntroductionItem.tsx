import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Fonts } from "@crema/constants/AppEnums";
import { IntroDuctioListnData } from "@crema/mockapi/fakedb/extraPages";

type IntroductionProps = {
  data: IntroDuctioListnData;
};

const IntroductionItem = ({ data }: IntroductionProps) => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box sx={{ mr: 5 }}>
        <img style={{ minWidth: 34 }} src={data.icon} alt="icon" />
      </Box>
      <Box>
        <Typography
          component="h4"
          variant="h4"
          sx={{ fontWeight: Fonts.SEMI_BOLD, fontSize: 16, mb: 2.5 }}
        >
          {data.title}
        </Typography>
        <Typography
          sx={{
            mb: {
              xs: 2,
              md: 3,
              color: (theme) => theme.palette.text.secondary,
            },
          }}
        >
          {data.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default IntroductionItem;

IntroductionItem.propTypes = {
  data: PropTypes.object,
};
