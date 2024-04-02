import DoneIcon from "@mui/icons-material/Done";
import IntlMessages from "@crema/helpers/IntlMessages";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import { putDataApi } from "@crema/hooks/APIHooks";
import { TodoType } from "@crema/types/models/apps/Todo";

const StatusButton = styled(Button)(({ theme }) => ({
  fontSize: 12,
  [theme.breakpoints.up("lg")]: {
    fontSize: 14,
  },
}));

const StyledDoneIcon = styled(DoneIcon)(({ theme }) => ({
  marginRight: 4,
  fontSize: 18,
  verticalAlign: "middle",
  [theme.breakpoints.up("sm")]: {
    marginRight: 8,
  },
}));

type Props = {
  selectedTask: TodoType;
  onUpdateSelectedTask: (data: TodoType) => void;
};

const StatusToggleButton = ({ selectedTask, onUpdateSelectedTask }: Props) => {
  const infoViewActionsContext = useInfoViewActionsContext();

  const onChangeTaskStatus = (status: number) => {
    const task = selectedTask;
    task.status = status;
    putDataApi<TodoType>("/api/todoApp/task/", infoViewActionsContext, {
      task,
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
    <>
      {selectedTask.status === 3 ? (
        <StatusButton
          variant="contained"
          color="primary"
          startIcon={<StyledDoneIcon />}
          onClick={() => onChangeTaskStatus(1)}
        >
          <IntlMessages id="todo.completed" />
        </StatusButton>
      ) : (
        <StatusButton
          variant="outlined"
          color="primary"
          startIcon={<StyledDoneIcon />}
          onClick={() => onChangeTaskStatus(3)}
        >
          <IntlMessages id="todo.markAsCompleted" />
        </StatusButton>
      )}
    </>
  );
};

export default StatusToggleButton;
