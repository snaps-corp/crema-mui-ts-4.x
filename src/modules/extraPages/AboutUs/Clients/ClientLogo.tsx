import { Box } from "@mui/material";
import { AboutUsClientsData } from "@crema/mockapi/fakedb/extraPages";

type ClientsProps = {
  client: AboutUsClientsData;
};

const ClientLogo = ({ client }: ClientsProps) => {
  return (
    <Box
      sx={{
        minHeight: 140,
        maxHeight: 150,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <img src={client.srcImg} alt={client.name} />
    </Box>
  );
};

export default ClientLogo;
