import React from 'react';
import type { AppProps } from 'next/app';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = true;

import '../styles/globals.css';

function LVS_Launcher({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default LVS_Launcher