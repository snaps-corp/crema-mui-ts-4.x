import React from "react";
import Checkbox from "@mui/material/Checkbox/index";
import Box from "@mui/material/Box";
import { useIntl } from "react-intl";
import AppSearchBar from "@crema/components/AppSearchBar";
import CheckedTasksActions from "./CheckedTasksActions";
import AppsPagination from "@crema/components/AppsPagination";
import Hidden from "@mui/material/Hidden";
import SelectTasksDropdown from "./SelectTasksDropdown";
import ViewSelectButtons from "./ViewSelectButtons";
import {
  useTodoActionsContext,
  useTodoContext,
} from "../../../context/TodoContextProvider";
import { TodoType } from "@crema/types/models/apps/Todo";

type Props = {
  onUpdateTasks: (tasks: TodoType[]) => void;
  checkedTasks: number[];
  setCheckedTasks: (data: number[]) => void;
  filterText: string;
  onSetFilterText: (data: string) => void;
};

const TaskContentHeader = (props: Props) => {
  const {
    onUpdateTasks,
    checkedTasks,
    setCheckedTasks,
    filterText,
    onSetFilterText,
  } = props;

  const { taskLists, page, viewMode } = useTodoContext();
  const { onPageChange, setViewMode } = useTodoActionsContext();

  const onHandleMasterCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.checked) {
      const taskIds = taskLists?.data?.map((task) => task.id);
      setCheckedTasks(taskIds);
    } else {
      setCheckedTasks([]);
    }
  };

  const onSelectTasks = (value: number) => {
    switch (value) {
      case 0:
        setCheckedTasks(taskLists?.data?.map((task) => task.id));
        break;
      case 1:
        setCheckedTasks([]);
        break;

      case 2:
        setCheckedTasks(
          taskLists?.data
            ?.filter((task) => task.isStarred)
            .map((task) => task.id),
        );
        break;

      case 3:
        setCheckedTasks(
          taskLists?.data
            ?.filter((task) => task.isAttachment)
            .map((task) => task.id),
        );
        break;

      default:
        setCheckedTasks([]);
    }
  };

  const { messages } = useIntl();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          alignItems: "center",
        }}
      >
        <span>
          <Checkbox
            sx={{
              color: "text.disabled",
            }}
            indeterminate={
              checkedTasks.length > 0 &&
              checkedTasks?.length < taskLists?.data?.length
            }
            checked={
              taskLists?.data?.length > 0 &&
              checkedTasks?.length === taskLists?.data?.length
            }
            onChange={onHandleMasterCheckbox}
          />
        </span>
        <Box sx={{ mr: 3 }}>
          <AppSearchBar
            iconPosition="right"
            overlap={false}
            value={filterText}
            onChange={(event: any) => onSetFilterText(event.target.value)}
            placeholder={messages["common.searchHere"] as string}
          />
        </Box>
        <SelectTasksDropdown
          onSelectTasks={onSelectTasks}
          checkedTasks={checkedTasks}
        />
        {checkedTasks.length > 0 ? (
          <Box
            component="span"
            sx={{
              mr: { sm: 4 },
              display: "flex",
            }}
          >
            <CheckedTasksActions
              checkedTasks={checkedTasks}
              setCheckedTasks={setCheckedTasks}
              onUpdateTasks={onUpdateTasks}
            />
          </Box>
        ) : null}
      </Box>

      <Box
        sx={{
          mr: { xs: 3, xl: 4 },
        }}
      >
        <ViewSelectButtons viewMode={viewMode} onViewModeSelect={setViewMode} />
      </Box>

      <Hidden smDown>
        {taskLists?.data?.length > 0 ? (
          <AppsPagination
            sx={{
              paddingRight: 2,
              paddingLeft: 2,
              "& .MuiToolbar-root": {
                paddingLeft: 0,
              },
              "& .MuiTablePagination-actions": {
                marginLeft: 0,
                "& .MuiButtonBase-root": {
                  padding: 2,
                },
              },
            }}
            count={taskLists?.count as number}
            page={page}
            onPageChange={onPageChange}
          />
        ) : null}
      </Hidden>
    </>
  );
};

export default TaskContentHeader;

TaskContentHeader.defaultProps = {
  checkedTasks: [],
  filterText: "",
  page: 0,
};
