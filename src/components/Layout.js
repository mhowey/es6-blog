import React from 'react'
import { Link } from 'gatsby'
import '../css/App.css'
import es6logo from '../assets/eS6todayLogo.svg'
import Helmet from 'react-helmet'

import { rhythm, scale } from '../utils/typography'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  backButton: {
    border: '1px #BDC1C6 solid',
    borderRadius: '5px',
    padding: '15px 25px',
    cursor: 'pointer',
    color: '#666',
    marginTop: '-20px',
    marginBottom: '20px',
    fontFamily: 'merriweather, serif',
    '&:hover': {
      backgroundColor: '#E4E4E4',
    },
  },
  titleHeader: {
    marginBottom: '20px',
    marginTop: 5,
    marginLeft: '30px',
    fontSize: '2.5rem',
    '@media (max-width: 600px)': {
      fontSize: '2rem !important',
    },
    '@media (max-width: 500px)': {
      fontSize: '1.5rem !important',
    },
    '@media (max-width: 400px)': {
      fontSize: '1.25rem !important',
    },
  },
  titleHeaderSmall: {
    marginBottom: '20px',
    marginTop: 5,
    marginLeft: '30px',
    fontSize: '1.5rem !important',
    '@media (max-width: 600px)': {
      fontSize: '1.25rem !important',
    },
    '@media (max-width: 500px)': {
      fontSize: '1rem !important',
    },
    '@media (max-width: 400px)': {
      fontSize: '1rem !important',
    },
  },
})
const Layout = ({ location, title, children }) => {
  const styles = useStyles()
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

        <h2 className={styles.titleHeader}>{title}</h2>
      </div>
    )
  } else {
    header = (
      <React.Fragment>
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

          <h2 className={styles.titleHeaderSmall}>
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
        <div>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
              width: '80%',
            }}
            to={'/'}
          >
            <button className={styles.backButton}>
              &lt;&lt; Back to index
            </button>
          </Link>
        </div>
      </React.Fragment>
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

export default Layout
