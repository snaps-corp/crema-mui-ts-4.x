import Slider from "react-slick";
import Box from "@mui/material/Box";
import AppCard from "@crema/components/AppCard";
import SlideItem from "./SlideItem";
import MediaSlider from "./MediaSlider";
import { SlideBasicFourType } from "@crema/types/models/thirdParty/reactSlick";

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

interface SlideBasicFourProps {
  slideBasicFour: SlideBasicFourType[];
}

const SlideBasicDemoFour: React.FC<SlideBasicFourProps> = ({
  slideBasicFour,
}) => {
  return (
    <AppCard>
      <MediaSlider>
        <Slider {...settings}>
          {slideBasicFour.map((slide, index) => (
            <Box key={index}>
              <SlideItem slide={slide} />
            </Box>
          ))}
        </Slider>
      </MediaSlider>
    </AppCard>
  );
};

export default SlideBasicDemoFour;
