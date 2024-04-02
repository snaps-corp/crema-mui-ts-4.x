import { useThemeContext } from "@crema/context/AppContextProvider/ThemeContextProvider";
import Box from "@mui/material/Box";
import { TiFolderOpen } from "react-icons/ti";
import Button from "@mui/material/Button";
import { DropzoneState } from "react-dropzone";

type Props = {
  uploadText: string;
  dropzone: DropzoneState;
};

const UploadClassic = ({ uploadText, dropzone }: Props) => {
  const { theme } = useThemeContext();
  return (
    <Box
      sx={{
        position: "relative",
        "& ul": {
          listStyle: "none",
          padding: 0,
        },
      }}
    >
      <Box
        sx={{
          cursor: "pointer",
          border: (theme) => `dashed 2px ${theme.palette.divider}`,
          borderRadius: 2.5,
          p: 5,
          textAlign: "center",
          mb: 4,
          color: "text.secondary",
          backgroundColor: "background.default",
        }}
      >
        <Box
          sx={{
            maxWidth: 200,
            mx: "auto",
          }}
          {...dropzone.getRootProps({ className: "dropzone" })}
        >
          <input {...dropzone.getInputProps()} />
          <TiFolderOpen
            style={{
              fontSize: 40,
              marginBottom: 4,
              color: theme.palette.primary.main,
            }}
          />
          <Box component="p" sx={{ mb: 3 }}>
            {uploadText}
          </Box>
          <Box
            component="p"
            sx={{
              mb: 3,
              position: "relative",
              "&:before": {
                content: '""',
                position: "absolute",
                left: 0,
                right: 0,
                top: "55%",
                transform: "translateY(-50%)",
                height: "1px",
                borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
              },
            }}
          >
            <Box
              component="span"
              sx={{
                backgroundColor: (theme) => theme.palette.background.default,
                p: 2,
                position: "relative",
              }}
            >
              Or
            </Box>
          </Box>
          <Button variant="contained">Browse Files</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default UploadClassic;
