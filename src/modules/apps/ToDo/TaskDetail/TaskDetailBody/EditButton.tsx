import React from "react";
import IconButton from "@mui/material/IconButton";

type Props = {
  action: (event: React.MouseEvent<HTMLElement>) => void;
  title: any;
};

const EditButton = ({ action, title }: Props) => {
  return (
    <IconButton
      // variant="contained"
      color="primary"
      onClick={action}
      size="large"
    >
      {title}
    </IconButton>
  );
};

export default EditButton;
