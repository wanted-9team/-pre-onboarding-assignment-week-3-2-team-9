import { call, put, takeEvery } from 'redux-saga/effects'
import * as commentAPI from '../../api'

import {
  getCommentListSuccess,
  getCommentListError,
  GET_LIST_START,
} from 'store/reducers/getCommentList/getListAction'

import {
  getCommentPageSuccess,
  getCommentPageError,
  GET_COMMENT_PAGE_START,
} from 'store/reducers/getCommentList/getPageAction'

function* commentListSaga() {
  try {
    const response = yield call(commentAPI.getCommentList)
    yield put(getCommentListSuccess(response))
  } catch (err) {
    yield put(getCommentListError(err))
  }
}

function* commentPageSaga(action) {
  const { pageNumber = 1 } = action
  try {
    const response = yield call(commentAPI.getPageLimit, pageNumber)
    yield put(getCommentPageSuccess({ response, pageNumber }))
  } catch (err) {
    yield put(getCommentPageError(err))
  }
}

export function* getCommentSaga() {
  yield takeEvery(GET_LIST_START, commentListSaga)
  yield takeEvery(GET_COMMENT_PAGE_START, commentPageSaga)
}
