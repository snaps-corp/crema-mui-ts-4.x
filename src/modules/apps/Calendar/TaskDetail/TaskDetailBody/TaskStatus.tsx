import InputLabel from "@mui/material/InputLabel";
import IntlMessages from "@crema/helpers/IntlMessages";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { MenuItem } from "@mui/material";
import { putDataApi } from "@crema/hooks/APIHooks";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import { useCalendarContext } from "../../../context/CalendarContextProvider";
import { TodoType } from "@crema/types/models/apps/Todo";

type Props = {
  selectedTask: TodoType;
  onUpdateSelectedTask: (data: TodoType) => void;
};

const TaskStatus = ({ selectedTask, onUpdateSelectedTask }: Props) => {
  console.log(onUpdateSelectedTask, " onUpdateSelectedTask");
  console.log("selectedTask.status", selectedTask);
  const { statusList } = useCalendarContext();
  const infoViewActionsContext = useInfoViewActionsContext();
  console.log(statusList, " statusList");

  const onChangeStatus = (event: SelectChangeEvent<number>) => {
    const task = selectedTask;
    task.status = event.target.value as number;
    putDataApi<TodoType>("/api/calendar/task/", infoViewActionsContext, {
      task: selectedTask,
    })
      .then((data) => {
        onUpdateSelectedTask(data);
        infoViewActionsContext.showMessage("Task Updated Successfully");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  return (
    <FormControl fullWidth sx={{ minWidth: 121 }} variant="outlined">
      <InputLabel id="status-select-outlined-label">
        <IntlMessages id="common.status" />
      </InputLabel>
      <Select
        labelId="status-select-outlined-label"
        label={<IntlMessages id="common.status" />}
        value={selectedTask.status}
        onChange={(event) => onChangeStatus(event)}
        sx={{
          cursor: "pointer",
          "& .MuiOutlinedInput-input": {
            // paddingBottom: 2.5,
            // paddingTop: 3.5,
          },
        }}
      >
        {statusList.map((status) => {
          return (
            <MenuItem
              key={status.id}
              value={status.id}
              sx={{
                padding: 2,
                cursor: "pointer",
              }}
            >
              {status.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default TaskStatus;
