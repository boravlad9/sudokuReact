import {GET_CONTACTE, SET_CONTACTE, SET_SELECTED} from "../Actions/actions"

export const reducer = (state = [], action) =>{
  switch (action.type) {
    case SET_CONTACTE:
      const contacts = action.payload.response;
      return {
        ...state,
        contacts : contacts};
    case SET_SELECTED:
      const selected = action.payload.value;
      return {
            ...state,
            selected : selected};
    default:
      return state;
  }
}
