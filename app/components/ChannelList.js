import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import ChannelItem from './ChannelItem'


class ChannelList extends Component{

  constructor (props) {
    super(props)

  }

/*

  componentDidMount(){
    //let listBoxWidth = document.getElementById("listBox").offsetWidth;
    let listBoxWidth = this.reffff;
    let nodeDommm = ReactDOM.findDOMNode( listBoxWidth).getBoundingClientRect().width

    console.log("width of listbox", listBoxWidth);
    console.log("round2", nodeDommm);

    let numOfCols = Math.floor(nodeDommm / 220)
    let subBoxWidth = numOfCols * 220
    this.setState({
      "subBoxWidth" : subBoxWidth
    })

    console.log("numOfCols",numOfCols);
    console.log("subBoxWidth",this.state.subBoxWidth);
  }
  */


  render(){

/*
    console.log("redner subBoxWidth",this.state.subBoxWidth);
    let subBoxWidth = this.state.subBoxWidth
    */

    const channelList = this.props.items.map( (a,k)=>{
      return(
        <ChannelItem
          channelId={a.id}
          title={a.title}
          pic={a.pic}
          key={k}
        />
      )
    })




    return(
      <div className="col-xs-12"
        onClick={this.toggleFooter}
        style={{
          marginBottom:30
        }}
        >
        <div className="col-xs-1 leftColTitles">
          {this.props.name}
        </div>
        <div className="col-xs-10"
            //  id="listBox"
            //  ref={(input) => { this.reffff = input; }}
              style={{
                margin : '0 auto',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',

                 }}
           >
             {channelList}

        </div>
      </div>
    )
  }

}

export default ChannelList
