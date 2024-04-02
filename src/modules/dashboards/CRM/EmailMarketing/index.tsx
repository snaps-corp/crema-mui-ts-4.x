import AppCard from "@crema/components/AppCard";
import Categories from "./Categories";
import List from "@mui/material/List";
import ChartView from "./ChartView";
import { Box } from "@mui/material";
import { EmailMarketingType } from "@crema/types/models/dashboards/CRM";
import IntlMessages from "@crema/helpers/IntlMessages";

type Props = {
  emailMarketing: EmailMarketingType[];
};
export const EmailMarking = ({ emailMarketing = [] }: Props) => {
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={<IntlMessages id="dashboard.crm.emailMarketing" />}
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          mb: 3,
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ChartView data={emailMarketing} />
      </Box>
      <List
        sx={{
          padding: 0,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {emailMarketing.map((category, id) => {
          return <Categories category={category} key={id} />;
        })}
      </List>
    </AppCard>
  );
};

export default EmailMarking;
