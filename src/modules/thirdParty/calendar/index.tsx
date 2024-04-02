import Grid from "@mui/material/Grid";

import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";
import Basic from "./Basic";

import BasicSource from "./Basic?raw";

import Timeslots from "./Timeslots";

import TimeslotsSource from "./Timeslots?raw";
import Popup from "./Popup";

import PopupSource from "./Popup?raw";
import Selectable from "./Selectable";

import SelectableSource from "./Selectable?raw";

const Calendar = () => {
  return (
    <>
      <AppComponentHeader
        title="React Big Calendar"
        refUrl="http://intljusticemission.github.io/react-big-calendar/examples/index.html#basic"
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title="Basic Calendar"
            component={Basic}
            source={BasicSource}
          />
        </Grid>

        <Grid item xs={12}>
          <AppComponentCard
            title="Timeslots Calendar"
            component={Timeslots}
            source={TimeslotsSource}
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="Popup Calendar"
            component={Popup}
            source={PopupSource}
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="Selectable Calendar"
            component={Selectable}
            source={SelectableSource}
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Calendar;
