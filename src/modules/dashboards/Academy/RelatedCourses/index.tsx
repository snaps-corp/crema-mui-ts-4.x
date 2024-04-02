import AppCard from "@crema/components/AppCard";
import Slider from "react-slick";
import CourseItem from "./CourseItem";
import CourseSlider from "./CourseSlider";
import { RelatedCourseType } from "@crema/types/models/dashboards/Academy";
import IntlMessages from "@crema/helpers/IntlMessages";

type Props = {
  relatedCourses: RelatedCourseType[];
};
const RelatedCourses = ({ relatedCourses }: Props) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={<IntlMessages id="academy.relatedCourses" />}
    >
      <CourseSlider>
        <Slider className="slideRoot" {...settings}>
          {relatedCourses.map((data, index) => (
            <CourseItem key={index} data={data} />
          ))}
        </Slider>
      </CourseSlider>
    </AppCard>
  );
};

export default RelatedCourses;
