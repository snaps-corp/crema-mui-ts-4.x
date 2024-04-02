import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { GraphDaum2Type } from "@crema/types/models/dashboards/Analytics";

type Props = {
  data: GraphDaum2Type[];
};
const VisitorsGraph = ({ data = [] }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart barSize={3} data={data}>
        <Bar dataKey="value" fill="#49bd65" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default VisitorsGraph;
