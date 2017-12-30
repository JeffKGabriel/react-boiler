import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

class Header extends Component{

  render(){
    return(
      <div className="col-xs-12 header">
          <div>BlockBets</div>
          <div className="headerLink">
            <Link to="/login">Login</Link>
          </div>
          <div className="headerLink">
            <Link to="/waffles" className="headerLink">Waffles</Link>
          </div>
      </div>
    )
  }

}

export default Header
