import { Box, Grid, Typography } from "@mui/material";
import AppGridContainer from "@crema/components/AppGridContainer";
import IntlMessages from "@crema/helpers/IntlMessages";
import Button from "@mui/material/Button";
import { Fonts } from "@crema/constants/AppEnums";
import { ProjectDescriptionType } from "@crema/types/models/extrapages/Portfolio";

type Props = {
  projectDescription: ProjectDescriptionType;
};

const ProjectDescription = ({ projectDescription }: Props) => {
  return (
    <Box
      sx={{
        position: "relative",
        px: 7.5,
      }}
    >
      <Box
        sx={{
          mb: { xs: 7.5, md: 15 },
          pb: { xs: 7.5, md: 15 },
          borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
        }}
      >
        <AppGridContainer>
          <Grid item xs={12} md={4}>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: 18, md: 20 },
                fontWeight: Fonts.BOLD,
                mb: { xs: 2, md: 3.5 },
              }}
            >
              <IntlMessages id="extraPages.projectDescription" />
            </Typography>
            <Box sx={{ md: 2 }}>
              {projectDescription.service.map((service, index) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: (theme) =>
                      `solid 1px ${theme.palette.divider}`,
                  }}
                  key={index}
                >
                  <Box
                    sx={{
                      py: { xs: 2, md: 3.5 },
                      minWidth: { xs: 150, lg: 100, xl: 150 },
                      fontWeight: Fonts.SEMI_BOLD,
                      textTransform: "uppercase",
                    }}
                    component="span"
                  >
                    {service.title}
                  </Box>
                  <Box
                    sx={{
                      py: { xs: 2, md: 3.5 },
                      fontWeight: Fonts.MEDIUM,
                      color: (theme) => theme.palette.text.secondary,
                      flex: 1,
                    }}
                    component="span"
                  >
                    {service.subTitle}
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              component="h4"
              sx={{
                fontSize: 16,
                fontWeight: Fonts.SEMI_BOLD,
                mb: { xs: 3, md: 5 },
                textTransform: "uppercase",
              }}
            >
              <IntlMessages id="extraPages.sbonTimelessStaplesIdentity" />
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                flexWrap: "wrap",
                mx: { xs: -3.5, lg: -5, xl: -7.5 },
              }}
            >
              {projectDescription.content.map((data, index) => (
                <Typography
                  sx={{
                    fontSize: 12,
                    mb: { xs: 3, md: 5 },
                    px: { xs: 3.5, lg: 5, xl: 7.5 },
                    width: { xs: "100%", md: "50%" },
                    color: (theme) => theme.palette.text.secondary,
                  }}
                  key={index}
                >
                  {data.line}
                </Typography>
              ))}
            </Box>
            <Button
              variant="text"
              sx={{
                textTransform: "uppercase",
                boxShadow: "none",
                textDecoration: "underline",
                "&:hover, &:focus": {
                  textDecoration: "none",
                },
              }}
            >
              YourDomin.com
            </Button>
          </Grid>
        </AppGridContainer>
      </Box>
    </Box>
  );
};

export default ProjectDescription;
