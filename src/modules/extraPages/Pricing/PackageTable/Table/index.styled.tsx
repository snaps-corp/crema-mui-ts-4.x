import { styled } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';

export const StyledTableCell = styled(TableCell)(() => ({
  fontSize: 14,
  padding: 8,
  '&.no-border': {
    border: 'none',
  },
  '&:first-of-type': {
    paddingLeft: 20,
  },
  '&:last-of-type': {
    paddingRight: 20,
  },
}));
