import { DatePicker } from "@mui/x-date-pickers";
import IntlMessages from "@crema/helpers/IntlMessages";
import Box from "@mui/material/Box";
import { Dayjs } from "dayjs";

type Props = {
  date: Dayjs;
  setDate: (date: Dayjs) => void;
};

const AppDatePicker = ({ date, setDate }: Props) => {
  return (
    <Box
      sx={{
        ml: { xs: 0, sm: 5 },
        mt: { xs: 2, sm: 0 },
      }}
    >
      <DatePicker
        label={<IntlMessages id="common.startDate" />}
        value={date}
        onChange={(newValue) => setDate(newValue as Dayjs)}
      />
    </Box>
  );
};

export default AppDatePicker;
