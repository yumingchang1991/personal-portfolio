import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from '../utility/createEmotionCache';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description"
            content="This portfolio includes full-stack projects focusing on backend features. Besides, if you would like to connect with me, you could just book a time in contact page" />
          <meta name="keywords" content="Backend, Developer, Portfolio, YuMing, Yu-Ming, Yu-Ming Chang" />
          {/* open graph */}
          <meta name="og:title" 
            content='Backend Developer Portfolio by Yu-Ming Chang' />
          <meta name="og:description" 
            content="This portfolio includes full-stack projects focusing on backend features. Besides, if you would like to connect with me, you could just book a time in contact page" />
          <meta name="og:type" content='profile' />
          <meta name="og:image:url" content='https://images.pickapic.live/get/13b941d4-e9f0-9085-931a-7ed408652ae4-1656161151.png' />
          <meta name="og:url" content='https://yumingchang1991.github.io/personal-portfolio/' />
          
          {/* google font */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap" rel="stylesheet" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          {/* favicon */}
          <link rel="icon" href="favicon/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
          <link rel="manifest" href="favicon/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
