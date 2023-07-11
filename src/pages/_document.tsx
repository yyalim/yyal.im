import Document, { Html, Head, Main, NextScript } from "next/document"
import path from 'path'
import fs from 'fs'

const ROBOTO_FONTS_PATH = path.join(process.cwd(), 'public', 'fonts', 'Roboto')
const ROBOTO_FONTS_URL = '/fonts/Roboto/'
const fontsFilenames = fs.readdirSync(ROBOTO_FONTS_PATH)

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Yusuf Yalım</title>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />

          {fontsFilenames.map(filename => <link
            key={filename}
            rel="preload"
            href={path.join(ROBOTO_FONTS_URL, filename)}
            as="font"
            crossOrigin=""
          />)}
        </Head>
        <body className="dark">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
