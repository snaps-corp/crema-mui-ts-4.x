import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { BiPencil } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { TodoListType } from "@crema/types/models/dashboards/CRM";

const TodoCellWrapper = styled("div")(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",
    padding: "8px 10px",
    "& .date-view": {
      marginRight: 20,
    },
    "& .contentArea": {
      fontSize: 14,
      flex: 1,
      padding: "12px 20px",
      backgroundColor: theme.palette.background.default,
      border: "solid 1px transparent",
      borderRadius: 4,
      display: "flex",
      alignItems: "center",
    },
    "& .icon-btn": {
      border: `solid 1px ${alpha(theme.palette.success.main, 0.5)}`,
      color: alpha(theme.palette.success.main, 0.5),
      padding: 3,
      fontSize: 16,
      "&:not(:first-of-type)": {
        marginLeft: 8,
      },
    },
    "& .icon-btn-pencil": {
      border: `solid 1px ${alpha(theme.palette.primary.main, 0.5)}`,
      color: alpha(theme.palette.primary.main, 0.5),
    },
    "&:hover": {
      "& .date-view": {
        color: theme.palette.primary.main,
      },
      "& .contentArea": {
        backgroundColor: "transparent",
        borderColor: theme.palette.primary.main,
      },
      "& .icon-btn": {
        border: `solid 1px ${theme.palette.success.main}`,
        color: theme.palette.success.main,
      },
      "& .icon-btn-pencil": {
        border: `solid 1px ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
      },
    },
  };
});

type Props = {
  todo: TodoListType;
};
const TodoCell = ({ todo }: Props) => {
  return (
    <TodoCellWrapper>
      <div className="date-view">
        <Typography variant="h1" component="h1">
          {todo.date.split(" ")[0]}
        </Typography>
        <Typography variant="body1">{todo.date.split(" ")[1]}</Typography>
      </div>
      <div className="contentArea">
        <Box
          sx={{
            flex: 1,
            mr: 1,
          }}
        >
          <Typography variant="h5" component="h5">
            {todo.title}
          </Typography>
          <Typography
            sx={{
              mt: 1,
              color: (theme) => theme.palette.text.secondary,
              fontSize: 12,
            }}
          >
            {todo.time_from}
          </Typography>
        </Box>
        <Box
          component="span"
          sx={{
            position: "relative",
          }}
        >
          <IconButton size="small" className="icon-btn icon-btn-pencil">
            <BiPencil />
          </IconButton>
          <IconButton size="small" className="icon-btn">
            <BsCheck />
          </IconButton>
        </Box>
      </div>
    </TodoCellWrapper>
  );
};

export default TodoCell;
