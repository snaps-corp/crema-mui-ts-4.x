import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import data from "./data";
import { useThemeContext } from "@crema/context/AppContextProvider/ThemeContextProvider";

const MixBarChart = () => {
  const { theme } = useThemeContext();
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart
        data={data}
        margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="amt" stackId="a" fill={theme.palette.primary.main} />
        <Bar dataKey="pv" stackId="a" fill={theme.palette.secondary.main} />
        <Bar dataKey="uv" fill={theme.palette.success.main} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MixBarChart;
