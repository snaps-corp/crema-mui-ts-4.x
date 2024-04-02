import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { CoinList2Type } from "@crema/types/models/dashboards/Crypto";
import { SelectChangeEvent } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

type Props = {
  handleCoinChange: (event: SelectChangeEvent<number>) => void;
  coinList: CoinList2Type[];
  selectedCoinId: number;
};
const CoinDropdown = ({
  handleCoinChange,
  coinList,
  selectedCoinId,
}: Props) => {
  return (
    <FormControl
      variant="outlined"
      sx={{
        minWidth: 100,
        width: "100%",
      }}
    >
      <Select
        labelId="selected-coin-select-outlined-label"
        sx={{
          cursor: "pointer",
          "& .MuiSelect-select": {
            py: 1.25,
            pl: 2,
          },
          "&.MuiInputBase-root": {
            backgroundColor: (theme) => theme.palette.background.default,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "0 none",
          },
        }}
        value={selectedCoinId}
        onChange={handleCoinChange}
        defaultValue={coinList[0].id}
      >
        {coinList.map((coin) => (
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
                    marginRight: 1.25,
                    height: 20,
                    width: 20,
                  }}
                  src={coin.icon}
                />
              ) : (
                <Avatar
                  sx={{
                    marginRight: 1.25,
                    height: 20,
                    width: 20,
                  }}
                >
                  {coin.name?.toUpperCase()}
                </Avatar>
              )}
              <Box component="span">{coin.value}</Box>
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
        ))}
      </Select>
    </FormControl>
  );
};

export default CoinDropdown;
