import { useIntl } from "react-intl";
import ActivitiesItem from "./ActivitiesItem";
import Grid from "@mui/material/Grid";
import AppGridContainer from "@crema/components/AppGridContainer";
import AppCard from "@crema/components/AppCard";
import type { ActivityType } from "@crema/types/models/dashboards/HealthCare";

type Props = {
  activities: ActivityType[];
};

const Activities = ({ activities }: Props) => {
  const { messages } = useIntl();
  return (
    <AppCard title={messages["dashboard.crypto.activities"] as string}>
      <AppGridContainer>
        {activities.map((activities, index) => (
          <Grid item xs={6} sm={4} md={6} lg={6} xl={4} key={index}>
            <ActivitiesItem activities={activities} />
          </Grid>
        ))}
      </AppGridContainer>
    </AppCard>
  );
};

export default Activities;
