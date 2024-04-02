import React, { useState } from 'react';
import { momentLocalizer, SlotInfo } from 'react-big-calendar';
import dayjs from 'dayjs';
import { StyledCalendar } from './Calendar.style';
import { Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import './calendar.css';
import AppTooltip from '@crema/components/AppTooltip';
import CustomToolbar from './CustomToolbar';
import { TodoType } from '@crema/types/models/apps/Todo';

const localizer = momentLocalizer(dayjs);

type Props = {
  taskList: TodoType[];
};

const TaskCalender = ({ taskList }: Props) => {
  const [isAddTaskOpen, setAddTaskOpen] = useState(false);
  const navigate = useNavigate();
  const { folder, label } = useParams();
  const [selectedDate, setSelectedDate] = useState<string | undefined>(
    undefined,
  );

  const onSelectDate = (info: SlotInfo) => {
    setSelectedDate(String(info.start));
    setAddTaskOpen(true);
  };

  const onViewTaskDetail = (task: TodoType) => {
    if (folder) navigate(`/apps/todo/${folder}/${task.id}`);
    if (label) navigate(`/apps/todo/label/${label}/${task.id}`);
  };

  const onCloseAddTask = () => {
    setAddTaskOpen(false);
  };
  const getEvents = () => {
    if (taskList?.length > 0)
      return taskList.map((task) => {
        return {
          ...task,
          title: task.title,
          start: task.startDate,
          end: task.startDate,
          allDay: true,
        };
      });
    return [];
  };
  return (
    <StyledCalendar
      localizer={localizer}
      events={getEvents()}
      views={['month', 'agenda']}
      // tooltipAccessor={null}
      showMultiDayTimes
      selectable
      onSelectEvent={(e) => onViewTaskDetail(e as TodoType)}
      components={{
        toolbar: CustomToolbar,
        event: (item: any) => (
          <AppTooltip title={item.title}>
            <Box
              sx={{
                backgroundColor: item?.event?.priority?.color,
                borderRadius: 10,
                px: 2.5,
                py: 1,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {item.title}
            </Box>
          </AppTooltip>
        ),
      }}
      popup
      onSelectSlot={onSelectDate}
      defaultView='month'
    />
  );
};
export default TaskCalender;
