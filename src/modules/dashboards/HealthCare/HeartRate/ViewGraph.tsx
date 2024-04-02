import { Line, LineChart, ResponsiveContainer } from "recharts";

type Props = {
  data: { name: string; rate: number }[];
  color: string;
};

const ViewGraph = ({ data, color }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={178}>
      <LineChart
        data={data}
        margin={{ top: 30, right: 0, left: 0, bottom: 20 }}
      >
        <Line
          type="monotone"
          dataKey="rate"
          stroke={color}
          dot={false}
          strokeWidth={2}
          activeDot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ViewGraph;
