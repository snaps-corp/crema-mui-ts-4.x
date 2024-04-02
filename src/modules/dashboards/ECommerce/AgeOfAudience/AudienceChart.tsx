import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { AgeOfAudienceType } from "@crema/types/models/dashboards/Ecommerce";

const RADIAN = Math.PI / 180;

type CustomizedLabelProps = {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
};

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: CustomizedLabelProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      key={index}
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

type Props = {
  audienceData: AgeOfAudienceType[];
};

const AudienceChart = ({ audienceData }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={audienceData}
          cx="50%"
          cy={90}
          startAngle={90}
          endAngle={-270}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={90}
          nameKey="title"
          dataKey="value"
        >
          {audienceData.map((entry, index) => (
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
export default AudienceChart;
