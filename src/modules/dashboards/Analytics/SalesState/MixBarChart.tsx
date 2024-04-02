import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { SalesChartDaumType } from "@crema/types/models/dashboards/Analytics";

type Props = {
  data: SalesChartDaumType[];
};
const MixBarChart = ({ data = [] }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={270}>
      <BarChart
        barSize={7}
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" dy={10} />
        <Tooltip />
        <Bar dataKey="AS" stackId="a" fill="#49BD65" radius={[10, 10, 0, 0]} />
        <Bar dataKey="Rev" stackId="b" fill="#0A8FDC" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MixBarChart;
