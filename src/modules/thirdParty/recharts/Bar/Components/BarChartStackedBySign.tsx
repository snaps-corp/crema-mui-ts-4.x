import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useThemeContext } from "@crema/context/AppContextProvider/ThemeContextProvider";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: -3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: -2000, pv: -9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: -1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: -3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const BarChartStackedBySign = () => {
  const { theme } = useThemeContext();
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart
        data={data}
        stackOffset="sign"
        margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="pv" fill={theme.palette.primary.main} stackId="stack" />
        <Bar dataKey="uv" fill={theme.palette.secondary.main} stackId="stack" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartStackedBySign;
