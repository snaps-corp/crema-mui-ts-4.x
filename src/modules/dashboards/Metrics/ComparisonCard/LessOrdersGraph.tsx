import { Area, AreaChart, ResponsiveContainer } from "recharts";
import Box from "@mui/material/Box";

type LessOrdersGraphProps = {
  data: any[];
};

const LessOrdersGraph: React.FC<LessOrdersGraphProps> = ({ data }) => {
  return (
    <Box
      sx={{
        position: "relative",
        "& .containerGraph": {
          width: "100%",
        },
      }}
    >
      <ResponsiveContainer height={200} className="containerGraph">
        <AreaChart
          width={500}
          height={100}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <Area
            type="monotone"
            dataKey="orders"
            stroke="#E53E3E"
            fill="#E53E3E"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default LessOrdersGraph;
