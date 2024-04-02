import AppCard from "@crema/components/AppCard";
import Box from "@mui/material/Box";

import Avatar from "@mui/material/Avatar";
import { Fonts } from "@crema/constants/AppEnums";

import { FcGraduationCap, FcReading, FcViewDetails } from "react-icons/fc";
import { GiBookshelf } from "react-icons/gi";
import { AcademicStatType } from "@crema/types/models/dashboards/Academy";

const getIcon = (iconType: string) => {
  switch (iconType) {
    case "BiBasket":
      return <FcViewDetails color="#9E49E6" className="icon" />;
    case "FcGraduationCap":
      return <FcGraduationCap color="#0A8FDC" className="icon" />;
    case "GiBookshelf":
      return <GiBookshelf color="#49BD65" className="icon" />;
    default:
      return <FcReading color="#9E49E6" className="icon" />;
  }
};

type Props = {
  stats: AcademicStatType;
};
const GeneralStats = ({ stats }: Props) => {
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      className="card-hover"
      contentStyle={{
        p: 0,
        "&:last-of-type": {
          pb: "0px !important",
        },
        mb: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: 4,
        }}
      >
        <Box
          sx={{
            mr: 4,
          }}
        >
          <Avatar
            sx={{
              width: 46,
              height: 46,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              backgroundColor: stats.bgcolor,
              padding: 2,
            }}
          >
            {getIcon(stats.icon)}
          </Avatar>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: {
              xs: "calc(100% - 62px)",
              lg: "calc(100% - 70px)",
              xl: "calc(100% - 76px)",
            },
          }}
        >
          <Box sx={{ overflow: "hidden" }}>
            <Box component="h3">{stats.count}</Box>
            <Box
              component="p"
              sx={{
                color: "text.secondary",
                fontSize: 14,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {stats.title}
            </Box>
          </Box>
          <Box
            component="span"
            sx={{
              backgroundColor: stats.bgcolor,
              borderRadius: 30,
              color: stats.badgeColor,
              padding: "4px 12px",
              fontSize: 12,
              fontWeight: Fonts.MEDIUM,
              display: "inline-block",
              minWidth: 75,
              textAlign: "center",
              "@media only screen and (max-width: 1580px) and (min-width: 1200px)":
                {
                  display: "none",
                },
            }}
          >
            {stats.new}
          </Box>
        </Box>
      </Box>
    </AppCard>
  );
};

export default GeneralStats;
