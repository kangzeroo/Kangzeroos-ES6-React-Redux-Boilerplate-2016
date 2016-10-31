import React, { Component } from 'react'
import {connect} from 'react-redux'
import Radium from 'radium'

import { xWhiteSmoke } from '../stylesJS/base_colors'

import SideMenu from './SideMenu/SideMenu'
import SideIcon from './SideMenu/SideIcon'

class App extends Component {

  // renderSideMenu(){
  //   if(this.props.sideMenuVisible){
  //     return (
  //       <SideMenu />
  //     )
  //   }else{
  //     return (
  //       <SideIcon enterMode={true} />
  //     )
  //   }
  // }

  renderSideMenu(){
    return (
      <div>
        {this.props.sideMenuVisible ? null : <SideIcon />}
        <SideMenu />
      </div>
    )
  }

  render() {
    return (
      <div style={comStyles().app}>
        {this.renderSideMenu()}
        {this.props.children}
      </div>
    )
  }
}

const RadiumHOC = Radium(App)

function mapStateToProps(state){
  return {
    sideMenuVisible: state.sideMenu.visible
  }
}

export default connect(mapStateToProps)(RadiumHOC)

// ================================

const comStyles = () => {
  return {
    app: {
      width: "100%",
      height: "100vh",
      margin: "0",
      backgroundColor: xWhiteSmoke,
    },
    sideMenuIcon: {
      position: "absolute",
      margin: "20px 0px 0px 20px",
			zIndex: "99"
    }
  }
}
