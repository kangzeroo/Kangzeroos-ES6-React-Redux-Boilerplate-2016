// See <App> (ie ./app.js) to read documentation on how a React component works
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium'

class Card extends Component {

	render() {
		return (
			<div style={comStyles().mainview}>
				{this.props.content}
			</div>
		)
	}
}

Card.propTypes = {
  content: React.PropTypes.string.isRequired
}

const RadiumHOC = Radium(Card)

export default connect()(RadiumHOC)

// ================================

const comStyles = () => {
	return {
		mainview: {
			textAlign: "center"
		},
	}
}
