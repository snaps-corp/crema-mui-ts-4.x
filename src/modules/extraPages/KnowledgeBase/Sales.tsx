import Box from "@mui/material/Box";
import IntlMessages from "@crema/helpers/IntlMessages";
import KBItem from "./KBItem";
import AppGridContainer from "@crema/components/AppGridContainer";
import { Fonts } from "@crema/constants/AppEnums";
import { SalesDataType } from "@crema/types/models/extrapages/Portfolio";

type SalesDataProps = {
  saleQueries: SalesDataType[];
};

const Sales: React.FC<SalesDataProps> = ({ saleQueries }) => {
  return (
    <Box mb={{ xs: 6, lg: 10 }}>
      <Box
        component="h3"
        color="text.primary"
        mb={{ xs: 4, lg: 6 }}
        fontSize={16}
        fontWeight={Fonts.BOLD}
      >
        <IntlMessages id="knowledge.sales" />
      </Box>
      <AppGridContainer>
        {saleQueries.map((sale, index) => (
          <KBItem data={sale} key={index} />
        ))}
      </AppGridContainer>
    </Box>
  );
};

export default Sales;
