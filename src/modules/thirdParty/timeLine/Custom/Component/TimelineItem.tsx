import { Fonts } from "@crema/constants/AppEnums";
import TimelineItemWrapper from "./TimelineItemWrapper";
import TimelineItemContentWrapper from "./TimelineItemContentWrapper";
import grey from "@mui/material/colors/grey";
import CircleWrapper from "./CircleWrapper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataProps } from "../data";

type Props = {
  data: DataProps;
};
const TimelineItem = ({ data }: Props) => {
  return (
    <TimelineItemWrapper>
      <TimelineItemContentWrapper>
        <Box
          sx={{
            mb: 4,
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ mb: 1 }}>
            <Box
              component="h2"
              sx={{
                mb: 2,
                fontWeight: Fonts.LIGHT,
                fontSize: { xs: 16, xl: 18 },
              }}
            >
              {data.title}
            </Box>
            <time
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: Fonts.LIGHT,
                color: grey[500],
                fontSize: 14,
              }}
            >
              <Box
                sx={{
                  fontSize: 16,
                  mr: 2,
                  "& .material-icons": {
                    display: "block",
                  },
                }}
              >
                <i className="material-icons">event</i>
              </Box>
              {data.date}
            </time>
          </Box>
          <Box
            component="span"
            sx={{
              py: 2,
              px: 4,
              fontWeight: Fonts.LIGHT,
              fontSize: 16,
              backgroundColor: data.category.color + "25",
              color: data.category.color,
              borderRadius: (theme: any) => theme?.cardRadius,
              textTransform: "capitalize",
            }}
          >
            {data.category.tag}
          </Box>
        </Box>
        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            "-webkitBoxOrient": "vertical",
            "-webkitLineClamp": 3,
          }}
        >
          {data.text}
        </Typography>
        <Box
          sx={{
            textAlign: "center",
            margin: "20px -20px -20px",
            padding: { xs: "12px 20px", sm: "20px" },
            borderTop: (theme) => `solid 1px ${theme.palette.grey[300]}`,
            "& .link": {
              color: (theme) => theme.palette.secondary.main,
              textTransform: "capitalize",
              fontWeight: 700,
              textDecoration: "none",
            },
          }}
        >
          {data.link && (
            <a
              className="link"
              href={data.link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.link.text}
            </a>
          )}
        </Box>
        <CircleWrapper>
          <Box
            component="span"
            sx={{
              backgroundColor: (theme) => theme.palette.secondary.main,
              borderRadius: "50%",
              width: 16,
              height: 16,
            }}
          />
        </CircleWrapper>
      </TimelineItemContentWrapper>
    </TimelineItemWrapper>
  );
};
export default TimelineItem;
