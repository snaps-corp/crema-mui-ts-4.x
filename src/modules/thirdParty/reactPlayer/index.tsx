import Grid from "@mui/material/Grid";

import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";
import DailyMotion from "./DailyMotion";

// import DailyMotionSource from "raw-loader!./DailyMotion";
import Facebook from "./Facebook";

// import FacebookSource from "raw-loader!./Facebook";
import Mixcloud from "./Mixcloud";

// import MixcloudSource from "raw-loader!./Mixcloud";
import SoundCloud from "./SoundCloud";

// import SoundCloudSource from "raw-loader!./SoundCloud";
import Streamable from "./Streamable";

// import StreamableSource from "raw-loader!./Streamable";
import Twitch from "./Twitch";

// import TwitchSource from "raw-loader!./Twitch";
import Vimeo from "./Vimeo";

// import VimeoSource from "raw-loader!./Vimeo";
import Wistia from "./Wistia";

// import WistiaSource from "raw-loader!./Wistia";
import YouTube from "./YouTube";

// import YouTubeSource from "raw-loader!./YouTube";

const ReactPlayer = () => {
  return (
    <>
      <AppComponentHeader
        title="ReactPlayer"
        description="A React component for playing a variety of URLs, including file paths, YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, and DailyMotion."
        refUrl="https://cookpete.com/react-player/"
      />

      <AppGridContainer>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="YouTube"
            component={YouTube}
            // source={YouTubeSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Facebook"
            component={Facebook}
            // source={FacebookSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Vimeo"
            component={Vimeo}
            // source={VimeoSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Daily Motion"
            component={DailyMotion}
            // source={DailyMotionSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Sound Cloud"
            component={SoundCloud}
            // source={SoundCloudSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Streamable"
            component={Streamable}
            // source={StreamableSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Twitch"
            component={Twitch}
            // source={TwitchSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Wistia"
            component={Wistia}
            // source={WistiaSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Mixcloud"
            component={Mixcloud}
            // source={MixcloudSource}
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default ReactPlayer;
