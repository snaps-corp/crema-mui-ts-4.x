import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type { TopInquiriesType } from "@crema/types/models/dashboards/Ecommerce";

type Props = {
  data: TopInquiriesType[];
};

const InquiriesChart = ({ data }: Props) => {
  return (
    <ResponsiveContainer height={195}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius="80%"
          outerRadius="95%"
          nameKey="title"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          labelStyle={{ color: "black" }}
          contentStyle={{
            borderRadius: 12,
            borderColor: "#31354188",
            background: "#FFFFFFCA",
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default InquiriesChart;
