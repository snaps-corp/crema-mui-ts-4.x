import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import Box from "@mui/material/Box";
import { Fonts } from "@crema/constants/AppEnums";
import { SocialMediaDaumType } from "@crema/types/models/dashboards/CRM";

type Props = {
  socialMediaData: SocialMediaDaumType[];
};
const SocialMediaGraph = ({ socialMediaData = [] }: Props) => {
  return (
    <Box
      sx={{
        mt: 5,
        "& .graphText": {
          fontWeight: Fonts.MEDIUM,
          fontSize: 14,
        },
      }}
    >
      <ResponsiveContainer width="100%" height={235}>
        <BarChart
          barSize={8}
          data={socialMediaData}
          margin={{ top: 0, right: 0, left: 0, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" style={{ paddingTop: 20 }} />
          <XAxis hide />
          <YAxis hide />
          <Bar dataKey="revenue">
            {socialMediaData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default SocialMediaGraph;
