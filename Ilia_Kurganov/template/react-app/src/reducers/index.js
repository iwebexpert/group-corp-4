import { combineReducers } from 'redux'
import { pageReducer } from './page'
import { statsReducer } from './stats'

const rootReducer = combineReducers({
  page: pageReducer,
  stats: statsReducer,
})

export default rootReducer
