import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { Form, Formik } from "formik";
import * as yup from "yup";
import Grid from "@mui/material/Grid";
import IntlMessages from "@crema/helpers/IntlMessages";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Fonts } from "@crema/constants/AppEnums";
import AppAnimate from "@crema/components/AppAnimate";
import AppTextField from "@crema/components/AppFormComponents/AppTextField";
import Logo from "../../../assets/user/lock-screen.svg";
import { useIntl } from "react-intl";

const UnlockScreen = () => {
  const { messages } = useIntl();

  const validationSchema = yup.object({
    password: yup
      .string()
      .required(String(messages["validation.passwordRequired"])),
  });

  return (
    <AppAnimate animation="transition.slideUpIn" delay={200}>
      <Box
        sx={{
          pb: 6,
          py: { xl: 8 },
          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            maxWidth: 1024,
            width: "100%",
            textAlign: "center",
            overflow: "hidden",
            padding: { xs: 8, md: 12 },
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            paddingLeft: {
              lg: 8,
              xl: 20,
            },
            paddingRight: {
              lg: 12,
              xl: 20,
            },
          }}
        >
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Box
                display="inline-block"
                sx={{
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  "& img": {
                    width: "100%",
                    height: "300px",
                    display: "inline-block",
                    paddingRight: { xs: 0, lg: 10 },
                  },
                }}
              >
                <img src={Logo} alt={Logo} />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  mb: { xs: 6, xl: 8 },
                  fontWeight: Fonts.BOLD,
                  fontSize: 20,
                }}
              >
                <IntlMessages id="common.unlockScreen" />
              </Box>
              <Box
                sx={{
                  mb: { xs: 3, xl: 4 },
                  fontSize: 14,
                }}
              >
                <Typography component="span">
                  <IntlMessages id="common.unlockScreenTextOne" />
                </Typography>
                <Typography component="span">
                  <IntlMessages id="common.unlockScreenTextTwo" />
                </Typography>
              </Box>
              <Formik
                validateOnChange={true}
                initialValues={{
                  password: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(data, { resetForm }) => {
                  console.log(data);
                  resetForm();
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Box
                      sx={{
                        mb: { xs: 3, xl: 4 },
                      }}
                    >
                      <AppTextField
                        name="password"
                        label={<IntlMessages id="common.password" />}
                        sx={{
                          width: "100%",
                        }}
                        variant="outlined"
                        type="password"
                      />
                    </Box>
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={isSubmitting}
                      sx={{
                        width: "100%",
                        height: 44,
                      }}
                      type="submit"
                    >
                      <IntlMessages id="common.unlockItForMe" />
                    </Button>
                  </Form>
                )}
              </Formik>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </AppAnimate>
  );
};

export default UnlockScreen;
