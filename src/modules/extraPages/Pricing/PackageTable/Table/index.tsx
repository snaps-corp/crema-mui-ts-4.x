import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableHeading from "./TableHeading";
import TableItem from "./TableItem";
import AppTableContainer from "@crema/components/AppTableContainer";
import { Box, Button, TableRow, Typography } from "@mui/material";
import { StyledTableCell } from "./index.styled";
import { TableDataType } from "@crema/types/models/extrapages/Pricing";
import { Fonts } from "@crema/constants/AppEnums";

type Props = {
  billingFormat: string;
  tableData: TableDataType[];
};

const PricingTable = ({ billingFormat, tableData }: Props) => {
  return (
    <AppTableContainer>
      <Table stickyHeader className="table">
        <TableHead>
          <TableHeading />
        </TableHead>
        <TableBody>
          <TableRow>
            <StyledTableCell className="no-border" />

            <StyledTableCell className="no-border">
              <Box>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <Typography
                    component="h4"
                    sx={{
                      fontSize: { xs: 20, md: 22, lg: 48 },
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontWeight: Fonts.BOLD,
                      }}
                    >
                      $0
                    </Box>
                  </Typography>
                  <Box sx={{ color: "text.secondary", ml: 2, mb: 2 }}>
                    per {billingFormat}
                  </Box>
                </Box>
                <Box
                  sx={{
                    color: "text.secondary",
                    mt: 2,
                    width: 300,
                    whiteSpace: "pre-wrap",
                  }}
                >
                  Basic features for up to 10 employees with everything you
                  need.
                </Box>
                <Box sx={{ mb: 7.5, mr: 8 }}>
                  <Button
                    variant="outlined"
                    sx={{
                      mt: 3,
                      width: "100%",
                      fontWeight: Fonts.BOLD,
                      color: (theme) => theme.palette.text.primary,
                      minHeight: 40,
                      borderRadius: 7.5,
                      boxShadow: "none",
                      borderWidth: 2,
                      borderColor: "primary.main",
                      "&:hover, &:focus": {
                        borderColor: "primary.main",
                        borderWidth: 2,
                      },
                    }}
                  >
                    Try Now
                  </Button>
                </Box>
              </Box>
            </StyledTableCell>
            <StyledTableCell className="no-border">
              <Box>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <Typography
                    component="h4"
                    sx={{
                      fontSize: { xs: 20, md: 22, lg: 48 },
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontWeight: Fonts.BOLD,
                      }}
                    >
                      $69
                    </Box>
                  </Typography>
                  <Box sx={{ color: "text.secondary", ml: 2, mb: 2 }}>
                    per {billingFormat}
                  </Box>
                </Box>
                <Box
                  sx={{
                    color: "text.secondary",
                    mt: 2,
                    width: 300,
                    whiteSpace: "pre-wrap",
                  }}
                >
                  Advanced features and reporting, better workflows and
                  automation.
                </Box>
                <Box sx={{ mb: 7.5, mr: 8 }}>
                  <Button
                    variant="outlined"
                    sx={{
                      mt: 3,
                      width: "100%",
                      fontWeight: Fonts.BOLD,
                      color: (theme) => theme.palette.text.primary,
                      minHeight: 40,
                      borderRadius: 7.5,
                      boxShadow: "none",
                      borderWidth: 2,
                      borderColor: "success.main",
                      "&:hover, &:focus": {
                        borderColor: "success.main",
                        borderWidth: 2,
                      },
                    }}
                  >
                    Buy Now
                  </Button>
                </Box>
              </Box>
            </StyledTableCell>
            <StyledTableCell className="no-border">
              <Box>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <Typography
                    component="h4"
                    sx={{
                      fontSize: { xs: 20, md: 22, lg: 48 },
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontWeight: Fonts.BOLD,
                      }}
                    >
                      $349
                    </Box>
                  </Typography>
                  <Box sx={{ color: "text.secondary", ml: 2, mb: 2 }}>
                    per {billingFormat}
                  </Box>
                </Box>
                <Box
                  sx={{
                    color: "text.secondary",
                    mt: 2,
                    width: 300,
                    whiteSpace: "pre-wrap",
                  }}
                >
                  Personalised service and enterprise security for large teams.
                </Box>
                <Box sx={{ mb: 7.5, mr: 8 }}>
                  <Button
                    variant="outlined"
                    sx={{
                      mt: 3,
                      width: "100%",
                      fontWeight: Fonts.BOLD,
                      color: (theme) => theme.palette.text.primary,
                      minHeight: 40,
                      borderRadius: 7.5,
                      boxShadow: "none",
                      borderWidth: 2,
                      borderColor: "#F49820",
                      "&:hover, &:focus": {
                        borderColor: "#F49820",
                        borderWidth: 2,
                      },
                    }}
                  >
                    Buy Now
                  </Button>
                </Box>
              </Box>
            </StyledTableCell>
          </TableRow>
          {tableData.map((data, index) => (
            <TableItem key={index} data={data} />
          ))}
          <TableRow>
            <StyledTableCell className="no-border" />

            <StyledTableCell className="no-border">
              <Button
                variant="outlined"
                sx={{
                  mt: 3,
                  width: "100%",
                  fontWeight: Fonts.BOLD,
                  color: (theme) => theme.palette.text.primary,
                  minHeight: 40,
                  borderRadius: 7.5,
                  boxShadow: "none",
                  borderWidth: 2,
                  borderColor: "primary.main",
                  "&:hover, &:focus": {
                    borderColor: "primary.main",
                    borderWidth: 2,
                  },
                }}
              >
                Try Now
              </Button>
            </StyledTableCell>
            <StyledTableCell className="no-border">
              <Button
                variant="outlined"
                sx={{
                  mt: 3,
                  width: "100%",
                  fontWeight: Fonts.BOLD,
                  color: (theme) => theme.palette.text.primary,
                  minHeight: 40,
                  borderRadius: 7.5,
                  boxShadow: "none",
                  borderWidth: 2,
                  borderColor: "success.main",
                  "&:hover, &:focus": {
                    borderColor: "success.main",
                    borderWidth: 2,
                  },
                }}
              >
                Buy Now
              </Button>
            </StyledTableCell>
            <StyledTableCell className="no-border">
              <Button
                variant="outlined"
                sx={{
                  mt: 3,
                  width: "100%",
                  fontWeight: Fonts.BOLD,
                  color: (theme) => theme.palette.text.primary,
                  minHeight: 40,
                  borderRadius: 7.5,
                  boxShadow: "none",
                  borderWidth: 2,
                  borderColor: "#F49820",
                  "&:hover, &:focus": {
                    borderColor: "#F49820",
                    borderWidth: 2,
                  },
                }}
              >
                Buy Now
              </Button>
            </StyledTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </AppTableContainer>
  );
};

export default PricingTable;
