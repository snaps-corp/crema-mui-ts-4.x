import { useState } from "react";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { alpha, SelectChangeEvent } from "@mui/material";
import Box from "@mui/material/Box";
import { useIntl } from "react-intl";
import ChangeStaff from "./ChangeStaff";
import TaskStatus from "./TaskStatus";
import TaskPriority from "./TaskPriority";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useAuthUser } from "@crema/hooks/AuthHooks";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Fonts } from "@crema/constants/AppEnums";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import { putDataApi } from "@crema/hooks/APIHooks";
import CommentsLists from "./CommentsList";
import AssignedStaff from "./AssignedStaff";
import TodoDatePicker from "./DatePicker";
import EditButton from "./EditButton";
import TaskCreatedByInfo from "./TaskCreatedByInfo";
import TaskLabels from "../../../Calendar/TasksList/Labels";
import { useTodoContext } from "../../../context/TodoContextProvider";
import { TodoType } from "@crema/types/models/apps/Todo";
import { getDateObject, getFormattedDate } from "@crema/helpers/DateHelper";

type Props = {
  selectedTask: TodoType;
  onUpdateSelectedTask: (data: TodoType) => void;
};

const TaskDetailBody = (props: Props) => {
  const { selectedTask, onUpdateSelectedTask } = props;
  const infoViewActionsContext = useInfoViewActionsContext();

  const { user } = useAuthUser();
  const { staffList } = useTodoContext();

  const [isEdit, setEdit] = useState(false);

  const [content, setContent] = useState(selectedTask.content);

  const [comment, setComment] = useState("");

  const [scheduleDate, setScheduleDate] = useState(
    getDateObject(selectedTask.startDate),
  );

  const [selectedStaff, setStaff] = useState(selectedTask.assignedTo);

  const onClickEditButton = () => {
    setEdit(true);
  };

  const onDoneEditing = () => {
    const task = selectedTask;
    task.content = content;
    task.startDate = getFormattedDate(scheduleDate);
    task.assignedTo = selectedStaff;
    putDataApi<TodoType>("/api/todoApp/task/", infoViewActionsContext, {
      task,
    })
      .then((data) => {
        onUpdateSelectedTask(data);
        setEdit(!isEdit);
        infoViewActionsContext.showMessage("Task Updated Successfully");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onAddComments = () => {
    const task = selectedTask;
    task.comments = task.comments.concat({
      comment: comment,
      name: user.displayName ? user.displayName : "User",
      image: user.photoURL,
      date: getDateObject().format("ll"),
    });
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
    setComment("");
  };

  const handleStaffChange = (event: SelectChangeEvent<number>) => {
    const staff = staffList.find((staff) => staff.id === event.target.value)!;
    setStaff(staff);
  };

  const { messages } = useIntl();

  return (
    <Box
      sx={{
        padding: "12px 20px",
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <Box
        sx={{
          mb: 5,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { sm: "center" },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            component="h2"
            variant="h2"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              marginRight: 3.5,
              fontSize: 16,
              fontWeight: Fonts.MEDIUM,
              mb: { xs: 3, sm: 0 },
            }}
          >
            {selectedTask.title}
          </Typography>

          <Box mr={1} mb={{ xs: 3, sm: 0 }}>
            <Box
              component="span"
              sx={{
                px: 3,
                py: 1,
                color: selectedTask?.priority?.color,
                bgcolor:
                  selectedTask?.priority?.color &&
                  alpha(selectedTask?.priority?.color, 0.1),
                fontSize: 14,
                borderRadius: 30,
                display: "inline-block",
              }}
            >
              {selectedTask?.priority?.name}
            </Box>
          </Box>
        </Box>

        <Box display="flex" alignItems="center" ml={{ sm: "auto" }}>
          <TaskLabels labels={selectedTask.label} />
          <Box component="span" color="text.secondary" fontSize={14} ml={2}>
            Nov 21, 2020, 9:46 AM
          </Box>
        </Box>
      </Box>

      <Box mb={0.5} display="flex">
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          mr={2}
          alignItems={{ sm: "center" }}
        >
          {isEdit ? (
            <>
              <Box mb={{ xs: 3, sm: 0 }}>
                <ChangeStaff
                  selectedStaff={selectedStaff}
                  handleStaffChange={handleStaffChange}
                />
              </Box>
              <TodoDatePicker date={scheduleDate} setDate={setScheduleDate} />
            </>
          ) : (
            <AssignedStaff assignedStaff={selectedTask.assignedTo} />
          )}
        </Box>

        <Box ml="auto">
          {!isEdit ? (
            <EditButton
              action={onClickEditButton}
              title={
                <EditOutlinedIcon
                  sx={{
                    position: "relative",
                  }}
                />
              }
            />
          ) : (
            <EditButton
              action={onDoneEditing}
              title={
                <CheckCircleOutlineIcon
                  sx={{
                    position: "relative",
                  }}
                />
              }
            />
          )}
        </Box>
      </Box>

      <Divider
        sx={{
          marginTop: 4,
          marginBottom: 5,
        }}
      />

      {!isEdit ? (
        <Typography sx={{ color: "text.secondary" }}>{content}</Typography>
      ) : (
        <TextField
          multiline
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              padding: "10px 15px",
            },
          }}
          rows="6"
          variant="outlined"
          placeholder={messages["common.description"] as string}
          name="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      )}

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { sm: "center" },
          mb: 1,
          pt: 5,
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", mb: { xs: 3, sm: 0 } }}
        >
          <Box mr={5}>
            <TaskStatus
              selectedTask={selectedTask}
              onUpdateSelectedTask={onUpdateSelectedTask}
            />
          </Box>

          <Box mr={5}>
            <TaskPriority
              selectedTask={selectedTask}
              onUpdateSelectedTask={onUpdateSelectedTask}
            />
          </Box>
        </Box>

        <TaskCreatedByInfo
          createdBy={selectedTask.createdBy}
          createdOn={selectedTask.createdOn}
        />
      </Box>

      <Divider
        sx={{
          marginTop: 4,
          marginBottom: 5,
        }}
      />

      <CommentsLists comments={selectedTask.comments} />

      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          marginTop: "auto",
        }}
      >
        <TextField
          multiline
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              padding: "10px 15px",
            },
          }}
          minRows={2}
          maxRows={4}
          variant="outlined"
          placeholder={messages["common.writeComment"] as string}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <Button
          sx={{
            position: "relative",
            width: 41,
            height: 41,
            minWidth: 41,
            padding: 2,
            marginLeft: 3,
            "& svg": {
              marginLeft: 0.75,
            },
          }}
          variant="contained"
          color="primary"
          disabled={!comment}
          onClick={onAddComments}
        >
          <SendOutlinedIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default TaskDetailBody;
