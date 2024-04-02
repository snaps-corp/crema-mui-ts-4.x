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

const SimpleAreaChart = () => {
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
        <Area type="monotone" dataKey="uv" fill={theme.palette.primary.main} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SimpleAreaChart;
