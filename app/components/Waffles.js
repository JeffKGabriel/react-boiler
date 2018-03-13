import React, { Component } from 'react'
import { connect } from 'react-redux'

import {updatePath} from '../reducers/path'


class Waffles extends Component{

  constructor (props) {
    super(props)
  }

  componentWillMount(){
    this.props.dispatch(updatePath(this.props.location.pathname))
  }

  render(){
    return(
      <div className="contentPage">
        <div className="jumbotron text-center">
          <h3>Waffles</h3>
        </div>
      </div>
    )
  }
}

function mapStateToProps({path}) {
  return {
    path: path.path
  }
}

export default connect(mapStateToProps)(Waffles)
