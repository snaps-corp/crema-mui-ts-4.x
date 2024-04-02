import { useState } from "react";
import AppCard from "@crema/components/AppCard";
import RecentContact from "./RecentContact";
import Box from "@mui/material/Box";
import { SelectChangeEvent, Typography } from "@mui/material";
import AppScrollbar from "@crema/components/AppScrollbar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CoinDropdown from "./CoinDropdown";
import { QuickTransferType } from "@crema/types/models/dashboards/Crypto";
import IntlMessages from "@crema/helpers/IntlMessages";

type Props = {
  quickTransfer: QuickTransferType;
};
const QuickTransfer = ({ quickTransfer }: Props) => {
  const [selectedCoinId, setSelectedCoinID] = useState(
    quickTransfer.coinList[0].id,
  );

  const selectedCoin = () => {
    return quickTransfer.coinList.find((coin) => coin.id === selectedCoinId);
  };
  const handleCoinChange = (event: SelectChangeEvent<number>) => {
    setSelectedCoinID(event.target.value as number);
  };
  const coin = selectedCoin();
  return (
    <AppCard
      title={<IntlMessages id="dashboard.crypto.quickTransfer" />}
      action={
        <CoinDropdown
          coinList={quickTransfer.coinList}
          selectedCoinId={selectedCoinId}
          handleCoinChange={handleCoinChange}
        />
      }
    >
      <Box
        sx={{
          position: "relative",
          mb: 5,
        }}
      >
        <TextField
          sx={{
            "& .MuiInputBase-input": {
              pl: 40,
              textAlign: "right",
              color: "text.secondary",
            },
          }}
          fullWidth
          id="outlined-basic"
          variant="outlined"
        />
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 150,
            height: 52,
            backgroundColor: "primary.main",
            color: "common.white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
          component="span"
        >
          Amount {coin!.shortName}
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          mb: 3,
        }}
      >
        <Typography
          sx={{
            color: "text.secondary",
            mb: 4,
          }}
        >
          Recent Contact
        </Typography>
        <AppScrollbar>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mx: -4,
            }}
          >
            {quickTransfer.recentContact.map((contact, index) => (
              <Box
                key={index}
                sx={{
                  px: 4,
                  pb: 2.5,
                }}
              >
                <RecentContact recentContact={contact} />
              </Box>
            ))}
          </Box>
        </AppScrollbar>
      </Box>
      <Box
        sx={{
          textAlign: "right",
        }}
      >
        <Button variant="contained">TRANSFER NOW</Button>
      </Box>
    </AppCard>
  );
};

export default QuickTransfer;
