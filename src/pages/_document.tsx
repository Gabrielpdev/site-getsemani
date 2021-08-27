/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

          <link rel="manifest" href="/manifest.json" />

          <link rel="apple-touch-icon" href="/apple-icon.png" />
          <meta name="theme-color" content="#2F2F2F" />

          <link rel="apple-touch-icon" href="/pwa-icon/128x128.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/pwa-icon/128x128.png" />
          <link rel="apple-touch-icon" sizes="167x167" href="/pwa-icon/152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/pwa-icon/192x192.png" />
        </Head>

        <body>
          <noscript>
            Você precisa habilitar o JavaScript no seu navegador para essa
            aplicação funcionar.
          </noscript>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
