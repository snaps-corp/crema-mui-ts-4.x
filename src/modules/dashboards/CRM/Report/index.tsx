import { alpha, Typography, useTheme } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import IntlMessages from "@crema/helpers/IntlMessages";
import Box from "@mui/material/Box";
import { Fonts } from "@crema/constants/AppEnums";
import AppCard from "@crema/components/AppCard";

const Report = () => {
  const theme = useTheme();

  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={<IntlMessages id="dashboard.crm.report" />}
    >
      <AppCard
        sxStyle={{
          position: "relative",
          mb: 4,
          borderRadius: 4,
        }}
        contentStyle={{
          p: 3.5,
          backgroundColor: alpha(theme.palette.primary.main, 0.3),
          color: theme.palette.text.primary,
          "&:last-of-type": {
            pb: 3.5,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              width: 46,
              height: 46,
              mr: 3.5,
              "& img": {
                width: "100%",
              },
            }}
          >
            <img src="/assets/images/dashboard/chart_icon.svg" alt="chart" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              width: "calc(100% - 60px)",
            }}
          >
            <Box
              sx={{
                width: "calc(100% - 60px)",
              }}
            >
              <Typography variant="h2" component="h2">
                52%
              </Typography>
              <Typography
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  width: "100%",
                  fontSize: 14,
                }}
                variant="body1"
              >
                <IntlMessages id="dashboard.crm.weeklyActivity" />
              </Typography>
            </Box>
            <div style={{ marginLeft: "auto" }}>
              <Box
                component="span"
                sx={{
                  borderRadius: 30,
                  fontSize: 12,
                  display: "flex",
                  padding: "3px 6px 3px 8px",
                  fontWeight: Fonts.BOLD,
                  backgroundColor: "#fff",
                  color: "#11C15B",
                  "& .MuiSvgIcon-root": {
                    fontSize: 16,
                  },
                }}
              >
                33%
                <ExpandLessIcon />
              </Box>
            </div>
          </Box>
        </Box>
      </AppCard>
      <AppCard
        sxStyle={{
          position: "relative",
          mb: 4,
          borderRadius: 4,
        }}
        contentStyle={{
          p: 3.5,
          backgroundColor: alpha(theme.palette.primary.main, 0.3),
          color: theme.palette.text.primary,
          "&:last-of-type": {
            pb: 3.5,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              width: 46,
              height: 46,
              mr: 3.5,
              "& img": {
                width: "100%",
              },
            }}
          >
            <img src="/assets/images/dashboard/clock_icon.svg" alt="chart" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              width: "calc(100% - 60px)",
            }}
          >
            <Box
              sx={{
                width: "calc(100% - 60px)",
              }}
            >
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  color: theme.palette.text.primary,
                  mb: 0.5,
                }}
              >
                11:56:33
              </Typography>
              <Typography
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  width: "100%",
                  fontSize: 14,
                }}
                variant="body1"
              >
                <IntlMessages id="dashboard.crm.workedThisWeek" />
              </Typography>
            </Box>
            <div style={{ marginLeft: "auto" }}>
              <Box
                component="span"
                sx={{
                  borderRadius: 30,
                  fontSize: 12,
                  display: "flex",
                  padding: "3px 6px 3px 8px",
                  fontWeight: Fonts.BOLD,
                  backgroundColor: "#fff",
                  color: "#F04F47",
                  "& .MuiSvgIcon-root": {
                    fontSize: 16,
                  },
                }}
              >
                18%
                <ExpandMoreIcon />
              </Box>
            </div>
          </Box>
        </Box>
      </AppCard>

      <Box
        sx={{
          mb: 2,
        }}
      >
        <Button
          sx={{
            padding: "10px 15px",
            borderRadius: 4,
          }}
          fullWidth
          variant="outlined"
          color="primary"
          startIcon={<PictureAsPdfIcon />}
        >
          <IntlMessages id="dashboard.crm.exportasPDF" />
        </Button>
      </Box>
    </AppCard>
  );
};

export default Report;
