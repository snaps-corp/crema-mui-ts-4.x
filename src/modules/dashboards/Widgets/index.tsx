import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import IntlMessages from "@crema/helpers/IntlMessages";
import Box from "@mui/material/Box";
import { blue, indigo } from "@mui/material/colors";
import { Fonts } from "@crema/constants/AppEnums";
import AppAnimate from "@crema/components/AppAnimate";
import AppLoader from "@crema/components/AppLoader";
import { useGetDataApi } from "@crema/hooks/APIHooks";
import WallPaper from "./WallPaper";
import TemperatureCard from "./TemperatureCard";
import VisitorAnalysis from "./VisitorAnalysis";
import BirthdayCard from "./BirthdayCard";
import RecentActivity from "./RecentActivity";
import IllustrationDesign from "./IllustrationDesign";
import Categories from "./Categories";
import Header from "./Header";
import Subscribe from "./Subscribe";
import Profile from "./Profile";
import Messages from "./Messages";
import TaskList from "./TaskList";
import HollywoodMovie from "./HollywoodMovie";
import Colors from "./Colors";
import AddTags from "./AddTags";
import Reviews from "./Reviews";
import CremaCard from "./CremaCard";
import Formats from "./Formats";
import Price from "./Price";
import CityInfo from "./CityInfo";
import DateSelector from "./DatePicker";
import type { WidgetsType } from "@crema/types/models/dashboards/Widgets";

const Widgets = () => {
  const [{ apiData: widgetsData, loading }] =
    useGetDataApi<WidgetsType>("/dashboard/widgets");

  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <AppAnimate animation="transition.slideUpIn" delay={200}>
          <>
            <Box
              component="h3"
              sx={{
                color: "text.primary",
                mb: { xs: 4, sm: 4, xl: 6 },
                fontSize: 16,
                fontWeight: Fonts.BOLD,
              }}
            >
              <IntlMessages id="dashboard.widgets" />
            </Box>

            <AppGridContainer>
              <Grid item xs={12} md={6}>
                <WallPaper />
              </Grid>

              <Grid item xs={12} md={6}>
                <HollywoodMovie />
              </Grid>

              <Grid item xs={12} md={4}>
                <IllustrationDesign />
              </Grid>

              <Grid item xs={12} md={4}>
                <CityInfo cityData={widgetsData.cityData} />
              </Grid>

              <Grid item xs={12} md={4}>
                <Categories data={widgetsData.categories} />
              </Grid>

              <Grid item xs={12} md={7}>
                <Header />
              </Grid>

              <Grid item xs={12} md={5}>
                <Subscribe />
              </Grid>

              <Grid item xs={12} md={4}>
                <Profile data={widgetsData.profile} />
              </Grid>

              <Grid item xs={12} md={4}>
                <Messages data={widgetsData.messages} />
              </Grid>

              <Grid item xs={12} md={4}>
                <TaskList data={widgetsData.taskList} />
              </Grid>

              <Grid item xs={12} md={3}>
                <Colors data={widgetsData.colorsList} />
              </Grid>

              <Grid item xs={12} md={5}>
                <Reviews data={widgetsData.reviewsList} />
              </Grid>

              <Grid item xs={12} md={4}>
                <AppGridContainer>
                  <Grid item xs={12} md={12}>
                    <AddTags data={widgetsData.tagsList} />
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <Price />
                  </Grid>
                </AppGridContainer>
              </Grid>

              <Grid item xs={12} md={4}>
                <CremaCard
                  data={widgetsData.mateInfo.facebookInfo}
                  bgColor={indigo[600]}
                  color="white"
                  icon={
                    <Box
                      sx={{
                        "& svg": {
                          color: "white",
                          cursor: "pointer",
                        },
                      }}
                    >
                      <FiFacebook />
                    </Box>
                  }
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <CremaCard
                  data={widgetsData.mateInfo.twitterInfo}
                  bgColor={blue[600]}
                  color="white"
                  icon={
                    <Box
                      sx={{
                        "& svg": {
                          color: "white",
                          cursor: "pointer",
                        },
                      }}
                    >
                      <FiTwitter />
                    </Box>
                  }
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <Formats data={widgetsData.formatList} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TemperatureCard temperatures={widgetsData.temperatures} />
              </Grid>

              <Grid item xs={12} md={4}>
                <DateSelector />
              </Grid>

              <Grid item xs={12} md={4}>
                <VisitorAnalysis />
              </Grid>

              <Grid item xs={12} md={4}>
                <BirthdayCard />
              </Grid>

              <Grid item xs={12} md={4}>
                <RecentActivity data={widgetsData.recentActivity} />
              </Grid>
            </AppGridContainer>
          </>
        </AppAnimate>
      )}
    </>
  );
};

export default Widgets;
