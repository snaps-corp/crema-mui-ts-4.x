import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import { Fonts } from "@crema/constants/AppEnums";
import { ColorsListType } from "@crema/types/models/dashboards/Widgets";

type ColorItemProps = {
  item: ColorsListType;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    item: ColorsListType,
  ) => void;
};

const ColorItem: React.FC<ColorItemProps> = (props) => {
  const { item, handleChange } = props;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        px: 5,
      }}
      key={item.id}
      className="item-hover"
    >
      <Box
        sx={{
          mr: 2,
          ml: -3,
        }}
      >
        <Checkbox
          sx={{
            color: item.color + `!important`,
          }}
          checked={item.isChecked}
          onChange={(e) => handleChange(e, item)}
        />
      </Box>
      <Box
        component="span"
        sx={{
          color: item.color as string,
          fontWeight: Fonts.MEDIUM,
          fontSize: 14,
        }}
      >
        {item.name}
      </Box>
    </Box>
  );
};

export default ColorItem;
