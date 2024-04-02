import React, { useState } from 'react';
import { momentLocalizer, stringOrDate } from 'react-big-calendar';
import moment from 'moment';
import { StyledCalendar } from './Calendar.style';
import './calendar.css';
import CustomToolbar from './CustomToolbar';
import TaskItem from './TaskItem';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import { TodoType } from '@crema/types/models/apps/Todo';
import { useNavigate, useParams } from 'react-router-dom';

const DragAndDropCalendar = withDragAndDrop(StyledCalendar as any);

const localizer = momentLocalizer(moment);

type Props = {
  taskList: TodoType[];
  onUpdateTask: (data: object) => void;
  onSetFilterText: (text: string) => void;
};
const TaskCalender = ({ taskList, onUpdateTask, onSetFilterText }: Props) => {
  const [isAddTaskOpen, setAddTaskOpen] = useState(false);
  const { folder, label } = useParams();
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();
  console.log('taskList: ', taskList);
  const onSelectDate = ({ start }: { start: any }) => {
    console.log('start: ', start);
    setSelectedDate(start);
    setAddTaskOpen(true);
  };

  const onOpenAddTask = (data: any) => {
    if (data) {
      onViewTaskDetail(data);
    } else {
      if (selectedDate) {
        setAddTaskOpen(true);
      } else {
        setAddTaskOpen(false);
      }
    }
  };
  const resizeEvent = ({
    event,
    start,
    end,
  }: {
    event: object;
    start: stringOrDate;
    end: stringOrDate;
    isAllDay: boolean;
  }) => {
    // onUpdateTask({ ...event, startDate: start, endDate: end });
    console.log('resizeEvent: ', event, start, end);
  };

  const onViewTaskDetail = (task: TodoType) => {
    if (folder) navigate(`/apps/calender/${folder}/${task.id}`);
    if (label) navigate(`/apps/calender/label/${label}/${task.id}`);
  };
  const moveEvent = ({
    event,
    start,
    end,
  }: {
    event: object;
    start: stringOrDate;
    end: stringOrDate;
    isAllDay: boolean;
  }) => {
    onUpdateTask({ ...event, startDate: start, endDate: end });
  };

  const getEvents = () => {
    if (taskList?.length > 0)
      return taskList.map((task) => {
        return {
          ...task,
          title: task.title,
          start: new Date(task.startDate),
          end: task.endDate ? new Date(task.endDate) : new Date(),
        };
      });
    return [];
  };
  return (
    <DragAndDropCalendar
      localizer={localizer}
      events={getEvents()}
      // themeVariant="dark"
      views={['month', 'agenda']}
      tooltipAccessor={undefined}
      showMultiDayTimes
      resizable
      onEventResize={resizeEvent}
      onEventDrop={moveEvent}
      onSelectEvent={onOpenAddTask}
      components={{
        toolbar: (props) => (
          <CustomToolbar onSetFilterText={onSetFilterText} {...props} />
        ),
        event: (item) => <TaskItem key={item.title} item={item.event} />,
      }}
      popup
      selectable
      onSelectSlot={onSelectDate}
      defaultView='month'
    />
  );
};
export default TaskCalender;
