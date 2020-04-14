import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import { ErrorBoundary, ThemeProvider } from '@client/containers';

class MainApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Tenshi</title>
        </Head>
        <ThemeProvider>
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </ThemeProvider>
      </>
    );
  }
}

export default MainApp;
