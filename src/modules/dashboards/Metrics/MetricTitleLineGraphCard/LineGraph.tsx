import { Line, LineChart } from "recharts";
import Box from "@mui/material/Box";

type LineGraphProps = {
  data: { number: string; value: number }[];
  graphColor: string;
};

const LineGraph = (props: LineGraphProps) => {
  const { data, graphColor } = props;

  return (
    <Box
      sx={{
        ml: "auto",
        "& .lineChart": {
          mb: 2,
        },
      }}
    >
      <LineChart className="lineChart" width={300} height={40} data={data}>
        <Line
          type="monotone"
          dataKey="value"
          stroke={graphColor}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>

      <LineChart width={300} height={40} data={data}>
        <Line
          type="monotone"
          dataKey="value"
          stroke={graphColor}
          strokeWidth={2}
          dot={false}
          strokeDasharray="5 5"
        />
      </LineChart>
    </Box>
  );
};

export default LineGraph;
