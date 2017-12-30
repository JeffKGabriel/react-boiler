import React, { Component } from 'react'
import { connect } from 'react-redux'


var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


class LeftColButton extends Component{

  constructor(props){
    super(props)
    this.state={hidden : true}
  }

  showLabel=()=>{
    this.setState({hidden:false})
  }

  hideLabel=()=>{
    this.setState({hidden:true})

  }

  render(){
    let thisTab = this.props.tab.substr(1);
    if(thisTab == "")thisTab ="maps"
    console.log("this Tab",thisTab);
    console.log("name",this.props.name);
    return(
      <div>

        <Link to={"/"+this.props.name} style={{ textDecoration: 'none' }}>

          {thisTab == this.props.name
          ?
          <div className={"box leftColButtonActive fa "+this.props.a}
            onMouseEnter={this.showLabel}
            onMouseLeave={this.hideLabel}
            style={{backgroundColor:this.props.bgColor}}
            >
          </div>
          :
          <div className={"box leftColButton fa "+this.props.a}
            onMouseEnter={this.showLabel}
            onMouseLeave={this.hideLabel}
            >
          </div>
          }



          <div className={this.state.hidden ? "leftColButtonLabelHidden" :  "leftColButtonLabel"}>
            {this.props.name}
          </div>

        </Link>

      </div>
    )
  }

}



  export default connect()(LeftColButton)
