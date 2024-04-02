import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import AddNewTask from "../AddNewTask";
import IntlMessages from "@crema/helpers/IntlMessages";
import AppScrollbar from "@crema/components/AppScrollbar";
import AppsSideBarFolderItem from "@crema/components/AppsSideBarFolderItem";
import { Fonts } from "@crema/constants/AppEnums";
import AppList from "@crema/components/AppList";
import ListEmptyResult from "@crema/components/AppList/ListEmptyResult";
import SidebarPlaceholder from "@crema/components/AppSkeleton/SidebarListSkeleton";
import AddIcon from "@mui/icons-material/Add";
import { Zoom } from "@mui/material";
import { styled } from "@mui/material/styles";
import TaskLabelItem from "./LabelItem";
import { useTodoContext } from "../../context/TodoContextProvider";

const ListWrapper = styled(List)(({ theme }) => ({
  marginBottom: 8,
  [theme.breakpoints.up("xl")]: {
    marginBottom: 20,
  },
}));

const TaskSideBar = () => {
  const { labelList, folderList } = useTodoContext();

  const [isAddTaskOpen, setAddTaskOpen] = React.useState(false);

  const onOpenAddTask = () => {
    setAddTaskOpen(true);
  };

  const onCloseAddTask = () => {
    setAddTaskOpen(false);
  };

  return (
    <>
      <Box sx={{ px: { xs: 4, md: 5 }, pt: { xs: 4, md: 5 }, pb: 2.5 }}>
        <Zoom in style={{ transitionDelay: "300ms" }}>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              padding: "8px 28px",
              borderRadius: 30,
              "& .MuiSvgIcon-root": {
                fontSize: 26,
              },
            }}
            startIcon={<AddIcon />}
            onClick={onOpenAddTask}
          >
            <IntlMessages id="todo.addNewTask" />
          </Button>
        </Zoom>
      </Box>
      <AppScrollbar
        sx={{
          height: "calc(100% - 76px)",
        }}
      >
        <Box
          sx={{
            pr: 4,
            pb: { xs: 4, md: 5, lg: 6.2 },
          }}
        >
          <ListWrapper
            // component='nav'
            aria-label="main task folders"
          >
            <AppList
              data={folderList}
              ListEmptyComponent={
                <ListEmptyResult
                  loading={true}
                  placeholder={
                    <Box px={{ xs: 4, md: 5, lg: 6.2 }}>
                      <SidebarPlaceholder />
                    </Box>
                  }
                />
              }
              renderRow={(item) => (
                <AppsSideBarFolderItem
                  key={item.id}
                  item={item}
                  path={`/apps/todo/${item.alias}`}
                />
              )}
            />
          </ListWrapper>

          <Box
            component="h4"
            mt={{ xs: 4, xl: 5 }}
            px={{ xs: 4, md: 5, lg: 6.2 }}
            fontWeight={Fonts.SEMI_BOLD}
          >
            Labels
          </Box>

          <List component="nav" aria-label="main mailbox folders">
            <AppList
              data={labelList}
              ListEmptyComponent={
                <ListEmptyResult
                  loading={true}
                  placeholder={
                    <Box px={{ xs: 4, md: 5, lg: 6.2 }}>
                      <SidebarPlaceholder />
                    </Box>
                  }
                />
              }
              renderRow={(label) => (
                <TaskLabelItem key={label.id} label={label} />
              )}
            />
          </List>
        </Box>
      </AppScrollbar>
      <AddNewTask
        isAddTaskOpen={isAddTaskOpen}
        onCloseAddTask={onCloseAddTask}
      />
    </>
  );
};

export default TaskSideBar;
