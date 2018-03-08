import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import rootReducer from './reducers'
import 'todomvc-app-css/index.css'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
