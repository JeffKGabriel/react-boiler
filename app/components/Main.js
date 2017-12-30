import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import {withRouter} from 'react-router'

import Header from './Header.js'
import Footer from './Footer.js'
import Favicon from 'react-favicon'

import Home from './Home.js'
import Waffles from './Waffles.js'
import Login from './Login.js'

import {getUser} from '../reducers/auth'

require('../styles/index.css');

class Main extends Component{

  componentWillMount(){
    this.props.dispatch(getUser())
  }

  render(){
    return(
      <div className='site'>
        <Favicon url={require('../imgs/favicons/favicon-96x96.png')}/>
        <Header />
        <main className='content'>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/login' component={Login} />
              <Route path='/waffles' component={Waffles} />
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }

}

export default withRouter(connect()(Main))
