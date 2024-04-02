import TableRow from "@mui/material/TableRow";
import { AiOutlineCheckCircle, AiOutlineQuestionCircle } from "react-icons/ai";
import { StyledTableCell } from "./index.styled";
import { Box } from "@mui/material";
import { TableDataType } from "@crema/types/models/extrapages/Pricing";

type Props = {
  data: TableDataType;
};

const TableItem = ({ data }: Props) => {
  return (
    <TableRow key={data.title}>
      {data?.free ? (
        <StyledTableCell
          className={data?.free ? "no-border" : ""}
          sx={{ color: "text.primary", display: "flex", alignItems: "center" }}
        >
          {data.title}
          <Box
            component="span"
            sx={{ color: "text.secondary", ml: 2.5, mb: "-3px" }}
          >
            <AiOutlineQuestionCircle size={15} />
          </Box>
        </StyledTableCell>
      ) : (
        <StyledTableCell
          className={data?.title === "Overview" ? "no-border" : ""}
          sx={{ color: "primary.main" }}
        >
          {data.title}
        </StyledTableCell>
      )}
      <StyledTableCell
        align="center"
        className={
          data?.free
            ? "no-border"
            : data?.title === "Overview"
              ? "no-border"
              : ""
        }
        sx={{ color: data?.free === "Y" ? "success.main" : "text.secondary" }}
      >
        {data?.free === "Y" ? <AiOutlineCheckCircle size={20} /> : data?.free}
      </StyledTableCell>
      <StyledTableCell
        align="center"
        className={
          data?.free
            ? "no-border"
            : data?.title === "Overview"
              ? "no-border"
              : ""
        }
        sx={{ color: data?.basic === "Y" ? "success.main" : "text.secondary" }}
      >
        {data?.basic === "Y" ? <AiOutlineCheckCircle size={20} /> : data?.basic}
      </StyledTableCell>
      <StyledTableCell
        align="center"
        className={
          data?.free
            ? "no-border"
            : data?.title === "Overview"
              ? "no-border"
              : ""
        }
        sx={{ color: data?.pro === "Y" ? "success.main" : "text.secondary" }}
      >
        {data?.pro === "Y" ? <AiOutlineCheckCircle size={20} /> : data?.pro}
      </StyledTableCell>
    </TableRow>
  );
};

export default TableItem;
