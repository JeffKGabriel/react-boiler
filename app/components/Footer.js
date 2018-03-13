import React, { Component } from 'react'
import { connect } from 'react-redux'

// import * as authReducer from '../reducers/auth'


class Footer extends Component{

  render(){
    return(
      <div className="footer col-xs-12">
        footer
      </div>
    )
  }
}

let mapStateToProps=({auth})=>{
  return{
    uid: auth.uid,
    username : auth.username,
  }
}

export default connect(mapStateToProps)(Footer)
