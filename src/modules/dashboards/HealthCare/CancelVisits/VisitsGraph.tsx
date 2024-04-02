import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { useThemeContext } from "@crema/context/AppContextProvider/ThemeContextProvider";
import { CancelVisitType } from "@crema/types/models/dashboards/HealthCare";

type Props = {
  data: CancelVisitType[];
};

const VisitsGraph = ({ data }: Props) => {
  const { theme } = useThemeContext();
  return (
    <ResponsiveContainer width="100%" height={230}>
      <AreaChart data={data} margin={{ top: 50, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorVisit" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor={theme.palette.warning.main}
              stopOpacity={0.1}
            />
            <stop
              offset="95%"
              stopColor={theme.palette.warning.main}
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <Tooltip
          labelStyle={{ color: "black" }}
          contentStyle={{
            borderRadius: 12,
            borderColor: "#31354188",
            background: "#FFFFFFCA",
          }}
        />
        <CartesianGrid
          strokeDasharray="2 10"
          horizontal={false}
          vertical={false}
        />
        <Area
          type="monotone"
          dataKey="number"
          stroke={theme.palette.warning.main}
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#colorVisit)"
        />
        <XAxis dataKey="month" hide />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default VisitsGraph;
