import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import { stackChartData } from "./data";

charts(FusionCharts);

const StackedColumns = () => {
  return (
    <ReactFusioncharts
      type="stackedcolumn2d"
      width={600}
      height={400}
      dataFormat="JSON"
      data // source={stackChartData}
    />
  );
};

export default StackedColumns;
