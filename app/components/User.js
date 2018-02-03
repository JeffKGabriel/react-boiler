import React, { Component } from 'react'
import {connect} from 'react-redux'
import {updatePath} from '../reducers/path'
import {logoutUser} from '../reducers/auth'


class User extends Component{

  handleLogOut=()=>{
    this.props.dispatch(logoutUser())
    this.props.history.push("/")
  }

  render(){
    return(
      <div className="">
        {this.props.email}
        <button type="submit" className="btn btn-default" onClick={()=>{this.handleLogOut()}}>LogOut</button>
      </div>
    )
  }
}

function mapStateToProps({auth}) {
  return {
    email: auth.email
  }
}

export default connect(mapStateToProps)(User)
