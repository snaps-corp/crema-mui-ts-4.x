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

const BiaxialBarChart = () => {
  const { theme } = useThemeContext();
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart
        data={data}
        margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
      >
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#03275b" />
        <YAxis yAxisId="right" orientation="right" stroke="#F04F47" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="pv" fill={theme.palette.primary.main} />
        <Bar yAxisId="right" dataKey="uv" fill={theme.palette.secondary.main} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BiaxialBarChart;
