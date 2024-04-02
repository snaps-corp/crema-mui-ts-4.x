import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";

import { blue, green, red } from "@mui/material/colors";
import { LabelType } from "@crema/types/models/apps/Mail";

const labelList: LabelType[] = [
  {
    id: 211,
    name: "Crema",
    alias: "crema",
    color: red[500],
    icon: <WorkIcon />,
  },
  {
    id: 212,
    name: "Personal",
    alias: "personal",
    color: blue[500],
    icon: <PersonIcon />,
  },
  {
    id: 213,
    name: "Work",
    alias: "work",
    color: green[500],
    icon: <WorkIcon />,
  },
  {
    id: 214,
    name: "Paypal",
    alias: "paypal",
    color: "grey.700",
    icon: <WorkIcon />,
  },
];
export default labelList;
