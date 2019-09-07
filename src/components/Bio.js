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
        }}
      >
        <p>
          All things JavaScript and Front-end Development :: Editor - Matt Howey
        </p>
      </div>
    )
  }
}

export default Bio
