import { Bar, BarChart, ResponsiveContainer } from "recharts";

type SalesGraphProps = {
  data: { day: number; number: number }[];
};

const SalesGraph: React.FC<SalesGraphProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart barSize={13} data={data}>
        <Bar dataKey="number" fill="#0A8FDC" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalesGraph;
