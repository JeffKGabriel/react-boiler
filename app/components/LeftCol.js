import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


import LeftColButton from './LeftColButton'

class LeftCol extends Component{

  constructor (props) {
    super(props)
    this.state={
      buttons : ['fa-map-o','fa-bell-o','fa-bookmark-o','fa-paper-plane-o'],
      buttonNames : ['maps','notifications','bookmarks','messages'],
      bgColor: ['#E9EBF6','#F7EFEB','#F6EAEC','#EBF7F7']
    }
  }

  render(){


    let boxes = this.state.buttons.map((a,k)=>{
      return(
        <LeftColButton bgColor={this.state.bgColor[k]} tab={this.props.tab} a={a} key={k} name={this.state.buttonNames[k]} />
      )
    })

    return(
        <div className="LeftCol">
          <div className="leftColBoxes">
            {boxes}
          </div>

        </div>
    )}
  }


  export default connect()(LeftCol)
