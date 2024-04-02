import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useTheme } from "@mui/material";
import { AtcStaticType } from "@crema/types/models/dashboards/Crypto";

type Props = {
  data: AtcStaticType[];
};
const StatGraphs = ({ data = [] }: Props) => {
  const theme = useTheme();
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart
        data={data}
        margin={{ top: 50, right: 0, left: -5, bottom: 0 }}
      >
        <XAxis
          dataKey="name"
          tickLine={false}
          padding={{ left: 20, right: 20 }}
        />
        <YAxis tickLine={false} axisLine={false} />
        <Tooltip
          labelStyle={{ color: "black" }}
          contentStyle={{
            borderRadius: 12,
            borderColor: "#31354188",
            background: "#FFFFFFCA",
          }}
        />
        <CartesianGrid stroke="#eee" horizontal={true} vertical={false} />
        <Line
          type="monotone"
          dataKey="Buy"
          stroke={theme.palette.primary.main}
          dot={false}
          strokeWidth={2}
          activeDot={{ r: 4 }}
        />
        <Line
          type="monotone"
          dot={false}
          strokeWidth={2}
          dataKey="Sell"
          stroke={theme.palette.secondary.main}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StatGraphs;
