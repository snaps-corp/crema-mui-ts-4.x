import { InvFolderType } from '@crema/types/models/invoice';

const folderList: InvFolderType[] = [
  { id: 119, name: 'All', alias: 'all' },
  { id: 120, name: 'Sent', alias: 'sent' },
  { id: 121, name: 'Paid', alias: 'paid' },
  { id: 122, name: 'Declined', alias: 'declined' },
  { id: 123, name: 'Cancelled', alias: 'cancelled' },
];
export default folderList;
