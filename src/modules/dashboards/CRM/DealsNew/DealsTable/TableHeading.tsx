import TableCell from "@mui/material/TableCell";
import IntlMessages from "@crema/helpers/IntlMessages";
import TableHeader from "@crema/components/AppTable/TableHeader";

const TableHeading = () => {
  return (
    <TableHeader>
      <TableCell>
        <IntlMessages id="common.num" />
      </TableCell>
      <TableCell>
        <IntlMessages id="common.name" />
      </TableCell>
      <TableCell>
        <IntlMessages id="common.type" />
      </TableCell>
      <TableCell>
        <IntlMessages id="common.amount" />
      </TableCell>
      <TableCell>
        <IntlMessages id="common.progress" />
      </TableCell>
      <TableCell>
        <IntlMessages id="common.created" />
      </TableCell>
    </TableHeader>
  );
};

export default TableHeading;
