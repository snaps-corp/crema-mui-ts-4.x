import AppCard from "@crema/components/AppCard";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DrStateType } from "@crema/types/models/dashboards/HealthCare";
import { Fonts } from "@crema/constants/AppEnums";

const DrTime = styled("div")(({ theme }) => {
  return {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    borderRadius: "50%",
    justifyContent: "center",
    height: 50,
    width: 50,
    fontWeight: Fonts.BOLD,
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.paper,
    "@media only screen and (min-width: 1200px) and (max-width: 1535px)": {
      display: "none",
    },
  };
});

type Props = {
  data: DrStateType;
};

const DrCard = ({ data }: Props) => {
  const { icon, time, category, name } = data;

  return (
    <AppCard
      sxStyle={{ height: 1 }}
      className="card-hover"
      contentStyle={{
        p: 0,
        "&:last-of-type": {
          pb: "0 !important",
        },
        mb: 0,
      }}
    >
      <Box sx={{ display: "flex", padding: 4 }}>
        <Box sx={{ mr: 3, alignSelf: "center", minWidth: 46 }}>
          <img src={icon} alt="icon" />
        </Box>
        <Box
          sx={{
            width: "calc(100% - 50px)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              flex: 1,
              overflow: "hidden",
              mr: 2,
            }}
          >
            <Box
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                width: "100%",
                fontWeight: Fonts.SEMI_BOLD,
                color: "text.primary",
              }}
              component="h5"
            >
              {category}
            </Box>
            <Box
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                width: "100%",
                color: "text.secondary",
              }}
              component="p"
            >
              {name}
            </Box>
          </Box>
          <DrTime>{time}</DrTime>
        </Box>
      </Box>
    </AppCard>
  );
};

export default DrCard;
