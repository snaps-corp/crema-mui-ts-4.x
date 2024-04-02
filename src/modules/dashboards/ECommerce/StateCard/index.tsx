import AppCard from "@crema/components/AppCard";
import { alpha, Box, Icon, Typography } from "@mui/material";
import { FormattedNumber } from "react-intl";

import { styled } from "@mui/material/styles";
import { Fonts } from "@crema/constants/AppEnums";
import { StateDataType } from "@crema/types/models/dashboards/Ecommerce";

const StateWrapper = styled("div")((props) => {
  return {
    flex: 1,
    position: "relative",
    display: "flex",
    alignItems: "center",
    minHeight: 74,
    paddingLeft: 80,
    "& .state-icon": {
      position: "absolute",
      left: 0,
      top: 0,
      zIndex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      width: 84,
      height: "100%",
      transition: "all 0.3s linear",
      "& .hsIcon": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: props.color,
        backgroundColor: alpha(props.color!, 0.2),
        height: 46,
        width: 46,
        borderRadius: "50%",
        transition: "all 0.3s linear",
      },
    },
    "& .hsIcon": {
      "& .material-icons": {
        transition: "all 0.3s linear",
        fontSize: 24,
        position: "absolute",
        left: "50%",
        top: "50%",
        zIndex: 1,
        transform: "translate(-50%, -50%)",
      },
    },
    "& .state-content": {
      padding: 20,
      paddingLeft: 0,
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      transition: "all 0.3s linear",
    },
    "& .state-growth": {
      marginBottom: 4,
      padding: "4px 10px",
      fontSize: 12,
      fontWeight: Fonts.BOLD,
      backgroundColor: props.color + "44",
      color: props.color,
      borderRadius: 30,
    },
    "&:hover": {
      "& .hsIcon": {
        width: "100%",
        height: "100%",
        borderRadius: 0,
        color: "white",
        backgroundColor: props.color,
        "& .material-icons": {
          fontSize: 32,
        },
      },
      "& .state-content": {
        paddingLeft: 16,
      },
    },
  };
});

type Props = {
  data: StateDataType;
};

const StateCard = ({ data }: Props) => {
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        p: 0,
        "&:last-of-type": {
          pb: "0 !important",
        },
      }}
    >
      <StateWrapper color={data.color}>
        <Box className="state-icon">
          <Box className="hsIcon">
            <Icon>{data.icon}</Icon>
          </Box>
        </Box>
        <div className="state-content">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <Typography
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                width: "100%",
                fontWeight: Fonts.SEMI_BOLD,
              }}
              variant="h2"
              component="h2"
            >
              <FormattedNumber value={+data.value} />
            </Typography>
            <Typography
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                width: "100%",
                color: (theme) => theme.palette.text.secondary,
                fontSize: 14,
              }}
            >
              {data.title}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "flex-end",
              flexDirection: "column",
              alignSelf: "flex-end",
              ml: 1,
              "@media only screen and (min-width: 1200px) and (max-width: 1579px)":
                {
                  display: "none",
                },
            }}
          >
            <Box component="span" className="state-growth">
              {data.growth}%
              <Box
                component="span"
                sx={{
                  pt: 0.8,
                  pl: 0.8,
                  lineHeight: 1,
                }}
              >
                ^
              </Box>
            </Box>
            <div>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", whiteSpace: "nowrap" }}
              >
                in 30 days
              </Typography>
            </div>
          </Box>
        </div>
      </StateWrapper>
    </AppCard>
  );
};

export default StateCard;
