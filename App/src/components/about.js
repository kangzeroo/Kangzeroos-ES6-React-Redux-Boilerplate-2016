// See <App> (ie ./app.js) to read documentation on how a React component works
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium'
// import { someAPI } from '../api/myAPI'
// import { someAction } from '../actions/contentActions'

class About extends Component {

		// constructor(){
		// 	super()
		// 	this.state = {
		// 		didSomething: false
		// 	}
		// }

		// componentWillMount(){
		// 	console.log("Component is about to mount!")
		// }

		// someAboutFunction(){
		// 	someAPI(this.props.something)
		// 		.then((data)=>{
		// 			this.props.someAction(data)
		// 			this.setState({didSomething: true})
		// 		})
		// }

		render() {
			return (
				<div style={comStyles().mainview}>
					About Page
				</div>
			)
		}
}

About.propTypes = {
	// something: React.PropTypes.object,
	// someAction: React.PropTypes.func.isRequired
}

function mapStateToProps(state){
	return {
		// something: state.something
	}
}

const RadiumHOC = Radium(About)

export default connect(
	// mapStateToProps,
	// { someAction }
)(RadiumHOC)

// ================================

const comStyles = () => {
	return {
		mainview: {
			textAlign: "center",
			padding: "20px"
		},
	}
}
