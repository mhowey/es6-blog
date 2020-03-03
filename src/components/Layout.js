import React from 'react'
import { Link } from 'gatsby'
import '../css/App.css'
import es6logo from '../assets/es6-today-logo.svg'
import Helmet from 'react-helmet'
// require('prismjs/themes/prism-tomorrow.css')
// require('prismjs/plugins/line-numbers/prism-line-numbers.css')

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '-30px',
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
            <img
              src={es6logo}
              alt="logo"
              style={{
                marginRight: '10px',
                height: '55px',
                width: '80px',
                minWidth: '80px',
              }}
            />
          </Link>

          <h2
            style={{
              marginBottom: rhythm(1.5),
              marginTop: 5,
              marginLeft: '30px',
              fontSize: '2.5rem',
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
                width: '80%',
              }}
              to={'/'}
            >
              {title}
            </Link>
          </h2>
        </div>
      )
    } else {
      header = (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '-30px',
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
            <img
              src={es6logo}
              alt="logo"
              style={{
                marginRight: '10px',
                height: '40px',
                width: '60px',
                minWidth: '60px',
              }}
            />
          </Link>

          <h2
            style={{
              marginBottom: rhythm(1.5),
              marginTop: 5,
              marginLeft: '30px',
              fontSize: '2rem',
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
                width: '80%',
              }}
              to={'/'}
            >
              {title}
            </Link>
          </h2>
        </div>
      )
    }
    return (
      <React.Fragment>
        <Helmet title="foo-bar" defer={false}>
          <script
            data-ad-client="ca-pub-0460592582093854"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
        </Helmet>
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            backgroundColor: `#fff`,
          }}
        >
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/icon.css"
          />
          {header}
          {children}
        </div>
      </React.Fragment>
    )
  }
}

export default Layout
