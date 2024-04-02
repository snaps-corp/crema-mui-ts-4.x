import Box from "@mui/material/Box";
import { alpha } from "@mui/material";
import { PriorityType } from "@crema/types/models/apps/Todo";

type Props = {
  priority: PriorityType;
};

const Priority = ({ priority }: Props) => {
  return (
    <Box
      component="span"
      px={3}
      py={1}
      color={priority.color}
      borderRadius={"30px"}
      fontSize={12}
      display="inline-block"
      bgcolor={alpha(priority.color, 0.1)}
    >
      {priority.name}
    </Box>
  );
};

export default Priority;
