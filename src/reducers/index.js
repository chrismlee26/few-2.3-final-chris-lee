import { combineReducers } from 'redux'
import starwarsReducer from './starwarsReducer'

const rootReducer = combineReducers({
  starWars: starwarsReducer
})

export default rootReducer