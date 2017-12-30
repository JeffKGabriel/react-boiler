import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as playlistReducer from '../reducers/playlists'
import * as authReducer from '../reducers/auth'



class Footer extends Component{

  constructor (props) {
    super(props)

  }

  componentWillReceiveProps(nextProps){

  }

  render(){

    return(
      <div className="footer col-xs-12">
        footer
      </div>
    )
  }
}

export default connect(
    ({auth,playlists})=>({
      uid: auth.uid,
      username : auth.username,
    })
)(Footer)
