import { INPUT_CHAR } from '../actions'

const starwarsReducer = (state = null, action) => {
  switch(action.type) {
    case INPUT_CHAR:
      return action.payload
    default: 
      return state
  }
}

export default starwarsReducer