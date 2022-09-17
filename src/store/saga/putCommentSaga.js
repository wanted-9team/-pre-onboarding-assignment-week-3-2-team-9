import { call, put, takeEvery } from 'redux-saga/effects'
import * as commentAPI from '../../api'
import {
  PUT_COMMENT_START,
  putCommentSuccess,
  putCommentError,
} from 'store/reducers/putComment/putAction'

function* putCommentSaga(action) {
  const { payload } = action
  try {
    const response = yield call(commentAPI.putComment, payload)
    yield put(putCommentSuccess(response))
  } catch (err) {
    yield put(putCommentError(err))
  }
}

export function* putSaga() {
  yield takeEvery(PUT_COMMENT_START, putCommentSaga)
}
