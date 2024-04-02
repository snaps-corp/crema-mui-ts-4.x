import React from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { Fonts } from "@crema/constants/AppEnums";
import AppCard from "@crema/components/AppCard";
import { useIntl } from "react-intl";

const Price = () => {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event: Event, value: number | number[]) => {
    console.log(event);
    if (Array.isArray(value)) setValue(value);
  };
  const { messages } = useIntl();
  return (
    <AppCard title={messages["dashboard.price"] as string}>
      <Box
        component="p"
        sx={{
          color: "text.secondary",
          fontWeight: Fonts.MEDIUM,
          fontSize: 14,
        }}
      >{`$${value[0]}mi - $${value[1]}mi`}</Box>

      <Slider
        sx={{
          root: {
            color: "#E53E3E",
            height: 10,
            padding: "13px 0",
          },
          thumb: {
            height: 27,
            width: 27,
            backgroundColor: "#fff",
            border: "1px solid currentColor",
            marginTop: -10,
            marginLeft: -13,
            boxShadow: "#ebebeb 0px 2px 2px",
            "&:focus,&:hover,&$active": {
              boxShadow: "#ccc 0px 2px 3px 1px",
            },
            "& .bar": {
              // display: inline-block !important;
              height: 9,
              width: 1,
              backgroundColor: "currentColor",
              marginLeft: 1,
              marginRight: 1,
            },
          },
          active: {},
          valueLabel: {
            left: "calc(-50% + 4px)",
          },
          track: {
            height: 10,
          },
          rail: {
            color: "#d8d8d8",
            opacity: 1,
            height: 10,
            borderRadius: 6,
          },
        }}
        value={value}
        onChange={handleChange}
      />
    </AppCard>
  );
};

export default Price;
