import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html className="bg-fixed bg-my-gradient">
        <Head />
        <body className="text-white text-shadow">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument