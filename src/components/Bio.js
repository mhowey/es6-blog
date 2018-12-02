import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <p>
          The blog of <strong>Matt Howey</strong>. Usually technology, but not
          always.
        </p>
      </div>
    )
  }
}

export default Bio
