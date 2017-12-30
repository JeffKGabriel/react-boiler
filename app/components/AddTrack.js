import React, { Component } from 'react'

class AddTrack extends Component{

  constructor (props) {
    super(props)
    }

  handleEnter(e) {
    if (e.key === 'Enter') {
      console.log('they hit enter');
    }
  }

  render(){
    return(
      <div style={{
        marginLeft:20,
      }}>
      <div
        className="fa fa-plus-square-o addTrackButton"
        aria-hidden="true"
        onClick={this.props.toggleShowAddTrack}
        >
        </div>


      </div>
    )
  }

}

export default AddTrack
