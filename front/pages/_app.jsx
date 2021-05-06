import React from 'react';
import Head from 'next/head';

import '../styles.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <title>kockeny portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
