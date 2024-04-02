import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Fonts } from "@crema/constants/AppEnums";
import IntlMessages from "@crema/helpers/IntlMessages";
import { TotalVisitorType } from "@crema/types/models/dashboards/CRM";

type Props = {
  totalVisitors: TotalVisitorType[];
};
const VisitorGraph = ({ totalVisitors = [] }: Props) => {
  return (
    <ResponsiveContainer>
      <PieChart>
        <text
          x="50%"
          fontWeight={Fonts.MEDIUM}
          fontSize={20}
          y="45%"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          40,000
        </text>
        <text
          x="50%"
          fontWeight={Fonts.MEDIUM}
          fontSize={20}
          y="55%"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {<IntlMessages id="dashboard.crm.totalVisitor" />}
        </text>
        <Pie
          data={totalVisitors}
          startAngle={90}
          endAngle={-270}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius="80%"
          outerRadius="95%"
        >
          {totalVisitors.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
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

export default VisitorGraph;
