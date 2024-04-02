import AppCard from "@crema/components/AppCard";
import AppList from "@crema/components/AppList";
import NewsItem from "./NewsItem";
import { useIntl } from "react-intl";
import { RecentNewsType } from "@crema/types/models/apps/Wall";

type Props = {
  recentNews: RecentNewsType[];
};

const RecentNews = ({ recentNews }: Props) => {
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages["wall.recentNews"] as string}
      contentStyle={{ px: 0, pt: 2 }}
    >
      <AppList
        data={recentNews}
        renderRow={(item, index) => <NewsItem key={index} item={item} />}
      />
    </AppCard>
  );
};

export default RecentNews;
