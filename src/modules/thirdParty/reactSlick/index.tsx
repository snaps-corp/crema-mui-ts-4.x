import Grid from "@mui/material/Grid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";
import ProfileSlider from "./ProfileSlider";
import SlideBasic from "./SlideBasic";
import SlideBasicTwo from "./SlideBasicTwo";
import SlideBasicThree from "./SlideBasicThree";
import SlideBasicArrow from "./SlideBasicArrow";
import SlideBasicFour from "./SlideBasicFour";
import SlideBasicFive from "./SlideBasicFive";
import { reactSlickData } from "@crema/mockapi/fakedb";

const ReactSlick = () => {
  return (
    <>
      <AppComponentHeader
        title="React Slick"
        refUrl="https://react-slick.neostack.com/"
      />

      <AppGridContainer>
        <Grid item xs={12} sm={6}>
          <SlideBasic slideBasic={reactSlickData.slideBasic} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SlideBasicArrow slideBasicArrow={reactSlickData.slideBasicArrow} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SlideBasicTwo slideBasicTwo={reactSlickData.slideBasicTwo} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SlideBasicThree slideBasicThree={reactSlickData.slideBasicThree} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SlideBasicFour slideBasicFour={reactSlickData.slideBasicFour} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SlideBasicFive slideBasicFive={reactSlickData.slideBasicFive} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ProfileSlider profile={reactSlickData.profileSlide} />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default ReactSlick;
