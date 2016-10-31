import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium'

import SideIcon from './SideIcon'
import SideOption from './SideOption'

class SideMenu extends Component {

	render() {
		return (
			<div style={comStyles().mainview}>
				<div style={comStyles().header}>
					<div style={comStyles().menutitle} className='col-md-10'>SideMenu</div>
					<SideIcon className='col-md-2' />
				</div>
        <SideOption text='Home' link='/' />
        <SideOption text='About' link='/about' />
			</div>
		)
	}
}

SideMenu.propTypes = {
}

const RadiumHOC = Radium(SideMenu)

export default connect()(RadiumHOC)

// ================================

const comStyles = () => {
	return {
		mainview: {
			display: "flex",
			flexDirection: "column",
			width: "20%",
			border: "2px solid black",
			height: "100vh",
			position: "absolute",
			zIndex: "99"
		},
		header: {
			display: "flex",
			flexDirection: "row",
			padding: "10px"
		},
		menutitle: {
			textAlign: "center",
			fontSize: "1.5rem"
		}
	}
}
