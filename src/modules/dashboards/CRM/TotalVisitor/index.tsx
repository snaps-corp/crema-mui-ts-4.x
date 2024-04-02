import VisitorGraph from "./VisitorGraph";
import List from "@mui/material/List";
import Categories from "./Categories";
import AppCard from "@crema/components/AppCard";

import { styled } from "@mui/material/styles";
import { TotalVisitorType } from "@crema/types/models/dashboards/CRM";
import IntlMessages from "@crema/helpers/IntlMessages";

const EarningGraphWrapper = styled("div")(({ theme }) => {
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
    "& text": {
      fill: theme.palette.text.primary,
    },
    "& .earning-item": {
      width: "100%",
      paddingLeft: 8,
      paddingRight: 8,
      [theme.breakpoints.up("sm")]: {
        width: "46%",
      },
      [theme.breakpoints.up("lg")]: {
        width: "45%",
      },
      [theme.breakpoints.up("xl")]: {
        width: "50%",
      },
    },
    "& .earning-graph-item": {
      paddingLeft: 0,
      paddingRight: 0,
      [theme.breakpoints.up("sm")]: {
        width: "54%",
      },
      [theme.breakpoints.up("lg")]: {
        width: "55%",
      },
      [theme.breakpoints.up("xl")]: {
        width: "50%",
      },
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    },
  };
});
type Props = {
  totalVisitors: TotalVisitorType[];
};
export const TotalVisitor = ({ totalVisitors = [] }: Props) => {
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={<IntlMessages id="dashboard.crm.totalVisitor" />}
      action={<IntlMessages id="common.viewAll" />}
    >
      <EarningGraphWrapper>
        <div className="earning-item earning-graph-item">
          <VisitorGraph totalVisitors={totalVisitors} />
        </div>
        <div className="earning-item">
          <List>
            {totalVisitors.map((category) => {
              if (category.name !== "") {
                return <Categories category={category} key={category.name} />;
              }
              return null;
            })}
          </List>
        </div>
      </EarningGraphWrapper>
    </AppCard>
  );
};

export default TotalVisitor;
