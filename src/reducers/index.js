import { combineReducers } from 'redux'
import starwarsReducer from './starwarsReducer'
import charReducer from './charReducer'

const rootReducer = combineReducers({
  starWars: starwarsReducer,
  savedList: charReducer,
})

export default rootReducer