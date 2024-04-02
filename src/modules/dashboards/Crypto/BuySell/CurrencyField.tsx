import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import { Fonts } from "@crema/constants/AppEnums";

type Props = {
  label: React.ReactNode;
  value: number;
  onChange: (arg: any) => any;
  coinColor: string;
  shortName: string;
  hideUSD?: boolean;
};
const CurrencyField = ({
  label,
  value,
  onChange,
  coinColor,
  shortName,
  hideUSD = false,
}: Props) => {
  return (
    <FormControl
      fullWidth
      sx={{
        "& .MuiInputLabel-root": {
          transform: "translate(14px, 6px) scale(1)",
        },
        "& legend": {
          display: "none",
        },
      }}
    >
      <InputLabel htmlFor="outlined-adornment-amount">{`Amount (${shortName})`}</InputLabel>
      <OutlinedInput
        sx={{
          "& .MuiOutlinedInput-input": {
            pt: 7.5,
          },
        }}
        id="outlined-adornment-amount"
        label={`Amount (${shortName})`}
        type="number"
        value={value}
        onChange={(e) => onChange(+e.target.value)}
        startAdornment={
          hideUSD ? (
            ""
          ) : (
            <InputAdornment position="start">
              <Box
                component="span"
                sx={{
                  pt: 3.5,
                  fontWeight: Fonts.MEDIUM,
                  fontSize: 14,
                }}
              >
                $
              </Box>
            </InputAdornment>
          )
        }
        endAdornment={
          <InputAdornment position="end">
            <Box
              sx={{
                color: coinColor,
                pt: 3.5,
              }}
              component="span"
            >
              {shortName}
            </Box>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default CurrencyField;
