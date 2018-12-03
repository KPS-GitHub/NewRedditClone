import React, { Component } from 'react'
import { Row, Column } from 'simple-flexbox'
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
        // 'Container' column - all of page content will be in here
        <Column vertical='start' horizontal='stretch'>
          {/* header row */}
          <Row vertical='center' horizontal='space-around'>
          </Row>
          {/* view + sorting options row - like a small extension of header across the bottom of it */}
          <Row vertical='center' horizontal='start'>
          </Row>
        </Column>
    )
  }
}

export default App
