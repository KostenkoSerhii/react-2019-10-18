import {composeWithDevTools} from 'redux-devtools-extension'
import {applyMiddleware, createStore} from 'redux'
import {reducer} from './reducer'
import {logging} from './middlewares/logging'
import generateId from './middlewares/generate-id'
import provideUserId from './middlewares/provide-user-id'

const enhancer = composeWithDevTools(
  applyMiddleware(generateId, provideUserId, logging)
)

const store = createStore(reducer, enhancer)

// only for experiments
window.store = store

export {store}
