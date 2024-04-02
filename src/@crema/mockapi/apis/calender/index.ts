import { AxiosRequestConfig } from 'axios';
import mock from '../MockConfig';
import { staffList } from '../../fakedb/apps/todo/staffList';
import priorityList from '../../fakedb/apps/todo/priorityList';
import todoList from '../../fakedb/apps/todo/todoList';
import folderList from '../../fakedb/apps/todo/folderList';
import { labelList, onGetLabel } from '../../fakedb/apps/todo/labelList';
import statusList from '../../fakedb/apps/todo/statusList';
import { TodoType } from '@crema/types/models/apps/Todo';

let todoData = todoList;

const onGetTaskList = (name: string, data: TodoType[]) => {
  switch (name) {
    case 'all': {
      return data.filter((task) => task.folderValue !== 126);
    }

    case 'starred': {
      return data.filter((task) => task.folderValue !== 126 && task.isStarred);
    }

    case 'priority': {
      return data.filter(
        (task) => task.folderValue !== 126 && task.priority.type === 1,
      );
    }

    case 'scheduled': {
      const folderId = folderList.find((folder) => folder.alias === name)?.id;
      return data.filter((task) => task.folderValue === folderId);
    }

    case 'today': {
      const folderId = folderList.find((folder) => folder.alias === name)?.id;
      return data.filter((task) => task.folderValue === folderId);
    }

    case 'completed': {
      return data.filter(
        (task) => task.folderValue !== 126 && task.status === 3,
      );
    }

    case 'deleted': {
      return data.filter((task) => task.folderValue === 126);
    }
    default: {
      return data;
    }
  }
};

mock.onGet('/api/calendar/task/list').reply((config: AxiosRequestConfig) => {
  const params = config.params;
  let folderTaskList = [];
  if (params.type === 'folder') {
    folderTaskList = onGetTaskList(params.name, todoData);
  } else {
    const labelType = labelList.find((label) => label.alias === params.name)
      ?.id;
    folderTaskList = todoData.filter((task) => {
      const label = task.label.find((label) => label.id === labelType);
      if (label && task.folderValue !== 126) {
        return task;
      } else return null;
    });
  }
  const index = params.page * 15;
  const count = folderTaskList.length;
  const data =
    folderTaskList.length > 15
      ? folderTaskList.slice(index, index + 15)
      : folderTaskList;
  return [200, { data, count }];
});

mock.onGet('/api/calendar/task/').reply((config: AxiosRequestConfig) => {
  const { params } = config;
  const response = todoData.find((task) => task.id === parseInt(params.id));
  return [200, response];
});

mock.onPut('/api/calendar/task/').reply((request: AxiosRequestConfig) => {
  const { task } = JSON.parse(request.data);
  // task.assignedTo = staffList.find(staff => staff.id === task.assignedTo);
  todoData = todoData.map((item) => (item.id === task.id ? task : item));
  return [200, task];
});

mock.onGet('/api/calendar/folders/list').reply(200, folderList);

mock.onGet('/api/calendar/labels/list').reply(200, labelList);

mock.onGet('/api/calendar/staff/list').reply(200, staffList);

mock.onGet('/api/calendar/priority/list').reply(200, priorityList);

mock.onGet('/api/calendar/status/list').reply(200, statusList);

mock
  .onPut('/api/calendar/update/starred')
  .reply((request: AxiosRequestConfig) => {
    const { taskIds, status } = JSON.parse(request.data);
    todoData = todoData.map((task) => {
      if (taskIds.includes(task.id)) {
        task.isStarred = !!status;
        return task;
      }
      return task;
    });
    return [200, taskIds];
  });

mock
  .onPut('/api/calendar/update/label')
  .reply((request: AxiosRequestConfig) => {
    const { taskIds, type } = JSON.parse(request.data);
    todoData = todoData.map((task) => {
      if (taskIds.includes(task.id)) {
        if (task.label.includes(type)) {
          task.label = task.label.filter((label) => label !== type);
          return task;
        }
        task.label = task.label.concat(onGetLabel(type));
        return task;
      }
      return task;
    });
    const updatedTasks = todoData.filter((task) => taskIds.includes(task.id));
    return [200, updatedTasks];
  });

mock
  .onPut('/api/calendar/update/folder')
  .reply((request: AxiosRequestConfig) => {
    const { taskIds, type, name, page } = JSON.parse(request.data);
    todoData = todoData.map((task) => {
      if (taskIds.includes(task.id)) {
        task.folderValue = 126;
        return task;
      }
      return task;
    });
    let folderTaskList: TodoType[] = [];
    if (type === 'folder') {
      folderTaskList = onGetTaskList(name, todoData);
    } else {
      const labelType = labelList.find((label) => label.alias === name)?.id;
      folderTaskList = todoData.filter((task) => {
        const label = task.label.find((label) => label.id === labelType);
        if (label && task.folderValue !== 126) {
          return task;
        }
        return null;
      });
    }
    const index = page * 15;
    const count = folderTaskList.length;
    const data =
      folderTaskList.length > 15
        ? folderTaskList.slice(index, index + 15)
        : folderTaskList;
    return [200, { data, count }];
  });

mock
  .onPut('/api/calendar/update/starred')
  .reply((request: AxiosRequestConfig) => {
    const { taskIds, status } = JSON.parse(request.data);
    todoData = todoData.map((task) => {
      if (taskIds.includes(task.id)) {
        task.isStarred = !!status;
        return task;
      }
      return task;
    });
    const updatedTasks = todoData.filter((task) => taskIds.includes(task.id));
    return [200, updatedTasks];
  });

mock.onPost('/api/calendar/compose').reply((request: AxiosRequestConfig) => {
  const { task } = JSON.parse(request.data);
  task.assignedTo = staffList.find((staff) => staff.id === task.assignedTo);
  task.priority = priorityList.find(
    (priority) => priority.type === task.priority,
  );
  todoData = [task, ...todoData];
  return [200, task];
});
