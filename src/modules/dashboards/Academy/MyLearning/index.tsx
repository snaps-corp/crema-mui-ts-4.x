import AppCard from "@crema/components/AppCard";
import AppList from "@crema/components/AppList";
import LearningItem from "./LearningItem";
import { LearningDaumType } from "@crema/types/models/dashboards/Academy";
import IntlMessages from "@crema/helpers/IntlMessages";

type Props = {
  learningData: LearningDaumType[];
};
const MyLearning = ({ learningData }: Props) => {
  return (
    <AppCard
      title={<IntlMessages id="academy.myLearning" />}
      contentStyle={{ px: 0 }}
    >
      <AppList
        animation="transition.slideRightBigIn"
        data={learningData}
        renderRow={(data, index) => <LearningItem key={index} course={data} />}
      />
    </AppCard>
  );
};

export default MyLearning;
