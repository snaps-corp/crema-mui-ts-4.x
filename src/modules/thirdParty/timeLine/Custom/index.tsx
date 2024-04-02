import data, { DataProps } from "./data";
import TimelineItem from "./Component/TimelineItem";
import TimelineContainer from "./TimelineContainer";
import Box from "@mui/material/Box";

const Timeline = () => {
  return (
    data.length > 0 && (
      <Box
        sx={{
          display: "flex",
          justifyContent: {
            xs: "center",
            "@media (max-width: 499px)": "flex-start",
          },
          alignItems: "center",
          width: "100%",
        }}
      >
        <TimelineContainer>
          {data.map((data: DataProps, idx: number) => (
            <TimelineItem data={data} key={idx} />
          ))}
        </TimelineContainer>
      </Box>
    )
  );
};

export default Timeline;
