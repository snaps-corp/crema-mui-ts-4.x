import ListItem from "@mui/material/ListItem";
import { alpha, styled } from "@mui/material/styles";
import { Fonts } from "@crema/constants/AppEnums";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const StyledListItem = styled(ListItem)(({ theme }) => ({
  paddingTop: 5,
  paddingBottom: 5,
  paddingLeft: 16,
  paddingRight: 16,
  borderRadius: "0 30px 30px 0",
  marginBottom: 1,
  marginTop: 1,
  [theme.breakpoints.up("md")]: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 24,
    paddingRight: 24,
  },

  "& .MuiSvgIcon-root": {
    marginRight: 14,
    fontSize: 20,
  },

  "& .MuiButtonBase-root": {
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
  },

  "&:hover,&:focus,&.active": {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    color: theme.palette.primary.main,
  },

  "&.active": {
    color: theme.palette.primary.main,
    "& $listItemText": {
      "& .MuiTypography-body1": {
        fontWeight: Fonts.SEMI_BOLD,
      },
    },
  },
}));

type Props = {
  item: any;
  checked: number[];
  onChange: (checked: boolean, id: number) => void;
};

const FilterItem = ({ item, checked, onChange }: Props) => {
  return (
    <StyledListItem>
      <FormControlLabel
        control={
          <Checkbox
            onChange={(e) => onChange(e.target.checked, item.id)}
            value={checked.find((data) => data === item.id)}
          />
        }
        label={item.name}
      />
    </StyledListItem>
  );
};

export default FilterItem;
