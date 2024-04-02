import { Cell, Pie, PieChart } from "recharts";
import { EarningInMonthType } from "@crema/types/models/dashboards/Metrics";
import { Fonts } from "@crema/constants/AppEnums";

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
}: CustomizedLabelProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
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

type EarningGraphProps = {
  data: EarningInMonthType[];
};

const EarningGraph: React.FC<EarningGraphProps> = ({ data }) => {
  return (
    <PieChart width={400} height={400}>
      <text
        x="50%"
        fontWeight={Fonts.MEDIUM}
        fill="#0A8FDC"
        fontSize={20}
        y="55%"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        GBP
      </text>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        // label={renderCustomizedLabel}
        outerRadius="95%"
        fill="#8884d8"
        dataKey="value"
        innerRadius="80%"
        paddingAngle={5}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default EarningGraph;
