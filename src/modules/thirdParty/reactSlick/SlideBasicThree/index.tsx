import Slider from "react-slick";
import AppCard from "@crema/components/AppCard";
import MediaSlider from "./MediaSlider";
import SlideItem from "./SlideItem";
import { SlideBasicType } from "@crema/types/models/thirdParty/reactSlick";

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

interface SlideBasicThreeProps {
  slideBasicThree: SlideBasicType[];
}

const SlideBasicThree: React.FC<SlideBasicThreeProps> = ({
  slideBasicThree,
}) => {
  return (
    <AppCard sxStyle={{ height: "100%" }}>
      <MediaSlider>
        <Slider {...settings}>
          {slideBasicThree.map((slide, index) => (
            <SlideItem key={index} slide={slide} />
          ))}
        </Slider>
      </MediaSlider>
    </AppCard>
  );
};

export default SlideBasicThree;
