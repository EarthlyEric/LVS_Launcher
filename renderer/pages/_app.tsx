import React from 'react';
import type { AppProps } from 'next/app';

import '../styles/globals.css';

function LVS_Launcher({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default LVS_Launcher
