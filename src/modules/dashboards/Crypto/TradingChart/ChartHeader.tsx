import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import { Fonts } from "@crema/constants/AppEnums";
import { CoinListType } from "@crema/types/models/dashboards/Crypto";
import cryptoData from "@crema/mockapi/fakedb/dashboard/crypto";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import Avatar from "@mui/material/Avatar";

const ChartHeader = () => {
  const [age, setAge] = React.useState(1);

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "space-between",
        mx: -2,
      }}
    >
      <Box sx={{ px: 2, pb: { xs: 2, lg: 0 } }}>
        <Select value={age} defaultValue={1} onChange={handleChange}>
          {cryptoData.buySell.coinList.map((coin: CoinListType) => {
            return (
              <MenuItem
                value={coin.id}
                key={coin.id}
                sx={{
                  cursor: "pointer",
                }}
              >
                <Box display="flex" alignItems="center">
                  {coin.icon ? (
                    <Avatar
                      sx={{
                        marginRight: 2.5,
                        height: 24,
                        width: 24,
                      }}
                      src={coin.icon}
                    />
                  ) : (
                    <Avatar
                      sx={{
                        marginRight: 2.5,
                        height: 24,
                        width: 24,
                      }}
                    >
                      {coin.name.toUpperCase()}
                    </Avatar>
                  )}
                  <Box component="span">{coin.name}</Box>
                  <Box
                    component="span"
                    sx={{
                      ml: 3,
                      color: "text.secondary",
                    }}
                  >
                    {coin.shortName}
                  </Box>
                </Box>
              </MenuItem>
            );
          })}
        </Select>
      </Box>
      <Box sx={{ px: 2, pb: { xs: 2, lg: 0 } }}>
        <Box
          component="h3"
          sx={{
            color: "text.primary",
            fontWeight: Fonts.SEMI_BOLD,
          }}
        >
          $ 41.580
        </Box>
        <Box
          sx={{
            color: "text.secondary",
          }}
        >
          Low Price
        </Box>
      </Box>
      <Box sx={{ px: 2, pb: { xs: 2, lg: 0 } }}>
        <Box
          component="h3"
          sx={{
            color: "#11C15B",
            fontWeight: Fonts.SEMI_BOLD,
          }}
        >
          $ 41.580
        </Box>
        <Box
          sx={{
            color: "text.secondary",
          }}
        >
          High Price
        </Box>
      </Box>
      <Box sx={{ px: 2, pb: { xs: 2, lg: 0 } }}>
        <Box
          component="h3"
          sx={{
            color: "text.primary",
            fontWeight: Fonts.SEMI_BOLD,
          }}
        >
          $ 41.580
        </Box>
        <Box
          sx={{
            color: "text.secondary",
          }}
        >
          24H Volume
        </Box>
      </Box>
      <Box sx={{ px: 2, pb: { xs: 2, lg: 0 } }}>
        <Box
          component="h3"
          sx={{
            color: "#F60002",
            fontWeight: Fonts.SEMI_BOLD,
          }}
        >
          $ 41.580
        </Box>
        <Box
          sx={{
            color: "text.secondary",
          }}
        >
          24H Change
        </Box>
      </Box>
    </Box>
  );
};

export default ChartHeader;
