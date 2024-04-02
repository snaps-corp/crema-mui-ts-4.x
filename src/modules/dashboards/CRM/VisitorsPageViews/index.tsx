import StatGraphs from "./StatGraphs";
import { useIntl } from "react-intl";
import { alpha, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import AppCard from "@crema/components/AppCard";
import AppSelect from "@crema/components/AppSelect";
import { VisitorPageViewType } from "@crema/types/models/dashboards/CRM";
import IntlMessages from "@crema/helpers/IntlMessages";

const VisitorCard = styled(AppCard)(({ theme }) => {
  return {
    height: "100%",
    "& .MuiCardHeader-root": {
      [theme.breakpoints.down("sm")]: {
        alignItems: "flex-start",
      },
    },
  };
});
const VisitorAction = styled("div")(({ theme }) => {
  return {
    display: "flex",
    alignItems: "flex-end",
    flexWrap: "wrap",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      alignItems: "center",
      flexDirection: "row",
    },
    "& .visitor-action-view": {
      display: "none",
      alignItems: "center",
      flexWrap: "wrap",
      marginRight: 10,
      [theme.breakpoints.up("sm")]: {
        display: "flex",
      },
    },
    "& .visitor-action-item": {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      lineHeight: 1,
      paddingBottom: 2,
      "&:not(:first-of-type)": {
        borderLeft: `solid 1px ${alpha(theme.palette.text.secondary, 0.2)}`,
        marginLeft: 16,
        paddingLeft: 16,
      },
    },
    "& .dot-visitor": {
      height: 10,
      width: 10,
      marginRight: 4,
      borderRadius: "50%",
    },
  };
});

type Props = {
  data: VisitorPageViewType[];
};
const VisitorsPageViews = ({ data = [] }: Props) => {
  const theme = useTheme();
  const handleSelectionType = (data: VisitorPageViewType) => {
    console.log("data: ", data);
  };
  const { messages } = useIntl();

  return (
    <VisitorCard
      title={<IntlMessages id="dashboard.crm.visitorsPageViews" />}
      action={
        <VisitorAction>
          <div className="visitor-action-view">
            <div className="visitor-action-item">
              <span
                className="dot-visitor"
                style={{ backgroundColor: theme.palette.primary.main }}
              />
              {messages["dashboard.crm.pagesViews"] as string}
            </div>
            <div className="visitor-action-item">
              <span
                className="dot-visitor"
                style={{ backgroundColor: theme.palette.secondary.main }}
              />
              {messages["dashboard.crm.visitors"] as string}
            </div>
          </div>
          <AppSelect
            menus={[
              messages["dashboard.thisWeek"],
              messages["dashboard.lastWeeks"],
              messages["dashboard.lastMonth"],
            ]}
            defaultValue={messages["dashboard.thisWeek"]}
            onChange={handleSelectionType}
          />
        </VisitorAction>
      }
    >
      <StatGraphs data={data} />
    </VisitorCard>
  );
};
export default VisitorsPageViews;
