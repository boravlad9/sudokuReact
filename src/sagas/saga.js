import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {useApiRequest} from '../Services/useApiRequest';

function* fetchContact(action) {

  let api = useApiRequest();
  const contacts = yield call(api.contacts, action.payload).then(
    response => {
      return response.data.data.items;
    }
  );
  yield put({contacts: contacts});
}

function* mySaga() {
  yield takeEvery("GET_CONTACTE", fetchContact);
}

export default mySaga;
