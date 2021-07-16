import { SAVE_TO_LIST } from '../actions'

const charReducer = (state = [], action) => {
  switch(action.type) {
    case SAVE_TO_LIST:
      const obj = action.payload.obj
      console.log(obj)
      return [obj, ...state]

    default: 
      return state
  }
}

export default charReducer