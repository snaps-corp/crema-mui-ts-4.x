import AppSuspense from "../AppSuspense";
import AppFooter from "../AppLayout/components/AppFooter";
import AppErrorBoundary from "../AppErrorBoundary";
import Box from "@mui/material/Box";
import AppContentViewWrapper from "./AppContentViewWrapper";
import { SxProps } from "@mui/system";

type AppContentViewProps = {
  sxStyle?: SxProps;
  routes: React.ReactElement | null;
};

const AppContentView: React.FC<AppContentViewProps> = ({ routes, sxStyle }) => {
  return (
    <AppContentViewWrapper>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          p: { xs: 5, md: 7.5, xl: 12.5 },
          ...sxStyle,
        }}
        className="app-content"
      >
        <AppSuspense>
          <AppErrorBoundary>{routes}</AppErrorBoundary>
        </AppSuspense>
      </Box>
      <AppFooter />
    </AppContentViewWrapper>
  );
};

export default AppContentView;
