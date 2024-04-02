import SimpleAreaChart from "./Components/SimpleAreaChart";
// import SimpleAreaChartSource from "raw-loader!./Components/SimpleAreaChart";
import StackedAreaChart from "./Components/StackedAreaChart";
// import StackedAreaChartSource from "raw-loader!./Components/StackedAreaChart";
import PercentAreaChart from "./Components/PercentAreaChart";
// import PercentAreaChartSource from "raw-loader!./Components/PercentAreaChart";
import AreaChartConnectNulls from "./Components/AreaChartConnectNulls";
// import AreaChartConnectNullsSource from "raw-loader!./Components/AreaChartConnectNulls";
import SynchronizedAreaChart from "./Components/SynchronizedAreaChart";
// import SynchronizedAreaChartSource from "raw-loader!./Components/SynchronizedAreaChart";
import Grid from "@mui/material/Grid";

import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";

const AreaChart = () => {
  return (
    <>
      <AppComponentHeader
        title="Area Chart"
        description="All svg elements can be added into the AreaChart component, such as defs, linearGradient, etc."
        refUrl="http://recharts.org/en-US/api/AreaChart/"
      />

      <AppGridContainer>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Simple modal"
            component={SimpleAreaChart}
            // source={SimpleAreaChartSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Stacked Area Chart"
            component={StackedAreaChart}
            // source={StackedAreaChartSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="AreaChart Connect Nulls"
            component={AreaChartConnectNulls}
            // source={AreaChartConnectNullsSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Synchronized Area Chart"
            component={SynchronizedAreaChart}
            // source={SynchronizedAreaChartSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Percent Area Chart"
            component={PercentAreaChart}
            // source={PercentAreaChartSource}
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};
export default AreaChart;
