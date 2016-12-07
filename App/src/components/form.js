// See <App> (ie ./app.js) to read documentation on how a React component works
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium'
import { submitFormToSomewhere } from '../api/myAPI'
// import { someAction } from '../actions/contentActions'

class ReactForm extends Component {

		constructor(){
			super()
			this.state = {
				name: "",
				email: "",
				consent: false,
				successMessage: "",				// for our success messages to be displayed on screen
				errorMessage: ""					// for for error messages to be displayed on screen
			}
		}

		// a general utility function to change form values
		// can be used for any text value
		// attr is passed in using .bind(this, "attr") and event is implictly passed in as a result of an event (such as onChange and onClick)
		handleFormChange(attr, event){
			console.log(attr, event.target.value)
			this.setState({
				[attr]: event.target.value
			})
		}

		// a function to handle any toggling of booleans
		handleFormToggle(attr){
			console.log(attr, !this.state[attr])
			this.setState({
				[attr]: !this.state[attr]
			})
		}

 		// form submission with input validation
		// sets error or success messages
		submitForm(){
			if(this.state.name == "" || this.state.consent == false){
				this.setState({
					errorMessage: "Please enter at least a name and consent.",
					successMessage: ""
				})
			}else{
				submitFormToSomewhere()
					.then((data)=>{
						this.setState({
							successMessage: data,
							errorMessage: ""
						})
					})
					.catch((err)=>{
						this.setState({
							errorMessage: err,
							successMessage: ""
						})
					})
			}
		}

		// render an error or success message based on the React state
		// conditional statements used throughout this React component determine whether a message will show
		renderMessage(){
			if(this.state.errorMessage){
				return (
					<div className="alert alert-danger alert-dismissible" style={comStyles().message}>
					  <strong>Error!</strong> {this.state.errorMessage}
						<b onClick={()=>this.setState({errorMessage: ""})} style={comStyles().messageClose}>&times;</b>
					</div>
				)
			}
			if(this.state.successMessage){
				return (
					<div className="alert alert-success alert-dismissible" style={comStyles().message}>\
					  <strong>Success!</strong> {this.state.successMessage}
						<b onClick={()=>this.setState({successMessage: ""})} style={comStyles().messageClose}>&times;</b>
					</div>
				)
			}
		}

		render() {
			return (
				<div style={comStyles().mainview}>
					<div style={comStyles().tray}>
						<h1 style={comStyles().header}>Kangzeroos</h1>
						<h3 style={comStyles().header}>ES6 React-Redux Boilerplate</h3>
						<div style={comStyles().logosBox}>
							<img src='../../../res/images/react.png' onClick={()=> this.goToLink('https://facebook.github.io/react/docs/hello-world.html')} style={comStyles().logo} />
							<img src='../../../res/images/redux.png' onClick={()=> this.goToLink('http://redux.js.org/docs/introduction/')} style={comStyles().logo} />
						</div>
					</div>
					<div style={comStyles().formBox}>
						<input type='text' value={this.state.name} onChange={this.handleFormChange.bind(this, "name")} placeholder='Name' style={comStyles().nameForm} />
						<input type='text' value={this.state.email} onChange={this.handleFormChange.bind(this, "email")} placeholder='Email' style={comStyles().emailForm} />
						<div style={consentStyles().consentContainer}>
							<input type='checkbox' checked={this.state.consent} onChange={()=>this.handleFormToggle('consent')} style={consentStyles().consentCheck} />
							<div style={consentStyles().consentText}>Consent</div>
						</div>
					</div>
					{this.renderMessage()}
					<button className='btn btn-primary' onClick={this.submitForm.bind(this)}>Submit</button>
					<div style={stateStyles().stateBox}>
						<div id='nameField' style={stateStyles().stateItem}>Name: {this.state.name}</div>
						<div id='emailField' style={stateStyles().stateItem}>Email: {this.state.email}</div>
						<div id='consentField' style={stateStyles().stateItem}>
							Consent: {this.state.consent ? "TRUE" : "FALSE"}
						</div>
					</div>
				</div>
			)
		}
}

ReactForm.propTypes = {
	// something: React.PropTypes.object,
	// someAction: React.PropTypes.func.isRequired
}

function mapStateToProps(state){
	return {
		// something: state.something
	}
}

const RadiumHOC = Radium(ReactForm)

export default connect(
	// mapStateToProps,
	// { someAction }
)(RadiumHOC)

// ================================

const comStyles = () => {
	return {
		mainview: {
			textAlign: "center",
      padding: "20px",
      margin: "auto",
      height: "100%"
		},
    tray: {
      display: "flex",
      flexDirection: "column"
    },
    header: {
      textAlign: "center",
    },
    logosBox: {
      margin: "auto",
      height: "30%",
      dislay: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    logo: {
      width: "200px",
      display: "inline-block",
      margin: "50px 20px 20px 20px"
    },
		formBox: {
			margin: "center",
			display: "flex",
			justifyContent: "center",
			flexDirection: "column",
			margin: "20px auto"
		},
		nameForm: {
			width: "30%",
			minWidth: "300px",
			margin: "10px auto",
			padding: "10px",
		},
		emailForm: {
			width: "30%",
			minWidth: "300px",
			margin: "10px auto",
			padding: "10px",
		},
		message: {
			width: "40%",
			margin: "15px auto"
		},
		messageClose: {
			float: "right",
			fontSize: "1rem",
			cursor: "pointer"
		}
	}
}

const consentStyles = () => {
	return {
		consentContainer: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
		},
		consentCheck: {
			height: "30px",
			width: "30px",
			margin: "10px 5px 10px 5px",
		},
		consentText: {
			fontSize: "1.2rem",
			alignItem: "center",
			cursor: "pointer"
		}
	}
}

const stateStyles = () => {
	return {
		stateBox: {
			display: "center",
			justifyContent: "center",
			flexDirection: "column",
			padding: "30px"
		},
		stateItem: {
			width: "200px",
			margin: "0 auto",
		}
	}
}
