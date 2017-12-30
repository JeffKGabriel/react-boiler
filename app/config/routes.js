import React from 'react'
import { Route } from 'react-router'

import Main from '../components/Main.js'
import Home from '../components/Home.js'

const routes = (

  <Router>
    <div>
      <Route exact path='/' component={Main}/>
      <Route path='/home' component={Home} />
    </div>
  </Router>
)

export default routes
