import { INPUT_CHAR, SAVE_TO_LIST } from '../actions'

const starwarsReducer = (state = null, action) => {
  switch(action.type) {
    case INPUT_CHAR:
      return action.payload
    case SAVE_TO_LIST:
      console.log(action)
      return action.payload
    default: 
      return state
  }
}

export default starwarsReducer