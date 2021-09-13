import {GET_CONTACTE, SET_CONTACTE} from "../Actions/actions"

export const reducer = (state = [], action) =>{
  switch (action.type) {
    case SET_CONTACTE:
        const contacts = action.payload.response;
        return {
          ...state,
          contacts : contacts};
    default:
      return state;
  }
}
