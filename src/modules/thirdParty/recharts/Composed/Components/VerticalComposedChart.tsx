import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import data from "./data";
import { useThemeContext } from "@crema/context/AppContextProvider/ThemeContextProvider";

const VerticalComposedChart = () => {
  const { theme } = useThemeContext();
  return (
    <ResponsiveContainer width="100%" height={200}>
      <ComposedChart
        layout="vertical"
        data={data}
        margin={{ top: 10, right: 0, left: -12, bottom: 0 }}
      >
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#F5F5F5" />
        <Area dataKey="amt" fill={theme.palette.primary.main} />
        <Bar dataKey="pv" barSize={20} fill={theme.palette.secondary.main} />
        <Line dataKey="uv" stroke={theme.palette.success.main} />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default VerticalComposedChart;
