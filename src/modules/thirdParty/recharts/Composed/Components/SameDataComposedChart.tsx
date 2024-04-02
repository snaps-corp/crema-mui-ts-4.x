import {
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

const SameDataComposedChart = () => {
  const { theme } = useThemeContext();
  return (
    <ResponsiveContainer width="100%" height={200}>
      <ComposedChart
        data={data}
        margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid />
        <Bar dataKey="uv" barSize={20} fill={theme.palette.secondary.main} />
        <Line
          type="monotone"
          dataKey="uv"
          stroke={theme.palette.success.main}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default SameDataComposedChart;
