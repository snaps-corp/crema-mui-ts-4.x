import { Line, LineChart, ResponsiveContainer } from "recharts";
import Box from "@mui/material/Box";

type WorkViewsGraphPorps = {
  data: { name: string; value: number }[];
};

const WorkViewsGraph: React.FC<WorkViewsGraphPorps> = ({ data }) => {
  return (
    <Box
      sx={{
        p: 0,
        mt: "auto",
        flexDirection: "auto",
        objectPosition: "bottom",
      }}
    >
      <ResponsiveContainer height={100} width="100%">
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#F04F47"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default WorkViewsGraph;
