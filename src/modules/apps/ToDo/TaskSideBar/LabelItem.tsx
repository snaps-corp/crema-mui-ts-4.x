import React from "react";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import { alpha, styled } from "@mui/material/styles";
import { Fonts } from "@crema/constants/AppEnums";
import AppNavLink from "@crema/components/AppNavLink";
import { LabelType } from "@crema/types/models/apps/Todo";

interface NavListItemProps {
  [x: string]: any;
}

const NavListItem: React.FC<NavListItemProps> = (props) => (
  <ListItem component={AppNavLink} {...props} />
);

const StyledListItem = styled(NavListItem)(({ theme }) => ({
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
  label: LabelType;
};

const LabelItem = ({ label }: Props) => {
  return (
    <StyledListItem
      key={label.id}
      to={`/apps/todo/label/${label.alias}`}
      component={AppNavLink}
      activeClassName="active"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <LabelOutlinedIcon style={{ color: `${label.color}` }} />

      <ListItemText
        sx={{
          "& .MuiTypography-body1": {
            fontSize: 14,
          },
        }}
        primary={label.name}
      />
    </StyledListItem>
  );
};

export default LabelItem;
