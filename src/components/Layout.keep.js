import React from 'react'
import { Link } from 'gatsby'
import '../css/App.css'
import es6logo from '../assets/eS6todayLogo.svg'
import Helmet from 'react-helmet'

import { rhythm, scale } from '../utils/typography'
import { createUseStyles } from 'react-jss'

// const useStyles = createUseStyles({
//   backButton: {
//     border: '1px #ccc solid',
//     borderRadius: '5px',
//     padding: '15px 25px',
//     cursor: 'pointer',
//     color: '#666',
//   },
// })
// const styles = useStyles()
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

          <h2
            style={{
              marginBottom: rhythm(1.5),
              marginTop: 5,
              marginLeft: '30px',
              fontSize: '2.5rem',
            }}
          >
            {title}
          </h2>
        </div>
      )
    } else {
      header = (
        <>
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
          <h4>
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
                width: '80%',
              }}
              to={'/'}
            >
              <button style={{}}>&lt;&lt; Back to index</button>
            </Link>
          </h4>
        </>
      )
    }
    return (
      <React.Fragment>
        <Helmet title="adsense" defer={false}>
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
