import { ResponsiveContainer, Treemap } from "recharts";
import data from "./data";

// const COLORS = [
//   '#8889DD',
//   '#9597E4',
//   '#8DC77B',
//   '#A5D297',
//   '#E2CF45',
//   '#F8C12D',
// ];
// type Props = {
//   root?: any;
//   depth?: number;
//   x?: number;
//   y?: number;
//   width?: number;
//   height?: number;
//   index?: number;
//   colors?: string[];
//   name?: string;
// };
// const CustomizedContent = ({
//   root,
//   depth = 0,
//   x = 0,
//   y = 0,
//   width = 0,
//   height = 0,
//   index = 0,
//   colors,
//   name,
// }: Props) => {
//   return (
//     <g>
//       <rect
//         x={x}
//         y={y}
//         width={width}
//         height={height}
//         style={{
//           fill:
//             depth < 2
//               ? colors?.[Math.floor((index / root.children.length) * 6)]
//               : 'none',
//           stroke: '#fff',
//           strokeWidth: 2 / (depth + 1e-10),
//           strokeOpacity: 1 / (depth + 1e-10),
//         }}
//       />
//       {depth === 1 ? (
//         <text
//           x={x + width / 2}
//           y={y + height / 2 + 7}
//           textAnchor='middle'
//           fill='#fff'
//           fontSize={14}
//         >
//           {name}
//         </text>
//       ) : null}
//       {depth === 1 ? (
//         <text x={x + 4} y={y + 18} fill='#fff' fontSize={16} fillOpacity={0.9}>
//           {index + 1}
//         </text>
//       ) : null}
//     </g>
//   );
// };

const CustomContentTreemap = () => (
  <ResponsiveContainer width="100%" height={200}>
    <Treemap
      data={data}
      dataKey="size"
      aspectRatio={4 / 3}
      stroke="#fff"
      fill="#4299E1"
    />
  </ResponsiveContainer>
);

export default CustomContentTreemap;
