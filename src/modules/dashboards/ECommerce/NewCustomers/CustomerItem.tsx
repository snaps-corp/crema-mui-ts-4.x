import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Fonts } from "@crema/constants/AppEnums";
import { NewCustomersType } from "@crema/types/models/dashboards/Ecommerce";

type Props = {
  item: NewCustomersType;
};

const CustomerItem = ({ item }: Props) => {
  const getStatusColor = () => {
    if (item.orders === 0) {
      return "#F84E4E";
    } else if (item.orders > 0) {
      return "#43C888";
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: { xs: "flex-start", sm: "center" },
        padding: "8px 20px",
        "&:not(:last-of-type)": {
          borderBottom: "1px solid #ECEDF1",
        },
      }}
      className="item-hover"
    >
      <Avatar
        sx={{
          mr: 4,
          width: 42,
          height: 42,
        }}
        src={item.image}
      />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: { sm: "center" },
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          sx={{
            fontSize: 14,
            flex: 1,
            mr: 2,
          }}
        >
          <Box
            sx={{
              mb: 0.5,
              fontWeight: Fonts.MEDIUM,
            }}
          >
            {item.name}
          </Box>
          <Box
            sx={{
              fontSize: 14,
              color: "text.secondary",
            }}
          >
            {item.message}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              color: getStatusColor(),
              backgroundColor: getStatusColor() + "44",
              padding: "3px 10px",
              borderRadius: "15px",
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
          >
            {item.orders} orders
          </Box>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={() => {}}
          >
            <MoreVertIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerItem;
