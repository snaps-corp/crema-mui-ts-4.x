import AppCard from "@crema/components/AppCard";
import AppList from "@crema/components/AppList";

import AppScrollbar from "@crema/components/AppScrollbar";
import useIntl from "react-intl/lib/src/components/useIntl";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import AppLinearProgress from "@crema/components/AppLinearProgress";
import { RevenueItemType } from "@crema/types/models/dashboards/Ecommerce";

type RevenueItemProps = {
  item: RevenueItemType;
};

const RevenueItem = ({ item }: RevenueItemProps) => {
  return (
    <Box
      sx={{
        padding: "10px 20px",
      }}
      key={item.id}
      className="item-hover"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 1.5,
        }}
      >
        <Typography
          variant="h5"
          component="h5"
          sx={{
            display: "inline-block",
            mr: 1,
          }}
        >
          {item.name}
        </Typography>
        <Box
          component="span"
          sx={{
            color: (theme) => theme.palette.text.secondary,
            ml: "auto",
          }}
        >
          {item.value}%
        </Box>
      </Box>
      <AppLinearProgress value={item.value} activeColor="#0A8FDC" />
    </Box>
  );
};

type RevenueProps = {
  revenueData: RevenueItemType[];
};

const Revenue = ({ revenueData }: RevenueProps) => {
  const { messages } = useIntl();
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={messages["dashboard.eCommerce.revenue"] as string}
      action={messages["common.viewAll"] as string}
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
    >
      <AppScrollbar style={{ maxHeight: 200 }}>
        <AppList
          animation="transition.slideRightBigIn"
          data={revenueData}
          renderRow={(data, index) => <RevenueItem key={index} item={data} />}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default Revenue;
