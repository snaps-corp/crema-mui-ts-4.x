import { useNavigate } from "react-router-dom";
import IntlMessages from "@crema/helpers/IntlMessages";
import Box from "@mui/material/Box";
import AppsStarredIcon from "@crema/components/AppsStarredIcon";
import StatusToggleButton from "./StatusToggleButton";
import AppsDeleteIcon from "@crema/components/AppsDeleteIcon";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AppTooltip from "@crema/components/AppTooltip";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import { putDataApi } from "@crema/hooks/APIHooks";
import { TodoType } from "@crema/types/models/apps/Todo";

type Props = {
  selectedTask: TodoType;
  onUpdateSelectedTask: (data: TodoType) => void;
};

const TaskDetailHeader = (props: Props) => {
  const { selectedTask, onUpdateSelectedTask } = props;
  const infoViewActionsContext = useInfoViewActionsContext();

  const navigate = useNavigate();

  const onClickBackButton = () => {
    navigate(-1);
  };

  const onChangeStarred = (checked: boolean) => {
    putDataApi<TodoType[]>(
      "/api/calendar/update/starred",
      infoViewActionsContext,
      {
        taskIds: [selectedTask.id],
        status: checked,
      },
    )
      .then((data) => {
        onUpdateSelectedTask(data[0]);
        infoViewActionsContext.showMessage(
          data[0].isStarred
            ? "Task Marked as Starred Successfully"
            : "Task Marked as Unstarred Successfully",
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onDeleteTask = () => {
    const task = selectedTask;
    task.folderValue = 126;
    putDataApi<TodoType>("/api/calendar/task/", infoViewActionsContext, {
      task,
    })
      .then((data) => {
        onUpdateSelectedTask(data);
        navigate(-1);
        infoViewActionsContext.showMessage("Task Deleted Successfully");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  return (
    <>
      <Box
        sx={{
          cursor: "pointer",
        }}
        component="span"
        mr={{ xs: 2, sm: 4 }}
        onClick={onClickBackButton}
      >
        <AppTooltip title={<IntlMessages id="common.back" />}>
          <ArrowBackIcon
            sx={{
              color: "text.secondary",
            }}
          />
        </AppTooltip>
      </Box>

      <StatusToggleButton
        selectedTask={selectedTask}
        onUpdateSelectedTask={onUpdateSelectedTask}
      />

      <Box
        component="span"
        sx={{
          marginLeft: "auto",
          display: { xs: "none", sm: "block" },
        }}
      >
        <AppsStarredIcon item={selectedTask} onChange={onChangeStarred} />
      </Box>

      <AppsDeleteIcon
        deleteAction={onDeleteTask}
        deleteTitle={<IntlMessages id="todo.deleteMessage" />}
        sx={{
          color: "text.disabled",
        }}
      />
    </>
  );
};

export default TaskDetailHeader;
