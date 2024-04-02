import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import data from "./data";
import Box from "@mui/material/Box";
import { useThemeContext } from "@crema/context/AppContextProvider/ThemeContextProvider";

const SynchronizedAreaChart = () => {
  const { theme } = useThemeContext();
  return (
    <ResponsiveContainer width="100%">
      <div>
        <Box component="p" mb={4}>
          A demo of synchronized AreaCharts
        </Box>
        <Box mb={4}>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart
              data={data}
              syncId="anyId"
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
        <Box component="p" mb={4}>
          Maybe some other content
        </Box>
        <Box mb={4}>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart
              data={data}
              syncId="anyId"
              margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="pv"
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

export default SynchronizedAreaChart;
