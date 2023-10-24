import { ThemeContextProvider } from '@/entities/theme';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <ThemeContextProvider>{children}</ThemeContextProvider>
);
