import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import data from "./data";
import style from "./style";

const SimpleRadialBarChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <RadialBarChart innerRadius={20} outerRadius={140} barSize={10} data={data}>
      <RadialBar animationBegin={15} label background dataKey="uv" />
      <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    </RadialBarChart>
  </ResponsiveContainer>
);

export default SimpleRadialBarChart;
