import { ThemeProvider } from './theme.provider';

export const AppProvider = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
);
