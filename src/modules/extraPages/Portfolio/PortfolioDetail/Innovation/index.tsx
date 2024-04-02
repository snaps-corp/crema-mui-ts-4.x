import { Box, Grid, Typography } from "@mui/material";
import AppGridContainer from "@crema/components/AppGridContainer";
import { Fonts } from "@crema/constants/AppEnums";
import Button from "@mui/material/Button";
import InnovationImgWrapper from "./InnovationImgWrapper";
import type { InnovationType } from "@crema/types/models/extrapages/Portfolio";

type Props = {
  innovation: InnovationType;
};
const Innovation = ({ innovation }: Props) => {
  return (
    <Box
      sx={{
        mb: { xs: 7.5, md: 15 },
        px: { xs: 7.5, md: 15, lg: 20 },
      }}
    >
      <AppGridContainer
        sx={{
          alignItems: "center",
        }}
      >
        <Grid item xs={12} md={6}>
          <InnovationImgWrapper>
            <img src={innovation.srcImg} alt="innovation" />
            <Box className="innovation-img-content">
              <Typography
                component="h5"
                sx={{
                  fontSize: 12,
                  fontWeight: Fonts.SEMI_BOLD,
                  textTransform: "uppercase",
                  mb: 1.5,
                }}
              >
                {innovation.brandSubTitle}
              </Typography>
              <Typography
                component="h3"
                sx={{
                  fontSize: { xs: 18, md: 20, lg: 22 },
                  fontWeight: Fonts.BOLD,
                  textTransform: "uppercase",
                }}
              >
                {innovation.brandTitle}
              </Typography>
            </Box>
          </InnovationImgWrapper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              maxWidth: { lg: 400 },
              ml: { lg: 7.5 },
            }}
          >
            <Typography
              component="h5"
              sx={{
                fontSize: { xs: 18, md: 20 },
                fontWeight: Fonts.BOLD,
                mb: 5,
              }}
            >
              {innovation.title}
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                color: (theme) => theme.palette.text.secondary,
                mb: { xs: 5, md: 7.5 },
              }}
            >
              {innovation.description}
            </Typography>
            <Button variant="contained">Explore Website</Button>
          </Box>
        </Grid>
      </AppGridContainer>
    </Box>
  );
};

export default Innovation;
