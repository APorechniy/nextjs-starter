import {combineReducers, createStore, applyMiddleware} from 'redux'
import {createWrapper} from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import config from 'config'

import * as Global from './global'

const defaultState = {
  global: Global.defaultState
}

const rootReducer = combineReducers({
  global: Global.reducer
})

const makeStore = (initialState = defaultState) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )

  return store
}

const wrapper = createWrapper(
  makeStore,
  {debug: config.debug.includes('redux')}
)

export const {withRedux} = wrapper
