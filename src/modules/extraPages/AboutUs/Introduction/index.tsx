import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IntroductionItem from "./IntroductionItem";
import { alpha } from "@mui/material";
import { Fonts } from "@crema/constants/AppEnums";
import Box from "@mui/material/Box";
import { IntroDuctionData } from "@crema/mockapi/fakedb/extraPages";

type IntroductionProps = {
  introduction: IntroDuctionData;
};

const Introduction = ({ introduction }: IntroductionProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        height: "100%",
        backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.11),
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: { xs: "100%", lg: "50%" } }}
        image={introduction.srcImg}
        alt="introduction"
      />
      <CardContent
        sx={{
          width: { xs: "100%", lg: "50%" },
          p: { xs: 5, sm: 7.5, lg: 10, xl: 15 },
        }}
      >
        <Box sx={{ mb: { xs: 5, sm: 8, md: 5, lg: 12, xl: 15 } }}>
          <Typography
            component="h5"
            color="primary.main"
            sx={{ fontSize: 16, fontWeight: Fonts.SEMI_BOLD, mb: 2.5 }}
          >
            {introduction.subTitle}
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: Fonts.BOLD,
              fontSize: { xs: 20, sm: 24, md: 22, lg: 28, xl: 30 },
            }}
          >
            {introduction.title}
          </Typography>
        </Box>
        <Box
          sx={{
            "& .introduction-item": {
              mb: { xs: 3, sm: 6, md: 3, lg: 8, xl: 10 },
              "&:not(:last-of-type)": {
                mb: { xs: 5, sm: 8, md: 4, lg: 10, xl: 12 },
              },
            },
          }}
        >
          {introduction.introductionList.map((introduction, index) => (
            <Box className="introduction-item" key={index}>
              <IntroductionItem data={introduction} />
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Introduction;
