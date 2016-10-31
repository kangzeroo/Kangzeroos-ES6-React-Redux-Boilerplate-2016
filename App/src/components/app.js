import React, { Component } from 'react'
import {connect} from 'react-redux'
import Radium from 'radium'

import { xWhiteSmoke } from '../stylesJS/base_colors'
import { toggleSideMenu } from '../actions/sideMenuActions'

import SideMenu from './SideMenu/SideMenu'
import SideIcon from './SideMenu/SideIcon'

class App extends Component {

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
        <div>
          <div onClick={this.props.toggleSideMenu} style={comStyles(this.props.sideMenuVisible).shadow}></div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  toggleSideMenu: React.PropTypes.func.isRequired,
  sideMenuVisible: React.PropTypes.bool
}

const RadiumHOC = Radium(App)

function mapStateToProps(state){
  return {
    sideMenuVisible: state.sideMenu.visible
  }
}

export default connect(mapStateToProps, {toggleSideMenu})(RadiumHOC)

// ================================

const comStyles = (sideMenuVisible) => {
  let paramCSS = {
    display: "none",
    backgroundColor: "rgba(0,0,0,0)"
  }
  if(sideMenuVisible){
    paramCSS.display = "flex"
    paramCSS.backgroundColor = "rgba(0,0,0,0.3)"
    paramCSS.transition = "background-color 0.5s ease"
  }
  return {
    app: {
      width: "100%",
      height: "100vh",
      margin: "0",
			left: "0",
			top: "0",
			position: "fixed",
      backgroundColor: xWhiteSmoke,
    },
    sideMenuIcon: {
      position: "absolute",
      margin: "20px 0px 0px 20px",
			zIndex: "99"
    },
    shadow: {
      width: "100%",
      height: "100%",
      position: "absolute",
      ...paramCSS
    }
  }
}
