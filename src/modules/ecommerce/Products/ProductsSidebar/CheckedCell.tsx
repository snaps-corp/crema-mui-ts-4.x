import { Box } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import {
  BrandDataType,
  IdealForType,
} from "@crema/types/models/ecommerce/EcommerceApp";

type CheckedCellProps = {
  selected: number[];
  data: IdealForType | BrandDataType;
  onChange: (val: any) => void;
};

const CheckedCell: React.FC<CheckedCellProps> = ({
  selected,
  data,
  onChange,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => onChange(data.id)}
    >
      <Checkbox
        checked={selected.some((item) => item === data.id)}
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <Box>{data.name}</Box>
    </Box>
  );
};

export default CheckedCell;
