import React from 'react';
import type { AppProps } from 'next/app';

import '../styles/globals.css';

function lvs_launcher({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default lvs_launcher
