import AppCard from "@crema/components/AppCard";
import AppList from "@crema/components/AppList";
import RequestItem from "./RequestItem";
import { useIntl } from "react-intl";
import { FriendRequestType } from "@crema/types/models/apps/Wall";

type Props = {
  friendRequests: FriendRequestType[];
};
const FriendRequests = ({ friendRequests }: Props) => {
  const { messages } = useIntl();

  return (
    <AppCard
      sxStyle={{ mb: 8 }}
      title={messages["wall.friends"] as string}
      action={messages["common.viewAll"] as string}
      contentStyle={{ px: 0, pt: 2 }}
    >
      <AppList
        animation="transition.slideRightBigIn"
        data={friendRequests}
        renderRow={(data, index) => <RequestItem key={index} request={data} />}
      />
    </AppCard>
  );
};

export default FriendRequests;
