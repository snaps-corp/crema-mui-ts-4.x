import AccountGraph from "./AccountGraph";
import AppCard from "@crema/components/AppCard";
import { useIntl } from "react-intl";
import Box from "@mui/material/Box";
import { AccountDataType } from "@crema/types/models/dashboards/Metrics";

type YourAccountPorps = {
  data: AccountDataType[];
};

const YourAccount: React.FC<YourAccountPorps> = ({ data }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages["dashboard.yourAccount"] as string}
      sxStyle={{ height: 1 }}
      contentStyle={{ display: "flex", flexDirection: "column" }}
    >
      <Box
        sx={{
          mt: "auto",
        }}
      >
        <AccountGraph data={data} />
      </Box>
    </AppCard>
  );
};

export default YourAccount;
