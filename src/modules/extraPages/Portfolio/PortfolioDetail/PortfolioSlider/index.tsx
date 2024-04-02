import MediaSlider from "./MediaSlider";
import Slider, { Settings } from "react-slick";
import Box from "@mui/material/Box";
import { SlideType } from "@crema/types/models/extrapages/Portfolio";

const settings: Settings = {
  infinite: true,
  speed: 500,
  dots: false,
  centerMode: true,
  centerPadding: "160px",
  slidesToShow: 1,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1536,
      settings: {
        centerMode: true,
        centerPadding: "160px",
      },
    },
    {
      breakpoint: 1200,
      settings: {
        centerMode: true,
        centerPadding: "100px",
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "60px",
      },
    },
    {
      breakpoint: 700,
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

type Props = {
  slide: SlideType[];
};

const PortfolioSlider = ({ slide }: Props) => {
  return (
    <MediaSlider>
      <Slider {...settings}>
        {slide.map((data, index) => (
          <Box
            key={index}
            sx={{
              "& img": {
                width: "100%",
              },
            }}
          >
            <img src={data.srcImg} alt="slide" />
          </Box>
        ))}
      </Slider>
    </MediaSlider>
  );
};

export default PortfolioSlider;
