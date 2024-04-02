import CloseIcon from "@mui/icons-material/Close";
import TaskItem from "./TaskItem";
import AppList from "@crema/components/AppList";
import AppCard from "@crema/components/AppCard";
import { useIntl } from "react-intl";
import AppScrollbar from "@crema/components/AppScrollbar";
import { TaskListType } from "@crema/types/models/dashboards/Widgets";

type TaskListProps = {
  data: TaskListType[];
};

const TaskList: React.FC<TaskListProps> = ({ data }) => {
  const taskData = data;

  const { messages } = useIntl();
  return (
    <AppCard
      title={messages["dashboard.taskList"] as string}
      contentStyle={{ px: 0 }}
      action={
        <CloseIcon
          sx={{
            cursor: "pointer",
          }}
        />
      }
    >
      <AppScrollbar
        sx={{
          height: 263,
        }}
      >
        <AppList
          data={taskData}
          renderRow={(item) => {
            return <TaskItem key={item.id} item={item} />;
          }}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default TaskList;
