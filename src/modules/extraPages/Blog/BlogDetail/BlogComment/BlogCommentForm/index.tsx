import { Button } from "@mui/material";
import { Form } from "formik";
import Grid from "@mui/material/Grid";
import IntlMessages from "@crema/helpers/IntlMessages";
import AppTextField from "@crema/components/AppFormComponents/AppTextField";
import AppGridContainer from "@crema/components/AppGridContainer";

const BlogCommentForm = () => {
  return (
    <Form autoComplete="off">
      <AppGridContainer spacing={4}>
        <Grid item xs={12} md={6}>
          <AppTextField
            fullWidth
            name="name"
            label={<IntlMessages id="common.fullName" />}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppTextField
            name="email"
            fullWidth
            label={<IntlMessages id="common.email" />}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <AppTextField
            name="comment"
            fullWidth
            multiline
            rows="3"
            variant="outlined"
            label={<IntlMessages id="common.comment" />}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Button
            sx={{
              position: "relative",
              minWidth: 100,
            }}
            color="primary"
            variant="contained"
            type="submit"
          >
            <IntlMessages id="common.postComment" />
          </Button>
        </Grid>
      </AppGridContainer>
    </Form>
  );
};

export default BlogCommentForm;
