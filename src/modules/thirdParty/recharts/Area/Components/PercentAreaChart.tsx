import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useThemeContext } from "@crema/context/AppContextProvider/ThemeContextProvider";

const data = [
  { month: "2015.01", a: 4000, b: 2400, c: 2400 },
  { month: "2015.02", a: 3000, b: 1398, c: 2210 },
  { month: "2015.03", a: 2000, b: 9800, c: 2290 },
  { month: "2015.04", a: 2780, b: 3908, c: 2000 },
  { month: "2015.05", a: 1890, b: 4800, c: 2181 },
  { month: "2015.06", a: 2390, b: 3800, c: 2500 },
  { month: "2015.07", a: 3490, b: 4300, c: 2100 },
];

const getPercent = (value: number, total: number) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const toPercent = (decimal: number, fixed = 0) => {
  return `${(decimal * 100).toFixed(fixed)}%`;
};
const PercentAreaChart = () => {
  const { theme } = useThemeContext();
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart
        data={data}
        stackOffset="expand"
        margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
      >
        <XAxis dataKey="month" />
        <YAxis tickFormatter={toPercent} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="a"
          stackId="1"
          fill={theme.palette.primary.main}
        />
        <Area
          type="monotone"
          dataKey="b"
          stackId="1"
          stroke={theme.palette.secondary.main}
          fill={theme.palette.secondary.main}
        />
        <Area
          type="monotone"
          dataKey="c"
          stackId="1"
          stroke={theme.palette.success.main}
          fill={theme.palette.success.main}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default PercentAreaChart;
