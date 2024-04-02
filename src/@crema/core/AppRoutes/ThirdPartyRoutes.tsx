import { rechartsConfigs } from "./RechartRoutes";
import ColorPicker from "../../../modules/thirdParty/reactColor";
import GoogleMap from "../../../modules/thirdParty/googleMap";
import ReactDropzone from "../../../modules/thirdParty/reactDropzone";
import ReactPlayer from "../../../modules/thirdParty/reactPlayer";
import Calendar from "../../../modules/thirdParty/calendar";
import ReactSlick from "../../../modules/thirdParty/reactSlick";
import Timeline from "../../../modules/thirdParty/timeLine";
import FroalaEditor from "../../../modules/thirdParty/froalaEditor";
import FileStack from "../../../modules/thirdParty/filestack";
import FusionCharts from "../../../modules/thirdParty/fusionCharts";
import { RoutePermittedRole } from "@crema/constants/AppEnums";

export const thirdPartyConfigs = [
  ...rechartsConfigs,
  {
    permittedRole: RoutePermittedRole.User,
    path: "/third-party/react-color",
    element: <ColorPicker />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/third-party/google-map",
    element: <GoogleMap />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/third-party/react-dropzone",
    element: <ReactDropzone />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/third-party/react-player",
    element: <ReactPlayer />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/third-party/calendar",
    element: <Calendar />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/third-party/slider",
    element: <ReactSlick />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/third-party/froala-editor",
    element: <FroalaEditor />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/third-party/filestack",
    element: <FileStack />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/third-party/fusion-charts",
    element: <FusionCharts />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/third-party/time-line",
    element: <Timeline />,
  },
];
