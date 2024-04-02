import Grid from "@mui/material/Grid";
import AppGridContainer from "@crema/components/AppGridContainer";
import AppAnimate from "@crema/components/AppAnimate";
import Introduction from "./Introduction";
import OfficeCultureCard from "./OfficeCultureCard";
import Sections from "./Sections";
import Team from "./Team";
import Clients from "./Clients";
import { aboutUsData } from "@crema/mockapi/fakedb/extraPages";

const AboutUs = () => {
  return (
    <AppAnimate animation="transition.slideUpIn" delay={200}>
      <AppGridContainer>
        <Grid item xs={12} md={6} lg={9}>
          <Introduction introduction={aboutUsData.introduction} />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <OfficeCultureCard officeCulture={aboutUsData.officeCulture} />
        </Grid>
        {aboutUsData.aboutUsSection.map((data, index) => (
          <Grid item xs={12} sm={6} lg={3} key={"section-" + index}>
            <Sections data={data} />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Team team={aboutUsData.team} />
        </Grid>
        <Grid item xs={12}>
          <Clients client={aboutUsData.client} />
        </Grid>
      </AppGridContainer>
    </AppAnimate>
  );
};

export default AboutUs;
