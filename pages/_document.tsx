/**!
 * @author Yuto Watanabe
 *
 * Copyright (C) 2021 logcation
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
          <meta name="msapplication-TileColor" content="#000" />
          {/* safari */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#fff" />
          <meta name="apple-mobile-web-app-title" content="Logcation" />
          <link
            rel="apple-touch-icon"
            href="/static/icons/apple-touch-icon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/icons/apple-touch-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/icons/apple-touch-icon-180x180.png"
          />
          <link
            rel="apple-touch-startup-image"
            href="/static/images/apple-splash-2048-2732.png"
            sizes="2048x2732"
          />
          <link
            rel="apple-touch-startup-image"
            href="/static/images/apple-splash-1668-2224.png"
            sizes="1668x2224"
          />
          <link
            rel="apple-touch-startup-image"
            href="/static/images/apple-splash-1536-2048.png"
            sizes="1536x2048"
          />
          <link
            rel="apple-touch-startup-image"
            href="/static/images/apple-splash-1125-2436.png"
            sizes="1125x2436"
          />
          <link
            rel="apple-touch-startup-image"
            href="/static/images/apple-splash-1242-2208.png"
            sizes="1242x2208"
          />
          <link
            rel="apple-touch-startup-image"
            href="/static/images/apple-splash-750-1334.png"
            sizes="750x1334"
          />
          <link
            rel="apple-touch-startup-image"
            href="/static/images/apple-splash-640-1136.png"
            sizes="640x1136"
          />
          {/* OGP */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://log.tdu.app" />
          <meta name="twitter:title" content="Logcation" />
          <meta
            name="twitter:description"
            content="A log application that allows you to keep a history of your actions."
          />
          <meta
            name="twitter:image"
            content="https://log.tdu.app/static/images/ogp.png"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Logcation" />
          <meta
            property="og:description"
            content="A log application that allows you to keep a history of your actions."
          />
          <meta property="og:site_name" content="Logcation" />
          <meta property="og:url" content="https://log.tdu.app" />
          <meta
            property="og:image"
            content="https://log.tdu.app/static/icons/apple-touch-icon.png"
          />
          {/* 一般 */}
          <meta name="application-name" content="Logcation" />
          <meta name="theme-color" content="#fff" />
          <meta
            name="description"
            content="A log application that allows you to keep a history of your actions."
          />
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
