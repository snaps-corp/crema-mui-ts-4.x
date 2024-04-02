import AppCard from "@crema/components/AppCard";
import AppGridContainer from "@crema/components/AppGridContainer";
import AppTextField from "@crema/components/AppFormComponents/AppTextField";
import { Button, Divider, Grid, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import IntlMessages from "@crema/helpers/IntlMessages";
import * as yup from "yup";
import { ClientType } from "@crema/types/models/invoice";

const validationSchema = yup.object({
  name: yup
    .string()
    .required(String(<IntlMessages id="validation.nameRequired" />)),
  firstName: yup
    .string()
    .required(String(<IntlMessages id="validation.firstNameRequired" />)),
  lastName: yup
    .string()
    .required(String(<IntlMessages id="validation.lastNameRequired" />)),
  mail: yup
    .string()
    .email(String(<IntlMessages id="validation.emailFormat" />))
    .required(String(<IntlMessages id="validation.emailRequired" />)),
  phone: yup.string().matches(/^[0-9]{10}$/, "Enter a valid phone number!"),
  zipCode: yup
    .string()
    .matches(/^[0-9]{6}$/, "Enter a valid zip code!")
    .required(String(<IntlMessages id="validation.zipCodeRequired" />)),
  city: yup
    .string()
    .matches(/^[A-Za-z]+$/, "Enter a valid city!")
    .required(String(<IntlMessages id="validation.cityRequired" />)),
  state: yup
    .string()
    .matches(/^[A-Za-z]+$/, "Enter a valid state!")
    .required(String(<IntlMessages id="validation.stateRequired" />)),
  country: yup
    .string()
    .matches(/^[A-Za-z]+$/, "Enter a valid country!")
    .required(String(<IntlMessages id="validation.countryRequired" />)),
});

type Props = {
  selectedClient?: ClientType;
  onSave: (data: ClientType) => void;
};
const AddClient = ({ selectedClient, onSave }: Props) => {
  return (
    <AppCard
      title={selectedClient ? "Edit Client" : "Add Client"}
      sxStyle={{ width: "70%", margin: "auto" }}
    >
      <Formik
        validateOnChange={true}
        initialValues={
          selectedClient
            ? selectedClient
            : {
                name: "",
                firstName: "",
                lastName: "",
                mail: "",
                phone: "",
                vatId: "",
                taxId: "",
                steetName: "",
                zipCode: "",
                city: "",
                state: "",
                country: "",
                logo: "",
              }
        }
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          console.log(data, "data");
          let id;
          if (selectedClient) id = selectedClient.id;
          else id = data.name.split(" ")[0].toLowerCase();
          setSubmitting(true);
          onSave({ ...data, id });
          setSubmitting(false);
          resetForm();
        }}
      >
        <Form noValidate autoComplete="off">
          <AppTextField
            name="name"
            variant="outlined"
            sx={{
              width: "100%",
            }}
            label="Client Name"
          />

          <Typography variant="h3" sx={{ mt: 4, mb: 2 }}>
            Contact Person
          </Typography>
          <Divider sx={{ mb: 6 }} />
          <AppGridContainer>
            <Grid item xs={12} md={6}>
              <AppTextField
                name="firstName"
                variant="outlined"
                sx={{
                  width: "100%",
                }}
                label="First Name"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <AppTextField
                name="lastName"
                variant="outlined"
                sx={{
                  width: "100%",
                }}
                label="Last Name"
              />
            </Grid>
            <Grid item xs={12}>
              <AppTextField
                type="email"
                name="mail"
                variant="outlined"
                sx={{
                  width: "100%",
                }}
                label="Email"
              />
            </Grid>
            <Grid item xs={12}>
              <AppTextField
                name="phone"
                variant="outlined"
                sx={{
                  width: "100%",
                }}
                label="Phone Number"
              />
            </Grid>
          </AppGridContainer>
          <Typography variant="h3" sx={{ mt: 4, mb: 2 }}>
            Settings
          </Typography>
          <Divider sx={{ mb: 6 }} />
          <AppGridContainer>
            <Grid item xs={12} md={6}>
              <AppTextField
                name="vatId"
                variant="outlined"
                sx={{
                  width: "100%",
                }}
                label="VAT ID"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <AppTextField
                name="taxId"
                variant="outlined"
                sx={{
                  width: "100%",
                }}
                label="Tax ID"
              />
            </Grid>
          </AppGridContainer>
          <Typography variant="h3" sx={{ mt: 4, mb: 2 }}>
            Billing Address
          </Typography>
          <Divider sx={{ mb: 6 }} />
          <AppGridContainer>
            <Grid item xs={12}>
              <AppTextField
                name="steetName"
                variant="outlined"
                sx={{
                  width: "100%",
                }}
                label="Street Name/Number"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <AppTextField
                name="zipCode"
                variant="outlined"
                sx={{
                  width: "100%",
                }}
                label="Zip Code"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <AppTextField
                name="city"
                variant="outlined"
                sx={{
                  width: "100%",
                }}
                label="City"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <AppTextField
                name="state"
                variant="outlined"
                sx={{
                  width: "100%",
                }}
                label="State"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <AppTextField
                name="country"
                variant="outlined"
                sx={{
                  width: "100%",
                }}
                label="Country"
              />
            </Grid>
          </AppGridContainer>
          <Button
            sx={{ display: "block", mt: 6, ml: "auto" }}
            type="submit"
            variant="contained"
            color="primary"
          >
            {selectedClient ? "Edit" : "Add"} Client
          </Button>
        </Form>
      </Formik>
    </AppCard>
  );
};

export default AddClient;
