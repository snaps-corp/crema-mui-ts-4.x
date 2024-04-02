import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import type { HospitalActivityType } from "@crema/types/models/dashboards/HealthCare";
import { useThemeContext } from "@crema/context/AppContextProvider/ThemeContextProvider";

type Props = {
  data: HospitalActivityType[];
};

const StatGraphs = ({ data }: Props) => {
  const { theme } = useThemeContext();
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart
        data={data}
        margin={{ top: 50, right: 0, left: -25, bottom: 0 }}
      >
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
          padding={{ left: 20, right: 20 }}
        />
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
          dataKey="Consultations"
          stroke={theme.palette.primary.main}
          dot={false}
          strokeWidth={2}
          activeDot={{ r: 4 }}
        />
        <Line
          type="monotone"
          dot={false}
          strokeWidth={2}
          dataKey="Patients"
          stroke={theme.palette.secondary.main}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StatGraphs;
