import React from 'react';

import { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

import '../styles/main.css';
import '../styles/prism-a11y-dark.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <Analytics />
  </>
);

export default MyApp;
