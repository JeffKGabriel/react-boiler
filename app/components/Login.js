import React, { Component } from 'react'
import { connect } from 'react-redux'

/*
import firebase from 'firebase'
import {ref, firebaseAuth} from '../config/constants'
import fireAuth from '../helpers/fireAuth'
import {addUserToFireBase, logoutUser, loginUser} from '../reducers/auth'
*/

import {updatePath} from '../reducers/path'


class Login extends Component{

  constructor (props) {
    super(props)
    this.state={
      email:'',
      password:''
    }
  }

  componentWillMount(){
    this.props.dispatch(updatePath(this.props.location.pathname))
  }

  componentWillReceiveProps(nextProps){
    if(this.props.authed != nextProps.authed && nextProps.authed){
      this.props.history.push("/")
    }
  }

  handleEmail=(e)=>{
    this.setState({email:e.target.value})
  }

  handlePassword=(e)=>{
    this.setState({password:e.target.value})
  }

  handleNewUser=()=>{
    console.log('add user to firebase');
    // this.props.dispatch(addUserToFireBase(this.state.email,this.state.password))
  }

  handleLogOut=()=>{
    this.props.dispatch(logoutUser())
  }

  handleLogin=()=>{
    console.log('login user to firebase');
    // this.props.dispatch(loginUser(this.state.email,this.state.password))
  }

  render(){

    return(
      <div className='login'>
          <div className='loginForm'>
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Email" value={this.state.email} onChange={(e)=>{this.handleEmail(e)}} />
                <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={(e)=>{this.handlePassword(e)}} />
              </div>
              <button type="submit" className="btn btn-default" onClick={()=>{this.handleLogin()}}>Login</button>
              <button type="submit" className="btn btn-default" onClick={()=>{this.handleNewUser()}}>Register</button>
            </form>
          </div>
          {
            this.props.error != ''
            ? <div className='loginError'>{this.props.error.message}</div>
            : null
          }
          <button type="submit" className="btn btn-default" onClick={()=>{this.handleLogOut()}}>LogOut</button>
      </div>
    )
  }

}

let mapStateToProps=({auth})=>{
  return{
    authed : auth.authenticated,
    uid: auth.uid,
    email : auth.email,
    error : auth.error
  }
}

export default connect(mapStateToProps)(Login)
