import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import data from "./data";
import { useThemeContext } from "@crema/context/AppContextProvider/ThemeContextProvider";

const StackedAreaChart = () => {
  const { theme } = useThemeContext();
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stackId="1"
          fill={theme.palette.primary.main}
        />
        <Area
          type="monotone"
          dataKey="pv"
          stackId="1"
          stroke={theme.palette.secondary.main}
          fill={theme.palette.secondary.main}
        />
        <Area
          type="monotone"
          dataKey="amt"
          stackId="1"
          stroke={theme.palette.success.main}
          fill={theme.palette.success.main}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default StackedAreaChart;
