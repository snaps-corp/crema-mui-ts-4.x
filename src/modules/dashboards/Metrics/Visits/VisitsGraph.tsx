import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import Box from "@mui/material/Box";

type VisitsGraphProps = {
  data: { number: string; value: number }[];
};

const VisitsGraph: React.FC<VisitsGraphProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="value"
          stroke="#4299E1"
          strokeWidth={2}
          dot={{ r: 0 }}
        />
        <Tooltip
          labelStyle={{ color: "black" }}
          cursor={false}
          content={(data) => {
            return data.payload?.[0] ? (
              <Box
                component="span"
                sx={{
                  p: 4,
                  color: "primary.contrastText",
                }}
              >
                {data.payload?.[0].payload.value}
              </Box>
            ) : null;
          }}
          wrapperStyle={{
            background: "#4299E1",
            borderRadius: 10,
            overflow: "hidden",
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default VisitsGraph;
