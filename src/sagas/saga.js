import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {useApiRequest} from '../Services/useApiRequest';
import {setContacte} from '../Actions/actions'

function* FetchContact(action) {
  let api = useApiRequest();
  let contacts = yield call(api.contacts, action.payload)
  contacts = contacts.data.data.items;
  yield put(setContacte(contacts));
}

function* mySaga() {
  yield takeEvery("GET_CONTACTE", FetchContact);
}

export default mySaga;
