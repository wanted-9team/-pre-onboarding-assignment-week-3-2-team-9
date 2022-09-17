import { call, put, takeEvery } from 'redux-saga/effects'
import * as commentAPI from '../../api'
import {
  getCommentListSuccess,
  getCommentListError,
  getCommentPageSuccess,
  getCommentPageError,
  GET_COMMENT_START,
  GET_COMMENT_PAGE_START,
} from 'store/reducers/commentReducer'

export function* commentListSaga() {
  try {
    const response = yield call(commentAPI.reqeusetCommentList)
    yield put(getCommentListSuccess(response))
  } catch (err) {
    yield put(getCommentListError(err))
  }
}

export function* commentPageSaga(action) {
  const { pageNumber = 1 } = action
  try {
    const response = yield call(commentAPI.requestCommentsPageLimit, pageNumber)
    yield put(getCommentPageSuccess({ response, pageNumber }))
  } catch (err) {
    yield put(getCommentPageError(err))
  }
}

export function* commentSaga() {
  yield takeEvery(GET_COMMENT_START, commentListSaga)
  yield takeEvery(GET_COMMENT_PAGE_START, commentPageSaga)
}
