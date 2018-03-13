import React, { Component } from 'react'
import { connect } from 'react-redux'

/*
import firebase from 'firebase'
import {ref, firebaseAuth} from '../config/constants'
import fireAuth from '../helpers/fireAuth'
*/

import {updatePath} from '../reducers/path'


class Home extends Component{

  constructor (props) {
    super(props)
  }

  componentWillMount(){
    this.props.dispatch(updatePath(this.props.location.pathname))
  }

  render(){
    return(
      <div style={{}}>
        home
      </div>
    )
  }


}





export default connect()(Home)
