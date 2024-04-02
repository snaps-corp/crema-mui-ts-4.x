import TwoLevelPieChart from "./Components/TwoLevelPieChart";
// import TwoLevelPieChartSource from "raw-loader!./Components/TwoLevelPieChart";
import StraightAnglePieChart from "./Components/StraightAnglePieChart";
// import StraightAnglePieChartSource from "raw-loader!./Components/StraightAnglePieChart";
import TwoSimplePieChart from "./Components/TwoSimplePieChart";
// import TwoSimplePieChartSource from "raw-loader!./Components/TwoSimplePieChart";
import CustomActiveShapePieChart from "./Components/CustomActiveShapePieChart";
// import CustomActiveShapePieChartSource from "raw-loader!./Components/CustomActiveShapePieChart";
import PieChartWithPaddingAngle from "./Components/PieChartWithPaddingAngle";
// import PieChartWithPaddingAngleSource from "raw-loader!./Components/PieChartWithPaddingAngle";
import Grid from "@mui/material/Grid";

import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";

const PieChart = () => {
  return (
    <>
      <AppComponentHeader
        title="Pie Chart"
        refUrl="http://recharts.org/en-US/api/PieChart/"
      />

      <AppGridContainer>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Two Level Pie Chart"
            component={TwoLevelPieChart}
            // source={TwoLevelPieChartSource}
          />
        </Grid>

        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Straight Angle Pie Chart"
            component={StraightAnglePieChart}
            // source={StraightAnglePieChartSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Custom Active Shape Pie Chart"
            component={CustomActiveShapePieChart}
            // source={CustomActiveShapePieChartSource}
          />
        </Grid>

        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Two Simple Pie Chart"
            component={TwoSimplePieChart}
            // source={TwoSimplePieChartSource}
          />
        </Grid>

        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Pie Chart With Padding Angle"
            component={PieChartWithPaddingAngle}
            // source={PieChartWithPaddingAngleSource}
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default PieChart;
