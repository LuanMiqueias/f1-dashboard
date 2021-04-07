import Document, { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/Header";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <title>Dashboard</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
