import React from "react";
import { Navigate } from "react-router-dom";
import { RoutePermittedRole } from "@crema/constants/AppEnums";

const Mail = React.lazy(() => import("../../../modules/apps/Mail"));
const ToDo = React.lazy(() => import("../../../modules/apps/ToDo"));
const Contact = React.lazy(() => import("../../../modules/apps/Contact"));
const ScrumBoard = React.lazy(() => import("../../../modules/apps/ScrumBoard"));
const Chat = React.lazy(() => import("../../../modules/apps/Chat"));
const Wall = React.lazy(() => import("../../../modules/apps/Wall"));
const Calendar = React.lazy(() => import("../../../modules/apps/Calendar"));
export const appsConfig = [
  {
    permittedRole: RoutePermittedRole.User,
    path: [
      "/apps/mail/label/:label",
      "/apps/mail/label/:label/:id",
      "/apps/mail/:folder",
      "/apps/mail/:folder/:id",
    ],
    element: <Mail />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/mail",
    element: <Navigate to="/apps/mail/inbox" />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: [
      "/apps/todo/label/:label",
      "/apps/todo/label/:label/:id",
      "/apps/todo/:folder",
      "/apps/todo/:folder/:id",
    ],
    element: <ToDo />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: [
      "/apps/calender/label/:label",
      "/apps/calender/label/:label/:id",
      "/apps/calender/:folder",
      "/apps/calender/:folder/:id",
    ],
    element: <Calendar />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/todo",
    element: <Navigate to="/apps/todo/all" />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/calender",
    element: <Navigate to="/apps/calender/all" />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: ["/apps/contact/folder/:name", "/apps/contact/label/:name"],
    element: <Contact />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/contact",
    element: <Navigate to="/apps/contact/folder/all" />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: ["/apps/chat"],
    element: <Chat />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: ["/apps/scrum-board/:id", "/apps/scrum-board"],
    element: <ScrumBoard />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: ["/apps/wall"],
    element: <Wall />,
  },
];
