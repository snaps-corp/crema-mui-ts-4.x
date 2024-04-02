import {
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { EmailMarketingType } from "@crema/types/models/dashboards/CRM";

type Props = {
  data: EmailMarketingType[];
};
const ChartView = ({ data = [] }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="40%"
        outerRadius="100%"
        barSize={8}
        data={data}
      >
        <RadialBar background dataKey="value" name="name" />
        <Tooltip
          contentStyle={{
            borderRadius: 12,
            borderColor: "#31354188",
            background: "#FFFFFFCA",
          }}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default ChartView;
