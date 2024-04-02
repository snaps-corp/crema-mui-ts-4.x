import InputLabel from "@mui/material/InputLabel";
import IntlMessages from "@crema/helpers/IntlMessages";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { MenuItem } from "@mui/material";
import { putDataApi } from "@crema/hooks/APIHooks";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import { useTodoContext } from "../../../context/TodoContextProvider";
import { TodoType } from "@crema/types/models/apps/Todo";

type Props = {
  selectedTask: TodoType;
  onUpdateSelectedTask: (data: TodoType) => void;
};

const TaskStatus = ({ selectedTask, onUpdateSelectedTask }: Props) => {
  console.log("selectedTask", selectedTask);
  const { statusList } = useTodoContext();
  console.log("statusList", statusList);
  const infoViewActionsContext = useInfoViewActionsContext();

  const onChangeStatus = (event: SelectChangeEvent<number>) => {
    const task = selectedTask;
    task.status = event.target.value as number;
    putDataApi<TodoType>("/api/todoApp/task/", infoViewActionsContext, {
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
    <FormControl variant="outlined">
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
            paddingBottom: 2.5,
            paddingTop: 2.5,
          },
        }}
      >
        {statusList.map((status) => {
          return (
            <MenuItem
              key={status.type}
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
