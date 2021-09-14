import {useApiRequest} from '../Services/useApiRequest';

export const GET_CONTACTE = 'GET_CONTACTE'
export const SET_CONTACTE = 'SET_CONTACTE'
export const SET_SELECTED = 'SET_SELECTED'

export function GetContacte(){
  let api = useApiRequest();
  return function(dispatch){
    return api.contacts({}).then(
      response => {
        return dispatch(setContacte(response.data.data.items));
      }
    );
  }
}



export function setContacte(response){
  return {
    type: SET_CONTACTE,
    payload : {response}
  };
}

export function setSelected(value){
  return{
    type: SET_SELECTED,
    payload: {value}
  };
}
