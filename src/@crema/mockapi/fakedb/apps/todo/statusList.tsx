import { StatusType } from '@crema/types/models/apps/Todo';

const statusList: StatusType[] = [
  { id: 1, name: 'Pending', type: 1001 },
  { id: 2, name: 'In Progress', type: 1002 },
  { id: 3, name: 'Completed', type: 1003 },
];
export default statusList;
