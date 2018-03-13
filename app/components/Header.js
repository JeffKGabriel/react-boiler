import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Header extends Component{

  render(){
    return(
      <div className="col-xs-12 header">
          <div className="headerLink">
            <Link to="/waffles" className="headerLink">Waffles</Link>
          </div>
          <div className="headerLink">
            {this.props.authed
              ? <Link to="/user">{this.props.email}</Link>
              : <Link to="/login">Login</Link>
            }
          </div>
      </div>
    )
  }

}

let mapStateToProps=({auth})=>{
  return{
    authed : auth.authenticated,
    email : auth.email
  }
}

export default connect(mapStateToProps)(Header)
