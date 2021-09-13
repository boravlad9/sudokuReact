export const GET_CONTACTE = 'GET_CONTACTE'
export const SET_CONTACTE = 'SET_CONTACTE'

export const getContacte = () => ({ type: GET_CONTACTE, payload : {} })
export const setContacte = (response) => ({ type: SET_CONTACTE, payload : {response} })
