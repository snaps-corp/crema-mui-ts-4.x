import Box from "@mui/material/Box";
import IntlMessages from "@crema/helpers/IntlMessages";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import { Fonts } from "@crema/constants/AppEnums";
import { ContactObjType } from "@crema/types/models/apps/Contact";

interface Props {
  contact: ContactObjType;
}

const PersonalDetails = (props: Props) => {
  const { contact } = props;

  return (
    <Box
      sx={{
        pb: 5,
      }}
    >
      <Box
        component="h4"
        sx={{
          mb: 4,
          fontWeight: Fonts.SEMI_BOLD,
        }}
      >
        <IntlMessages id="contactApp.personalDetails" />
      </Box>

      <div>
        <Box
          sx={{
            mb: { xs: 2, md: 3 },
            display: "flex",
            alignItems: "center",
          }}
        >
          <EmailOutlinedIcon
            sx={{
              color: (theme) => theme.palette.text.secondary,
            }}
          />
          <Box
            sx={{
              ml: 3.5,
            }}
          >
            {contact.email}
          </Box>
        </Box>

        <Box
          sx={{
            mb: { xs: 2, md: 3 },
            display: "flex",
            alignItems: "center",
          }}
        >
          <PhoneOutlinedIcon
            sx={{
              color: (theme) => theme.palette.text.secondary,
            }}
          />
          <Box
            sx={{
              ml: 3.5,
            }}
          >
            {contact.contact}
          </Box>
        </Box>

        <Box
          sx={{
            mb: { xs: 2, md: 3 },
            display: "flex",
            alignItems: "center",
          }}
        >
          <LanguageIcon
            sx={{
              color: (theme) => theme.palette.text.secondary,
            }}
          />
          <Box
            sx={{
              ml: 3.5,
            }}
          >
            {contact.website ? (
              contact.website
            ) : (
              <IntlMessages id="common.na" />
            )}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <CakeOutlinedIcon
            sx={{
              color: (theme) => theme.palette.text.secondary,
            }}
          />
          <Box
            sx={{
              ml: 3.5,
            }}
          >
            {(contact.birthday as string) ? (
              (contact.birthday as string)
            ) : (
              <IntlMessages id="common.na" />
            )}
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default PersonalDetails;
