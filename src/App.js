import React, { Component } from 'react'
import { Row, Column } from 'simple-flexbox'
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
        <Column vertical='space-around' horizontal='center'>
          Hello Reddit
        </Column>
    )
  }
}

export default App
