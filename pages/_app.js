import App, {Container} from 'next/app'
import React from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import {withRedux} from '../modules/store'
import NextNProgress from 'nextjs-progressbar'

import '../styles/main.scss'

class ShopwindowApp extends App {
  componentDidMount() {
    smoothscroll.polyfill()
  }

  componentDidUpdate() {
    window.scrollTo(0, 0)
  }

  static async getInitialProps({Component, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render() {
    const {Component, pageProps} = this.props

    return (
      <Container>
        {/* Progress bar congif */}
        <NextNProgress
          color="#FF9142"
          // startPosition="0.3"
          stopDelayMs={50}
          height="4"
        />
        <Component {...pageProps}/>
      </Container>
    )
  }
}

export default withRedux(ShopwindowApp)
