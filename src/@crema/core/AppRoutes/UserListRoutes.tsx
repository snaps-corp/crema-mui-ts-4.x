import React from "react";
import { RoutePermittedRole } from "@crema/constants/AppEnums";

const Flat = React.lazy(() => import("../../../modules/userList/Flat"));
const Modern = React.lazy(() => import("../../../modules/userList/Modern"));
const Standard = React.lazy(() => import("../../../modules/userList/Standard"));

export const userListConfig = [
  {
    permittedRole: RoutePermittedRole.User,
    path: "/list-type/flat",
    element: <Flat />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/list-type/morden",
    element: <Modern />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/list-type/standard",
    element: <Standard />,
  },
];
