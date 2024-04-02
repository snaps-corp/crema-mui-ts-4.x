import React, { ReactElement } from 'react';
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material/styles';
import AppLocale from '@crema/services/localization';
import { useThemeContext } from '../AppContextProvider/ThemeContextProvider';
import { useLocaleContext } from '../AppContextProvider/LocaleContextProvider';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface AppThemeProviderProps {
  children: ReactElement;
}

const AppThemeProvider: React.FC<AppThemeProviderProps> = (props) => {
  const { theme } = useThemeContext();
  const { locale } = useLocaleContext();
  const { muiLocale } = AppLocale[locale.locale];

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={createTheme(theme, muiLocale)}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {props.children}
        </LocalizationProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default AppThemeProvider;
