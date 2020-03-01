import React from 'react'
import { Link } from 'gatsby'
import '../css/App.css'
import Helmet from 'react-helmet'
// require('prismjs/themes/prism-okaidia.css')
// require('prismjs/themes/prism-twilight.css')
require('prismjs/themes/prism-tomorrow.css')
// require('prismjs/themes/prism-dark.css')
// require('prismjs/themes/prism-coy.css')
// require('prismjs/themes/prism-funky.css')
// require('prismjs/themes/prism-solarizedlight.css')
// require('prismjs/themes/prism.css')
require('prismjs/plugins/line-numbers/prism-line-numbers.css')

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.25),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          backgroundColor: `#fff`,
        }}
      >
        <Helmet title="foo-bar" defer={false}>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
          <ins
            class="adsbygoogle"
            style="display:inline-block;width:300px;height:250px"
            data-ad-client="ca-pub-0460592582093854"
            data-ad-slot="6042333079"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/icon.css"
        />
        {header}
        {children}
      </div>
    )
  }
}

export default Layout
