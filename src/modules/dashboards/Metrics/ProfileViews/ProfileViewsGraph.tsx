import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";

type ProfileViewsGraphProps = {
  data: { day: number; number: number }[];
};

const ProfileViewsGraph: React.FC<ProfileViewsGraphProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={100}>
      <BarChart barSize={13} data={data}>
        <XAxis dataKey="data" axisLine={false} tickLine={false} />
        <Bar dataKey="number" fill="#959CA9" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ProfileViewsGraph;
