import React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'

export default class _document extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="UTF-8"/>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible"/>
          <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet"/>
          <title>Next.js Starter</title>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </html>
    )
  }
}
