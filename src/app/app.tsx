import type { AppProps } from 'next/app';

import './index.scss';

export const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
