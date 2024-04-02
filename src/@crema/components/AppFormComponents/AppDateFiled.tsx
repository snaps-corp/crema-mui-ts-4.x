import { Field, FieldHookConfig } from "formik";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { TextFieldProps } from "@mui/material/TextField/TextField";

type AppDateFiledProps = TextFieldProps &
  FieldHookConfig<string> & {
    [x: string]: any;
  };
const AppDateFiled = (props: AppDateFiledProps) => {
  return (
    <Field
      component={DatePicker}
      variant="outlined"
      inputVariant="outlined"
      format="YYYY-MM-DD"
      mask="____-__-__"
      autoOk
      {...props}
      renderInput={(params: any) => (
        <TextField className={props.className} {...params} />
      )}
    />
  );
};

export default AppDateFiled;
