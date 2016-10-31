import React, {Component} from 'react'
import {connect} from 'react-redux'
import Radium from 'radium'

import { toggleSideMenu } from '../../actions/sideMenuActions'

class SideIcon extends Component {

	render() {
		return (
			<div onClick={this.props.toggleSideMenu} style={comStyles(this.props.enterMode).icon}>
				<i className='ion-navicon-round'></i>
			</div>
		)
	}
}

SideIcon.propTypes = {
  toggleSideMenu: React.PropTypes.func.isRequired,
	enterMode: React.PropTypes.bool
}

const RadiumHOC = Radium(SideIcon)

export default connect(null, {toggleSideMenu})(RadiumHOC)

// ================================

const comStyles = (enterMode) => {
	let enterCSS
	if(enterMode){
		enterCSS = {
			position: "absolute",
			margin: "20px 0px 0px 20px",
			zIndex: "98"
		}
	}
	return {
		icon: {
      fontSize: "1.5rem",
			...enterCSS
		}
	}
}
