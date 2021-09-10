import {GET_CONTACTE} from "../Actions/actions"

export const reducer = (state = [], action) =>{
  switch (action.type) {
    case GET_CONTACTE:
        return state;
      break;
    default:
      return state;
  }
}
