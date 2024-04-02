import { useIntl } from "react-intl";
import AppCard from "@crema/components/AppCard";
import { Box } from "@mui/material";
import VisitsGraph from "./VisitsGraph";
import { Fonts } from "@crema/constants/AppEnums";
import { CancelVisitType } from "@crema/types/models/dashboards/HealthCare";

type Props = {
  data: CancelVisitType[];
};

const CancelVisits = ({ data }: Props) => {
  const { messages } = useIntl();

  return (
    <AppCard
      title={messages["healthCare.cancelledVisits"] as string}
      action={messages["common.viewAll"] as string}
    >
      <Box>
        <Box sx={{ mb: 6, display: "flex", alignItems: "center" }}>
          <Box
            component="span"
            sx={{ mr: 2, fontSize: 20, fontWeight: Fonts.BOLD }}
          >
            32
          </Box>
          <Box>
            <img
              src={"/assets/images/dashboard/decries_icon.svg"}
              alt="down"
              style={{ height: 12 }}
            />
          </Box>
        </Box>
        <Box sx={{ mx: -6, mb: -6 }}>
          <VisitsGraph data={data} />
        </Box>
      </Box>
    </AppCard>
  );
};

export default CancelVisits;
