import { call, put, takeEvery } from 'redux-saga/effects'
import * as commentAPI from '../../api'

import {
  getCommentListSuccess,
  getCommentListError,
  GET_LIST_START,
} from 'store/reducers/getCommentList/getListAction'

import {
  getPageLimitSuccess,
  getPageLimitError,
  GET_PAGE_LIMIT_START,
} from 'store/reducers/getCommentList/getPageAction'

function* commentListSaga() {
  try {
    const response = yield call(commentAPI.getCommentList)
    yield put(getCommentListSuccess(response))
  } catch (err) {
    yield put(getCommentListError(err))
  }
}

export function* PageLimitSaga(action) {
  const { payload = 1 } = action
  try {
    const response = yield call(commentAPI.getPageLimit, payload)
    yield put(getPageLimitSuccess({ response, payload }))
  } catch (err) {
    yield put(getPageLimitError(err))
  }
}

export function* getCommentSaga() {
  yield takeEvery(GET_LIST_START, commentListSaga)
  yield takeEvery(GET_PAGE_LIMIT_START, PageLimitSaga)
}
