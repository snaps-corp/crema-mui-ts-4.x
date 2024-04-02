import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import data from "./data";
import { useThemeContext } from "@crema/context/AppContextProvider/ThemeContextProvider";

const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
            x + width / 2
          }, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
            y + height
          } ${x + width}, ${y + height}
          Z`;
};

const TriangleBar = (props: any) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const CustomShapeBarChart = () => {
  const { theme } = useThemeContext();
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart
        data={data}
        margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar
          dataKey="uv"
          fill={theme.palette.primary.main}
          shape={<TriangleBar />}
          label
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomShapeBarChart;
