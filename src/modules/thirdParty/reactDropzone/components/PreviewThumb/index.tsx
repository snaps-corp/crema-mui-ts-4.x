import { Box } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { FileType } from "@crema/types/models/ecommerce/EcommerceApp";

type Props = {
  file: FileType;
  onDeleteUploadFile: (file: FileType) => void;
};

const PreviewThumb = ({ file, onDeleteUploadFile }: Props) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        borderRadius: 2,
        border: "1px solid #eaeaea",
        marginBottom: 8,
        marginRight: 8,
        width: 100,
        height: 100,
        padding: 1,
        boxSizing: "border-box",
        "& img": {
          display: "block",
          width: "auto",
          objectFit: "cover",
          height: "100%",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: 10,
          top: 10,
        }}
      >
        <DeleteOutlineOutlinedIcon
          sx={{
            color: "text.secondary",
            borderRadius: "50%",
            padding: 1,
            "&:hover, &:focus": {
              color: "warning.main",
              backgroundColor: "primary.contrastText",
            },
          }}
          onClick={() => onDeleteUploadFile(file)}
        />
      </Box>
      <img alt="preview" src={file.preview} />
    </Box>
  );
};

export default PreviewThumb;
