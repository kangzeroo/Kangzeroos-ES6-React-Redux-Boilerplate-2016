import React, {Component} from 'react'
import {connect} from 'react-redux'
import Radium from 'radium'
import { Link } from 'react-router'

class Header extends Component {

	render() {
		return (
			<div>
        <Link style={comStyles().link} to='/'>Home</Link>
        <Link style={comStyles().link} to='/about'>About</Link>
			</div>
		);
	}
}

Header.propTypes = {
};

const RadiumHOC = Radium(Header);

export default connect()(RadiumHOC);

// ================================

const comStyles = () => {
	return {
		link: {
			margin: "10px"
		}
	}
}
