import AppCard from "@crema/components/AppCard";
import AppSelect from "@crema/components/AppSelect";
import { useIntl } from "react-intl";
import { Box, Typography } from "@mui/material";
import InquiriesChart from "./InquiriesChart";

import { styled } from "@mui/material/styles";
import AppList from "@crema/components/AppList";
import type { TopInquiriesType } from "@crema/types/models/dashboards/Ecommerce";

const TopInquiryRow = styled("div")(({ theme }) => {
  return {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    marginLeft: -8,
    marginRight: -8,
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
    "& .top-inquiry-col": {
      width: "100%",
      paddingLeft: 8,
      paddingRight: 8,
      [theme.breakpoints.up("sm")]: {
        width: "50%",
        display: "flex",
        alignItems: "center",
      },
      "& > div": {
        width: "100%",
      },
    },
    "& .top-inquiry-chart": {
      [theme.breakpoints.up("sm")]: {
        justifyContent: "center",
      },
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    },
  };
});

type InquiriesCellProps = {
  inquiry: TopInquiriesType;
};

const InquiriesCell = ({ inquiry }: InquiriesCellProps) => {
  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
      }}
      className="item-hover"
    >
      <Box
        sx={{
          mt: 1.5,
          bgcolor: inquiry.color,
          minWidth: 10,
          height: 10,
          borderRadius: "50%",
        }}
      />
      <Box
        sx={{
          ml: 2,
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
          component="h5"
        >
          {inquiry.title}
        </Typography>
        <Box
          component="p"
          sx={{
            color: "text.secondary",
            fontSize: 14,
          }}
        >
          {inquiry.value}%
        </Box>
      </Box>
    </Box>
  );
};

type TopInquiriesProps = {
  topInquiries: TopInquiriesType[];
};

const TopInquiries = ({ topInquiries }: TopInquiriesProps) => {
  const { messages } = useIntl();

  const handleSelectionType = (data: string) => {
    console.log("data: ", data);
  };

  return (
    <AppCard
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      title={messages["dashboard.eCommerce.topInquiries"] as string}
      action={
        <AppSelect
          menus={[
            messages["dashboard.thisWeek"],
            messages["dashboard.lastWeeks"],
            messages["dashboard.lastMonth"],
          ]}
          defaultValue={messages["dashboard.thisWeek"]}
          onChange={handleSelectionType}
        />
      }
    >
      <TopInquiryRow>
        <div className="top-inquiry-col top-inquiry-chart">
          <InquiriesChart data={topInquiries} />
        </div>

        <div className="top-inquiry-col">
          <AppList
            data={topInquiries}
            renderRow={(data) => (
              <InquiriesCell key={"inquiry-" + data.id} inquiry={data} />
            )}
          />
        </div>
      </TopInquiryRow>
    </AppCard>
  );
};

export default TopInquiries;
