import Box from "@mui/material/Box";
import IntlMessages from "@crema/helpers/IntlMessages";
import dayjs from "dayjs";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Fonts } from "@crema/constants/AppEnums";
import { alpha, IconButton } from "@mui/material";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";

import { styled } from "@mui/material/styles";
import { AttachmentType } from "@crema/types/models/apps/ScrumbBoard";

const CardAttachmentWrapper = styled("div")(({ theme }) => {
  return {
    transition: "all 0.4s ease",
    backgroundColor: alpha(theme.palette.common.black, 0.04),
    overflow: "hidden",
    borderRadius: 4,
    width: 120,
    position: "relative",
    "& .attachment-thumb": {
      overflow: "hidden",
      position: "relative",
      "& > img": {
        width: "100%",
      },
      "&:before": {
        content: '""',
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 1,
        backgroundColor: alpha(theme.palette.common.black, 0.15),
        width: "100%",
        height: "1005",
      },
    },
    "& .attachment-action": {
      position: "absolute",
      right: 10,
      top: 10,
      zIndex: 3,
      opacity: 0,
      visibility: "hidden",
      transition: "all 0.4s ease",
    },
    "& .icon-btn": {
      backgroundColor: alpha(theme.palette.common.white, 0.5),
      color: theme.palette.text.secondary,
      padding: 6,
      "&:not(:first-of-type)": {
        marginLeft: 8,
      },
      "& svg": {
        fontSize: 20,
      },
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.8),
        color: theme.palette.text.secondary,
      },
    },
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.08),
      "& .attachment-action": {
        opacity: 1,
        visibility: "visible",
      },
    },
  };
});

type Props = {
  attachments: AttachmentType[];
  onDeleteAttachment: (id: number) => void;
};

const CardAttachments = (props: Props) => {
  const { attachments, onDeleteAttachment } = props;

  return attachments && attachments.length > 0 ? (
    <Box
      sx={{
        mb: 2,
      }}
    >
      <Box
        sx={{
          mb: { xs: 3, sm: 5 },
        }}
      >
        <Box component="h4">
          <IntlMessages id="common.attachments" />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          mx: -1.5,
        }}
      >
        {attachments.map((attachment) => {
          const { file } = attachment;
          return (
            <Box
              key={attachment.id}
              sx={{
                px: 1.5,
                mb: 3,
              }}
            >
              <CardAttachmentWrapper>
                <Box className="attachment-thumb">
                  <img src={attachment.preview} alt="attachment" />

                  <Box className="attachment-action">
                    <IconButton
                      className="icon-btn"
                      color="primary"
                      // variant="outlined"
                      aria-label="edit"
                    >
                      <CloudDownloadOutlinedIcon />
                    </IconButton>
                    <IconButton
                      className="icon-btn"
                      color="primary"
                      // variant="outlined"
                      aria-label="delete"
                      onClick={() => onDeleteAttachment(attachment.id)}
                    >
                      <DeleteOutlinedIcon />
                    </IconButton>
                  </Box>
                </Box>

                <Box
                  sx={{
                    px: 2,
                    py: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      color: "primary.main",
                      fontWeight: Fonts.LIGHT,
                    }}
                  >
                    {file.name}
                  </Box>
                  <Box
                    sx={{
                      my: 1,
                      fontSize: 12,
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        mr: 1,
                      }}
                    >
                      {dayjs(file.lastModified).format("ll").split(",")[0]}
                    </Box>
                    <Box
                      component="span"
                      sx={{
                        mr: 1,
                      }}
                    >
                      <IntlMessages id="common.at" />
                    </Box>
                    <Box component="span">
                      {dayjs(file.lastModified).format("LT")}
                    </Box>
                  </Box>
                </Box>
              </CardAttachmentWrapper>
            </Box>
          );
        })}
      </Box>
    </Box>
  ) : null;
};

export default CardAttachments;

CardAttachments.defaultProps = {
  attachments: [],
};
