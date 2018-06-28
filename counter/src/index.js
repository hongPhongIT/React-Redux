import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import Visible from './containers/visibility'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <Visible />
  </Provider>,
  document.getElementById('root')
)