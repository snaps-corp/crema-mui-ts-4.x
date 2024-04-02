import InputLabel from "@mui/material/InputLabel";
import IntlMessages from "@crema/helpers/IntlMessages";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import CurrencyCell from "./CurrencyCell";
import { CoinListType } from "@crema/types/models/dashboards/Crypto";
import { SelectChangeEvent } from "@mui/material";

type Props = {
  coinList: CoinListType[];
  selectedCoinId: number;
  handleCoinChange: (event: SelectChangeEvent<number>) => void;
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
        "& .MuiInputLabel-root": {
          transform: "translate(14px, 2px) scale(1)",
        },
        "& legend": {
          display: "none",
        },
      }}
    >
      <InputLabel id="selected-coin-select-outlined-label">
        <IntlMessages id="dashboard.crypto.coinName" />
      </InputLabel>
      <Select
        labelId="selected-coin-select-outlined-label"
        sx={{
          cursor: "pointer",
          "& .MuiOutlinedInput-input": {
            pt: 6.5,
          },
        }}
        value={selectedCoinId}
        label={<IntlMessages id="dashboard.crypto.coinName" />}
        onChange={handleCoinChange}
      >
        {coinList.map((coin) => {
          return <CurrencyCell key={coin.id} coin={coin} />;
        })}
      </Select>
    </FormControl>
  );
};

export default CoinDropdown;
