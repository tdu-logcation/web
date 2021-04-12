/**!
 * Copyright (C) 2021 tdu-historylog project
 */

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="ja-JP" dir="ltr">
        <Head>
          {/* windows */}
          {/* <meta
            name="msapplication-square70x70logo"
            content="/site-tile-70x70.png"
          />
          <meta
            name="msapplication-square150x150logo"
            content="/site-tile-150x150.png"
          />
          <meta
            name="msapplication-wide310x150logo"
            content="/site-tile-310x150.png"
          />
          <meta
            name="msapplication-square310x310logo"
            content="/site-tile-310x310.png"
          /> */}
          <meta name="msapplication-TileColor" content="#000" />
          {/* safari */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#000" />
          <meta name="apple-mobile-web-app-title" content="TDU log" />
          {/* <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon-180x180.png"
          /> */}
          {/* 一般 */}
          <meta name="application-name" content="TDU log" />
          <meta name="theme-color" content="#000" />
          <meta
            name="description"
            content="A log application that allows you to keep a history of your actions."
          />
          {/* <link rel="icon" sizes="192x192" href="/icon-192x192.png" /> */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
