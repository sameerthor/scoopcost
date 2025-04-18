import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    // Filter out noscript[data-n-css]
    const filteredStyles = initialProps.styles.filter(
      (style) =>
        !(
          style?.type === 'noscript' &&
          style?.props?.['data-n-css'] !== undefined
        )
    );

    return {
      ...initialProps,
      styles: filteredStyles,
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
