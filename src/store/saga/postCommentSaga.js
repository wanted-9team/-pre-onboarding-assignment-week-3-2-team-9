import { call, put, takeEvery } from 'redux-saga/effects'
import * as commentAPI from '../../api'
import {
  POST_COMMENT_START,
  postCommentSuccess,
  postCommentError,
} from 'store/reducers/postComment/postAction'

function* postCommentSaga(action) {
  const { data } = action
  try {
    const response = yield call(commentAPI.postComment, data)
    yield put(postCommentSuccess(response))
  } catch (err) {
    yield put(postCommentError(err))
  }
}

export function* postSaga() {
  yield takeEvery(POST_COMMENT_START, postCommentSaga)
}
