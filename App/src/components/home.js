import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium'

import { xWhiteSmoke } from '../stylesJS/base_colors'

import { convertToLowerCase } from '../api/myAPI'
import { addValueToContent } from '../actions/contentActions'

class Home extends Component {

  constructor(){
    super()
    this.state = {
      textValue: ""
    }
  }

  handleTextChange(event){
    this.setState({
      textValue: event.target.value
    })
  }

  submitContent(){
    convertToLowerCase(this.state.textValue)
      .then((data)=>{
        this.props.addValueToContent(data)
        this.setState({
          textValue: ""
        })
      })
  }

  renderContent(){
    const contents = []
    this.props.myContent.forEach((content)=>{
      contents.push(
        (<div style={contentStyles().item}>
            {content.text}
          </div>)
      )
    })
    return contents
  }

	render() {
		return (
			<div style={comStyles().mainview}>
        <div style={contentStyles().tray}>
          <h2 style={contentStyles().header}>List of Content</h2>
          <div style={contentStyles().list}>
            {this.renderContent()}
          </div>
        </div>
        <div style={comStyles().input}>
          <input type='text' value={this.state.textValue} onChange={this.handleTextChange.bind(this)} />
          <button className='btn btn-primary' onClick={this.submitContent.bind(this)}>Add To Redux State</button>
        </div>
			</div>
		)
	}
}

Home.propTypes = {
  myContent: React.PropTypes.array.isRequired
}

const RadiumHOC = Radium(Home);

function mapStateToProps(state){
  return {
    myContent: state.content.myContent
  }
}

export default connect(mapStateToProps, {addValueToContent})(RadiumHOC)


// ================================

const comStyles = () => {
  return {
    mainview: {
      border: "3px solid black",
      backgroundColor: xWhiteSmoke,
      padding: "20px",
      margin: "auto",
      height: "100%"
    },
    input: {
      width: "100%",
      margin: "10px 0px 0px 0px",
      display: "flex",
      justifyContent: "center"
    }
  }
}

const contentStyles = () => {
  return {
    tray: {
      display: "flex",
      flexDirection: "column"
    },
    header: {
      textAlign: "center",
    },
    list: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      flexWrap: "wrap",
      margin: "30px"
    },
    item: {
      border: "2px solid black",
      margin: "10px",
      fontWeight: "bold",
      borderRadius: "5px",
      padding: "5px"
    }
  }
}
