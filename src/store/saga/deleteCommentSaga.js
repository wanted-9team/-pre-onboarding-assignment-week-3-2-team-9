import { call, put, takeEvery } from 'redux-saga/effects'
import * as commentAPI from '../../api'
import {
  DELETE_COMMENT_START,
  deleteCommentSuccess,
  deleteCommentError,
} from 'store/reducers/deleteComment/deleteAction'

function* deleteCommentSaga(action) {
  const { payload } = action
  try {
    const response = yield call(commentAPI.deleteComment, payload)
    yield put(deleteCommentSuccess(response))
  } catch (err) {
    yield put(deleteCommentError(err))
  }
}

export function* deleteSaga() {
  yield takeEvery(DELETE_COMMENT_START, deleteCommentSaga)
}
