import React, { useState } from 'react';
import dayjs from 'dayjs';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarViewMonthOutlinedIcon from '@mui/icons-material/CalendarViewMonthOutlined';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { alpha, Box, Button, IconButton, Stack } from '@mui/material';
import AppTooltip from '@crema/components/AppTooltip';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { Fonts } from '@crema/constants/AppEnums';
import AppSearchBar from '@crema/components/AppSearchBar';
import { useIntl } from 'react-intl';
import { NavigateAction } from 'react-big-calendar';

const IconBtn = styled(IconButton)(({ theme }) => {
  return {
    color: theme.palette.text.disabled,
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
    padding: 8,
    '&:hover, &:focus': {
      color: theme.palette.primary.main,
    },
    '&.active': {
      color: theme.palette.primary.main,
    },
  };
});

type Props = {
  date: Date;
  view: string;
  onNavigate: (navigate: NavigateAction, date?: Date) => void;
  onView: (view: any) => void;
  onSetFilterText: (data: string) => void;
};

const CustomToolbar = (props: Props) => {
  const [viewState, setViewState] = useState('month');
  const { messages } = useIntl();

  function addMonths(date: Date, months: number) {
    const d = date.getDate();
    date.setMonth(date.getMonth() + months);
    if (date.getDate() !== d) {
      date.setDate(0);
    }
    console.log(date);
    return date;
  }

  function addWeeks(date: Date, weeks: number) {
    date.setDate(date.getDate() + 7 * weeks);
    return date;
  }

  function addDays(date: Date, days: number) {
    date.setDate(date.getDate() + days);
    console.log(date);
    return date;
  }

  /*
          const goToDayView = () => {
            props.onView('day');
            setViewState('day');
          };*/

  const goToAgenda = () => {
    props.onView('agenda');
    setViewState('agenda');
  }; /*
  const goToWeekView = () => {
    props.onView('week');
    setViewState('week');
  };*/
  const goToMonthView = () => {
    props.onView('month');
    setViewState('month');
  };

  const goToBack = () => {
    if (viewState === 'month') {
      props.onNavigate('prev' as NavigateAction, addMonths(props.date, -1));
    } else if (viewState === 'week') {
      props.onNavigate('prev' as NavigateAction, addWeeks(props.date, -1));
    } else {
      props.onNavigate('prev' as NavigateAction, addDays(props.date, -1));
    }
  };

  const goToNext = () => {
    if (viewState === 'month') {
      props.onNavigate('next' as NavigateAction, addMonths(props.date, +1));
    } else if (viewState === 'week') {
      props.onNavigate('next' as NavigateAction, addWeeks(props.date, +1));
    } else {
      props.onNavigate('next' as NavigateAction, addDays(props.date, +1));
    }
  };

  const goToToday = () => {
    const now = new Date();
    props.date.setMonth(now.getMonth());
    // props.date.setYear(now.getFullYear());
    props.date.setDate(now.getDate());
    props.onNavigate('current' as NavigateAction);
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 3,
          mb: 2,
        }}
      >
        <Stack spacing={2} direction='row' sx={{ alignItems: 'center' }}>
          <IconBtn
            className={clsx({
              active: viewState === 'month',
            })}
            onClick={goToMonthView}
          >
            <AppTooltip title='Month'>
              <CalendarViewMonthOutlinedIcon />
            </AppTooltip>
          </IconBtn>
          <IconBtn
            className={clsx({
              active: viewState === 'agenda',
            })}
            onClick={goToAgenda}
          >
            <AppTooltip title='Agenda'>
              <ViewAgendaOutlinedIcon />
            </AppTooltip>
          </IconBtn>
          <Box sx={{ mr: 3 }}>
            <AppSearchBar
              iconPosition='right'
              overlap={false}
              onChange={(event: any) =>
                props.onSetFilterText(event.target.value)
              }
              placeholder={messages['common.searchHere'] as string}
            />
          </Box>
        </Stack>

        <Box sx={{ fontWeight: Fonts.SEMI_BOLD }}>
          {dayjs(props.date).format('DD/MM/YYYY')}
        </Box>

        <Stack spacing={2} direction='row' sx={{ alignItems: 'center' }}>
          <IconButton onClick={goToBack}>
            <AppTooltip title='Next'>
              <ArrowBackIosNewIcon />
            </AppTooltip>
          </IconButton>
          <Button
            sx={{ maxHeight: 36 }}
            size='small'
            color='primary'
            variant='contained'
            onClick={goToToday}
          >
            today
          </Button>
          <IconButton onClick={goToNext}>
            <AppTooltip title='Next'>
              <ArrowForwardIosIcon />
            </AppTooltip>
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default CustomToolbar;
