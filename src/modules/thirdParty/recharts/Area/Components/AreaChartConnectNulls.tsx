import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Box from "@mui/material/Box";
import { useThemeContext } from "@crema/context/AppContextProvider/ThemeContextProvider";

const data = [
  { name: "Page A", uv: 4000 },
  { name: "Page B", uv: 3000 },
  { name: "Page C", uv: 2000 },
  { name: "Page D" },
  { name: "Page E", uv: 1890 },
  { name: "Page F", uv: 2390 },
  { name: "Page G", uv: 3490 },
];
const AreaChartConnectNulls = () => {
  const { theme } = useThemeContext();
  return (
    <ResponsiveContainer width="100%">
      <div>
        <Box mb={5}>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart
              data={data}
              margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                fill={theme.palette.primary.main}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
        <Box mb={4}>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart
              data={data}
              margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                connectNulls={true}
                type="monotone"
                dataKey="uv"
                stroke={theme.palette.secondary.main}
                fill={theme.palette.secondary.main}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </div>
    </ResponsiveContainer>
  );
};

export default AreaChartConnectNulls;
