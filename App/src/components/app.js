import React, { Component } from 'react'
import Radium from 'radium'

import { xWhiteSmoke } from '../stylesJS/base_colors'

import Header from './header'

class App extends Component {
  render() {
    return (
      <div style={comStyles().app}>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

const RadiumHOC = Radium(App)

export default RadiumHOC

// ================================

const comStyles = () => {
  return {
    app: {
      width: "100%",
      height: "100%",
      backgroundColor: xWhiteSmoke,
    }
  }
}
