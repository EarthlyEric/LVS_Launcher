import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Index() {
  return (
    <React.Fragment>
      <Head>
        <title>LVS Launcher</title>
      </Head>
      <div className='grid grid-col-1 text-2xl w-full text-center'>
        <span>⚡ Electron ⚡</span>
        <span>+</span>
        <span>Next.js</span>
        <span>+</span>
        <span>tailwindcss</span>
        <span>=</span>
        <span>💕 </span>
      </div>
    </React.Fragment>
  );
}

export default Index;
