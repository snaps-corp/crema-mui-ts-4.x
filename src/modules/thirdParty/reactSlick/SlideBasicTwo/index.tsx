import Slider from "react-slick";
import AppCard from "@crema/components/AppCard";
import SlideItem from "./SlideItem";
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

interface SlideBasicTwoProps {
  slideBasicTwo: SlideBasicType[];
}

const SlideBasicTwo: React.FC<SlideBasicTwoProps> = ({ slideBasicTwo }) => {
  return (
    <AppCard sxStyle={{ height: "100%" }}>
      <MediaSlider>
        <Slider {...settings}>
          {slideBasicTwo.map((slide, index) => (
            <SlideItem key={index} slide={slide} />
          ))}
        </Slider>
      </MediaSlider>
    </AppCard>
  );
};

export default SlideBasicTwo;
