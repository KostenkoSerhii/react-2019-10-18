import {combineReducers} from 'redux'
import {countReducer} from './count'
import {restaurantsReducer} from './restaurants'

const reducer = combineReducers({
  count: countReducer,
  restaurants: restaurantsReducer,
})

export {reducer}