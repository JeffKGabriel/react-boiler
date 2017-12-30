import React, { Component } from 'react'
import { connect } from 'react-redux'

import firebase from 'firebase'
import {ref, firebaseAuth} from '../config/constants'
import fireAuth from '../helpers/fireAuth'
import {updatePath} from '../reducers/path'


class Home extends Component{

  constructor (props) {
    super(props)
  }

  componentWillMount(){
    console.log("home props",this.props)
    this.props.dispatch(updatePath(this.props.location.pathname))
  }

  componentWillReceiveProps(nextProps){
    console.log("nextProps",nextProps);
  }

  render(){
    //Container for the channel List
    return(
      <div style={{}}>
        hi
      </div>
    )
  }


}





export default connect()(Home)
