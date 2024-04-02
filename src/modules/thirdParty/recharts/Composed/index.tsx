import LineBarAreaComposedChart from "./Components/LineBarAreaComposedChart";
import VerticalComposedChart from "./Components/VerticalComposedChart";
// import LineBarAreaComposedChartSource from "raw-loader!./Components/LineBarAreaComposedChart";
import SameDataComposedChart from "./Components/SameDataComposedChart";
import ComposedChartWithAxisLabels from "./Components/ComposedChartWithAxisLabels";
// import VerticalComposedChartSource from "raw-loader!./Components/VerticalComposedChart";
//
// import SameDataComposedChartSource from "raw-loader!./Components/SameDataComposedChart";
//
// import ComposedChartWithAxisLabelsSource from "raw-loader!./Components/ComposedChartWithAxisLabels";
import Grid from "@mui/material/Grid";

import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";

const ComposedChart = () => {
  return (
    <>
      <AppComponentHeader
        title="Composed Chart"
        description="A chart composed of line, area, and bar charts. When you just want to draw a chart of a single type like line, then LineChart is recommended."
        refUrl="http://recharts.org/en-US/api/ComposedChart/"
      />

      <AppGridContainer>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Line Bar Area Composed Chart"
            component={LineBarAreaComposedChart}
            // source={LineBarAreaComposedChartSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Line Bar Area Composed Chart"
            component={VerticalComposedChart}
            // source={VerticalComposedChartSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Same Data Composed Chart"
            component={SameDataComposedChart}
            // source={SameDataComposedChartSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Composed Chart With Axis Labels"
            component={ComposedChartWithAxisLabels}
            // source={ComposedChartWithAxisLabelsSource}
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default ComposedChart;
