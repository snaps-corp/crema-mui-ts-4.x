import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useGetDataApi } from "@crema/hooks/APIHooks";
import { useLocation, useParams } from "react-router-dom";
import {
  FolderType,
  LabelType,
  PriorityType,
  StaffType,
  StatusType,
  TodoType,
} from "@crema/types/models/apps/Todo";
import { APIDataProps } from "@crema/types/models/APIDataProps";

type FilterDataType = {
  status: number[];
  priority: number[];
};

export type CalendarContextType = {
  labelList: LabelType[];
  folderList: FolderType[];
  priorityList: PriorityType[];
  staffList: StaffType[];
  statusList: StatusType[];
  taskLists: APIDataProps<TodoType[]>;
  filterData: FilterDataType;
  loading: boolean;
  page: number;
};

export type CalendarActionContextType = {
  setCalenderData: (data: APIDataProps<TodoType[]>) => void;
  setQueryParams: (data: object) => void;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    data: number,
  ) => void;
  reCallAPI: () => void;
  setPage: (data: number) => void;
  setFilterData: (data: FilterDataType) => void;
};

const ContextState: CalendarContextType = {
  labelList: [],
  folderList: [],
  priorityList: [],
  staffList: [],
  statusList: [],
  taskLists: {} as APIDataProps<TodoType[]>,
  filterData: {
    status: [],
    priority: [],
  },
  loading: false,
  page: 0,
};

const CalendarContext = createContext<CalendarContextType>(ContextState);
const CalendarActionsContext = createContext<CalendarActionContextType>({
  setCalenderData: (data: APIDataProps<TodoType[]>) => {},
  setQueryParams: (data: object) => {},
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    data: number,
  ) => {},
  reCallAPI: () => {},
  setPage: (data: number) => {},
  setFilterData: (data: FilterDataType) => {},
});

export const useCalendarContext = () => useContext(CalendarContext);

export const useCalendarActionsContext = () =>
  useContext(CalendarActionsContext);

type Props = {
  children: ReactNode;
};

export const CalendarContextProvider = ({ children }: Props) => {
  const [filterData, setFilterData] = useState<FilterDataType>({
    status: [],
    priority: [],
  });
  const params = useParams();
  const { pathname } = useLocation();
  const [{ apiData: labelList }] = useGetDataApi<LabelType[]>(
    "/api/calendar/labels/list",
  );
  const [{ apiData: priorityList }] = useGetDataApi<PriorityType[]>(
    "/api/calendar/priority/list",
  );
  const [{ apiData: staffList }] = useGetDataApi<StaffType[]>(
    "/api/calendar/staff/list",
  );
  const [{ apiData: folderList }] = useGetDataApi<FolderType[]>(
    "/api/calendar/folders/list",
    [],
  );
  const [{ apiData: statusList }] = useGetDataApi<StatusType[]>(
    "/api/calendar/status/list",
    [],
  );
  const [page, setPage] = useState(0);

  const [
    { apiData: taskLists, loading },
    { setQueryParams, setData: setCalenderData, reCallAPI },
  ] = useGetDataApi<APIDataProps<TodoType[]>>(
    "/api/calendar/task/list",
    undefined,
    {},
    false,
  );

  useEffect(() => {
    setPage(0);
  }, [pathname]);

  useEffect(() => {
    setQueryParams({
      type: params?.folder ? "folder" : "label",
      name: params?.folder || params?.label,
      page: page,
    });
  }, [page, params, pathname]);

  const onPageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    value: number,
  ) => {
    setPage(value);
  };

  const getFilterData = (): APIDataProps<TodoType[]> => {
    if (taskLists?.data) {
      const data = taskLists?.data?.filter((task) => {
        let status = true;
        if (filterData.status.length > 0) {
          status = filterData.status.includes(task.status);
        }
        let priority = true;
        if (filterData.priority.length > 0) {
          priority = filterData.priority.includes(task.priority.id);
        }
        return status && priority;
      });
      return {
        data,
        count: data.length,
      };
    }
    return {} as APIDataProps<TodoType[]>;
  };

  return (
    <CalendarContext.Provider
      value={{
        labelList,
        priorityList,
        staffList,
        statusList,
        folderList,
        filterData,
        taskLists: getFilterData(),
        loading,
        page,
      }}
    >
      <CalendarActionsContext.Provider
        value={{
          setCalenderData,
          onPageChange,
          setQueryParams,
          reCallAPI,
          setPage,
          setFilterData,
        }}
      >
        {children}
      </CalendarActionsContext.Provider>
    </CalendarContext.Provider>
  );
};
export default CalendarContextProvider;
