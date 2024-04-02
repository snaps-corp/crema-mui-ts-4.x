import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import CoinDropdown from './CoinDropdown';
import CurrencyField from './CurrencyField';
import IntlMessages from '@crema/helpers/IntlMessages';
import Button from '@mui/material/Button';
import { CoinListType } from '@crema/types/models/dashboards/Crypto';
import { SelectChangeEvent } from '@mui/material';

type Props = {
  coinList: CoinListType[];
  type?: string;
};
const ExchangeForm = ({ coinList, type = 'buy' }: Props) => {
  const [selectedCoinId, setSelectedCoinID] = React.useState(coinList[0].id);
  const [usdValue, setUsdValue] = useState(0);
  const [coinValue, setCoinValue] = useState(0);

  useEffect(() => {
    setUsdValue(0.258 * selectedCoin()!.usdPrice);
    setUsdValue(0.258 * selectedCoin()!.usdPrice);
    setCoinValue(0.258);
  }, [selectedCoinId]);

  const selectedCoin = () => {
    return coinList.find((coin: CoinListType) => coin.id === selectedCoinId);
  };
  const handleCoinChange = (event: SelectChangeEvent<number>) => {
    setSelectedCoinID(event.target.value as number);
  };

  const coin = selectedCoin();
  return (
    <form noValidate autoComplete='off'>
      <Box
        sx={{
          mb: 5,
        }}
      >
        <CoinDropdown
          coinList={coinList}
          selectedCoinId={selectedCoinId}
          handleCoinChange={handleCoinChange}
        />
      </Box>
      <Box
        sx={{
          mb: 5,
        }}
      >
        <CurrencyField
          label={<IntlMessages id='dashboard.crypto.usdAmount' />}
          shortName='USD'
          value={usdValue}
          coinColor='#16C784'
          onChange={(value) => {
            setUsdValue(value);
            setCoinValue(value / coin!.usdPrice);
          }}
        />
      </Box>
      <Box
        sx={{
          mb: 5,
        }}
      >
        <CurrencyField
          label={coin!.coinName}
          value={coinValue}
          hideUSD
          shortName={coin!.shortName}
          onChange={(value) => {
            setCoinValue(value);
            setUsdValue(value * coin!.usdPrice);
          }}
          coinColor={coin!.coinColor}
        />
      </Box>
      <Button
        sx={{
          minHeight: 46,
        }}
        fullWidth
        variant='contained'
      >
        {type === 'buy' ? 'Buy' : 'Sell'} {coin!.shortName}
      </Button>
    </form>
  );
};

export default ExchangeForm;
