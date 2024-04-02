import AppCard from "@crema/components/AppCard";
import { useIntl } from "react-intl";
import PatientGraph from "./PatientGraph";
import { Box } from "@mui/material";
import { NewpatientsType } from "@crema/types/models/dashboards/HealthCare";
import { Fonts } from "@crema/constants/AppEnums";

type Props = {
  data: NewpatientsType[];
};

const NewPatients = ({ data }: Props) => {
  const { messages } = useIntl();

  return (
    <AppCard
      title={messages["healthCare.newPatient"] as string}
      action={messages["common.viewAll"] as string}
    >
      <Box>
        <Box
          sx={{
            mb: 6,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            component="span"
            sx={{
              mr: 2,
              fontSize: 20,
              fontWeight: Fonts.BOLD,
            }}
          >
            214
          </Box>
          <Box>
            <img
              src={"/assets/images/dashboard/growth_icon.svg"}
              alt="down"
              style={{ height: 12 }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            mx: -6,
            mb: -6,
          }}
        >
          <PatientGraph data={data} />
        </Box>
      </Box>
    </AppCard>
  );
};

export default NewPatients;
