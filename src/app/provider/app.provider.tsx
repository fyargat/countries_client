import { CountryProvider } from './country.provider';
import { QueryProvider } from './query.provider';
import { ThemeProvider } from './theme.provider';

export const AppProvider = ({ children }: { children: React.ReactNode }) => (
  <QueryProvider>
    <ThemeProvider>
      <CountryProvider>{children}</CountryProvider>
    </ThemeProvider>
  </QueryProvider>
);
