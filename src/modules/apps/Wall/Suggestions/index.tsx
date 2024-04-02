import AppList from "@crema/components/AppList";
import AppCard from "@crema/components/AppCard";
import SuggestionItem from "./SuggestionItem";
import { useIntl } from "react-intl";
import { SuggestionType } from "@crema/types/models/apps/Wall";

type Props = {
  suggestions: SuggestionType[];
};

const Suggestions = ({ suggestions }: Props) => {
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages["wall.suggestions"] as string}
      contentStyle={{ px: 0, pt: 2 }}
    >
      <AppList
        data={suggestions}
        renderRow={(item, index) => <SuggestionItem key={index} item={item} />}
      />
    </AppCard>
  );
};

export default Suggestions;
