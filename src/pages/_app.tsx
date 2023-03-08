import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import '../styles/normalize.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
 getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
 Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
 const getLayout = Component.getLayout ?? ((page) => page);

 return (
  <>
   <Head>
    <title>The Machine Shop</title>
   </Head>
   <Component {...pageProps} />
  </>
 );
}
