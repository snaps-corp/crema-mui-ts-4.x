import AppCard from "@crema/components/AppCard";
import Slider from "react-slick";
import ProfileItem from "./ProfileItem";
import MediaSlider from "./MediaSlider";
import { ProfileSlideType } from "@crema/types/models/thirdParty/reactSlick";

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

interface ProfileSliderProps {
  profile: ProfileSlideType[];
}

const ProfileSlider: React.FC<ProfileSliderProps> = ({ profile }) => {
  return (
    <AppCard
      sxStyle={{
        height: "100%",
      }}
    >
      <MediaSlider>
        <Slider {...settings}>
          {profile.map((profile, index) => {
            return <ProfileItem key={index} profile={profile} />;
          })}
        </Slider>
      </MediaSlider>
    </AppCard>
  );
};

export default ProfileSlider;
