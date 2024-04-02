import WhatsHappenItem from "./WhatsHappenItem";
import { useIntl } from "react-intl";
import { WhatsHappenDataType } from "@crema/types/models/apps/Wall";
import AppCard from "@crema/components/AppCard";

type Props = {
  whatsHappen: WhatsHappenDataType[];
};

const WhatsHappen = ({ whatsHappen }: Props) => {
  const { messages } = useIntl();

  return (
    <AppCard
      sxStyle={{ mb: 8 }}
      title={messages["wall.whatsHappening"] as string}
      action={messages["common.viewAll"] as string}
      contentStyle={{ px: 0, pt: 2 }}
    >
      <div>
        {whatsHappen.map((data) => (
          <WhatsHappenItem data={data} key={data.id} />
        ))}
      </div>
    </AppCard>
  );
};

export default WhatsHappen;
