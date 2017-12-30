import * as authHelper from '../helpers/fireAuth'
import {ref, firebaseAuth} from '../config/constants'

const initialState = {
  authenticated : false,
  authenticating : false,
  email : null,
  username : null,
  uid : null,
  error : ''
}

const AUTHENTICATING = "AUTHENTICATING"
const AUTHENICATION_SUCCESS = "AUTHENICATION_SUCCESS"
const LOGOUT = "LOGOUT"
const REGISTER_FAILURE = "REGISTER_FAILURE"

export function logout(){
  return{
    type : LOGOUT
  }
}

export function authenticating(){
  return{
    type : AUTHENTICATING
  }
}

export function authenticationSuccess(result,email,uid){
  return{
    type : AUTHENICATION_SUCCESS,
    result,
    email,
    uid,
  }
}

export function registerFailure(error){
  return{
    type: REGISTER_FAILURE,
    error
  }
}

export function loginUser(email,pass){
  return (dispatch, getState) => {
    authHelper.fireAuth(email,pass)
      .then( (user)=>{
        console.log("logged in")
        dispatch( authenticationSuccess(true,user.email,user.uid) )
      })
  }
}

export function logoutUser(){
  return (dispatch, getState) => {
    authHelper.fireAuthLogout()
      .then( ()=>{
        console.log("loggedout")
        dispatch( logout() )
      })
  }
}

export function getUser(){
    return (dispatch, getState) => {
      firebaseAuth().onAuthStateChanged(user=>{
        if(user){
          dispatch( authenticationSuccess(true,user.email,user.uid) )
        }else{
          console.log("no user session");
        }
      })
    }
}

export function addUserToFireBase(email,pass){
  console.log("reducer addUserToFireBase",email,pass);
  return (dispatch, getState) => {
    authHelper.newFireAuth(email,pass)
    .catch((error)=>{
      console.log("new user error",error);
      dispatch( registerFailure(error) )
    })
    .then((user)=>{
      dispatch( authenticationSuccess(true,user.email,user.uid) )
    })
  }
}

export default function auth(state = initialState, action) {

  switch (action.type) {

    case AUTHENTICATING :
      return {
        ...state,
        authenticating : true,
      }
    case AUTHENICATION_SUCCESS :
      return {
        ...state,
        authenticating : false,
        authenticated : action.result,
        email : action.email,
        uid : action.uid
      }
    case LOGOUT :
      return{
        ...state,
        authenticated : false,
        email : null,
        username : null,
        uid : null
      }
    case REGISTER_FAILURE :
      return{
        ...state,
        error: action.error
      }
    default :
      return state
  }

}
