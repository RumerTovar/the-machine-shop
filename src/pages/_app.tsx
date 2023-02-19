import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/normalize.css';
export default function MyApp({ Component, pageProps }: AppProps) {
 return (
  <>
   <Head>
    <title>The Machine shop</title>
   </Head>
   <Component {...pageProps} />
  </>
 );
}
