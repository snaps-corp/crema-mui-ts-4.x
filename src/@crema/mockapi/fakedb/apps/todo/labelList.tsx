import { blue, green, red } from '@mui/material/colors';
import { LabelType } from '@crema/types/models/apps/Todo';

export const labelList: LabelType[] = [
  {
    id: 211,
    name: 'Html',
    alias: 'html',
    label: 'Html',
    value: 'Html',
    color: red[500],
  },
  {
    id: 212,
    name: 'CSS',
    alias: 'css',
    label: 'CSS',
    value: 'CSS',
    color: blue[500],
  },
  {
    id: 213,
    name: 'JQuery',
    alias: 'jquery',
    label: 'JQuery',
    value: 'JQuery',
    color: green[500],
  },
  {
    id: 214,
    name: 'Node.js',
    alias: 'node',
    label: 'Node.js',
    value: 'Node.js',
    color: 'grey.700',
  },
];

export const onGetLabel = (labelId: number): LabelType => {
  return labelList.find((label) => label.id === labelId) as LabelType;
};
