import { alpha, Box } from "@mui/material";

import clsx from "clsx";
import AppList from "@crema/components/AppList";

const TimeSelection = () => {
  return (
    <Box
      sx={{
        minWidth: 70,
      }}
    >
      <AppList
        data={["1H", "1D", "7D", "15D", "1M"]}
        renderRow={(data) => (
          <Box
            key={data}
            className={clsx({
              active: data === "1D",
            })}
            sx={{
              my: 5,
              p: 1,
              cursor: "pointer",
              width: 50,
              height: 35,
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: (theme) => `solid 1px ${theme.palette.divider}`,
              borderRadius: 2.5,
              "&.active": {
                backgroundColor: (theme) =>
                  alpha(theme.palette.primary.main, 0.3),
              },
            }}
          >
            {data}
          </Box>
        )}
      />
    </Box>
  );
};

export default TimeSelection;
