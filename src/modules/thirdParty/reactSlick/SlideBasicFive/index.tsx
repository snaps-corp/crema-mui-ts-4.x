import Slider from "react-slick";
import SlideItem from "./SlideItem";
import AppCard from "@crema/components/AppCard";
import MediaSlider from "./MediaSlider";
import { SlideBasicType } from "@crema/types/models/thirdParty/reactSlick";

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

interface SlideBasicFiveProps {
  slideBasicFive: SlideBasicType[];
}

const SlideBasicFive: React.FC<SlideBasicFiveProps> = ({ slideBasicFive }) => {
  return (
    <AppCard sxStyle={{ height: "100%" }}>
      <MediaSlider>
        <Slider {...settings}>
          {slideBasicFive.map((slide, index) => (
            <SlideItem key={index} slide={slide} />
          ))}
        </Slider>
      </MediaSlider>
    </AppCard>
  );
};

export default SlideBasicFive;
