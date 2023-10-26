import type { AppProps } from 'next/app';
import Head from 'next/head';

import './index.scss';
import { AppProvider } from './provider';

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <Head>
        <meta name='keywords' content='Countries, meta, nextjs' />
        <meta name='author' content='Fyargat' />
        <title>Countries</title>
        <meta property='og:title' content='Countries' key='title' />
      </Head>
      <Component {...pageProps} />
    </AppProvider>
  );
};
