import AppCard from "@crema/components/AppCard";
import AppScrollbar from "@crema/components/AppScrollbar";
import AppList from "@crema/components/AppList";
import TodoCell from "./TodoCell";
import { TodoListType } from "@crema/types/models/dashboards/CRM";
import IntlMessages from "@crema/helpers/IntlMessages";

type Props = {
  data: TodoListType[];
};
const ToDoLists = ({ data }: Props) => {
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={<IntlMessages id="dashboard.crm.toDoLists" />}
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
      action={<IntlMessages id="common.viewAll" />}
    >
      <AppScrollbar style={{ paddingLeft: 20, paddingRight: 20 }}>
        <AppList
          data={data}
          renderRow={(todo) => <TodoCell key={todo.id} todo={todo} />}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default ToDoLists;
