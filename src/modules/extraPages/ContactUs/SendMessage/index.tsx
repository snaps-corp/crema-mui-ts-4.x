import { Box, Typography } from "@mui/material";
import { Fonts } from "@crema/constants/AppEnums";
import IntlMessages from "@crema/helpers/IntlMessages";
import { SendMessageData } from "@crema/mockapi/fakedb/extraPages";

type SendMessageProps = {
  sendMessage: SendMessageData;
};

const SendMessage: React.FC<SendMessageProps> = ({ sendMessage }) => {
  return (
    <Box
      sx={{
        maxWidth: 500,
        mb: { xs: 5, md: 6, lg: 7 },
      }}
    >
      <Typography
        component="h3"
        sx={{
          mb: 2.5,
          fontSize: { xs: 18, md: 20 },
          fontWeight: Fonts.BOLD,
        }}
      >
        <IntlMessages id="extraPages.sendUsMessage" />
      </Typography>
      <Typography>{sendMessage.description}</Typography>
    </Box>
  );
};

export default SendMessage;
