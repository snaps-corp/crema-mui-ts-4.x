import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { alpha, useTheme } from "@mui/material";
import { OpportunitiesWonGraphDaumType } from "@crema/types/models/dashboards/CRM";

type Props = {
  data: OpportunitiesWonGraphDaumType[];
};
const OpportunitiesWonGraph = ({ data = [] }: Props) => {
  const theme = useTheme();

  return (
    <ResponsiveContainer maxHeight={260} minHeight={160}>
      <BarChart barGap={16} barSize={8} data={data}>
        <XAxis dataKey="name" />
        <Tooltip
          labelStyle={{ color: "black" }}
          contentStyle={{
            borderRadius: 12,
            borderColor: "#31354188",
            background: "#FFFFFFCA",
          }}
          cursor={{ fill: "transparent" }}
        />
        <Bar
          dataKey="progress"
          stackId="a"
          fill={alpha(theme.palette.primary.main, 0.9)}
          radius={[20, 20, 0, 0]}
          background={{ fill: alpha(theme.palette.primary.main, 0.15) }}
        />
        <Bar
          dataKey="actual"
          stackId="b"
          fill={alpha(theme.palette.secondary.main, 0.9)}
          radius={[20, 20, 0, 0]}
          background={{ fill: alpha(theme.palette.secondary.main, 0.15) }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default OpportunitiesWonGraph;
