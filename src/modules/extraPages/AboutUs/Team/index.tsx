import MemberItem from "./MemberItem";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import MediaSlider from "./MediaSlider";
import AppCard from "@crema/components/AppCard";
import { useIntl } from "react-intl";
import { Fonts } from "@crema/constants/AppEnums";
import { TeamData } from "@crema/mockapi/fakedb/extraPages";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 2,

  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
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

type TeamProps = {
  team: TeamData[];
};

const Team = ({ team }: TeamProps) => {
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages["extraPages.team"] as string}
      titleStyle={{ fontWeight: Fonts.BOLD, fontSize: { xs: 18, md: 20 } }}
    >
      <MediaSlider>
        <Slider {...settings}>
          {team.map((member) => {
            return (
              <Box key={member.id} sx={{ px: 2.5 }}>
                <MemberItem member={member} />
              </Box>
            );
          })}
        </Slider>
      </MediaSlider>
    </AppCard>
  );
};

export default Team;
