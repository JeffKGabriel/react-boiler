import React from 'react'
import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'

import Main from './Main.js'

import auth from '../reducers/auth.js'
import path from '../reducers/path.js'


const store = createStore(
  combineReducers({
    //reducer,
    path,
    auth,
    // routing: routerReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
)

export default App
