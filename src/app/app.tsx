import type { AppProps } from 'next/app';

import './index.scss';
import { AppProvider } from './provider';

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
};
