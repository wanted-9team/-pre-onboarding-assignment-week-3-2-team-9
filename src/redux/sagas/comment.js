import {
  createCommentAPI,
  deleteCommentAPI,
  getCommentsAPI,
  getCommentsByIdAPI,
  updateCommentAPI,
  getCommentsByCurrentPageAPI,
} from 'api'
import { setCommentSlice } from 'redux/slice/comment'
import { put, takeEvery, call, delay } from 'redux-saga/effects'

import { getCommentsSlice, getCurrentPageSlice, setErrorSlice } from 'redux/slice/comments'
import {
  CREATE_COMMENT,
  DELETE_COMMENT_BY_ID,
  GET_COMMENTS,
  GET_COMMENT_BY_ID,
  UPDATE_COMMENT_BY_ID,
  GET_CURRENT_PAGE,
} from 'redux/type'

export function* getCommentsSaga() {
  yield delay(200)
  try {
    const comments = yield call(getCommentsAPI)
    yield put(getCommentsSlice(comments.data))
  } catch (err) {
    yield put(setErrorSlice(err))
  }
}

export function* getCurrentPageSaga(action) {
  try {
    const currentPage = yield call(getCommentsByCurrentPageAPI, action.currentPage)
    yield put(getCurrentPageSlice(currentPage.data))
  } catch (err) {
    yield put(setErrorSlice(err))
  }
}

export function* getCommentByIdSaga(action) {
  try {
    yield call(getCommentsByIdAPI, action.id)
    yield put(setCommentSlice(action.id))
  } catch (err) {
    yield put(setErrorSlice(err))
  }
}

export function* createCommentSaga(action) {
  try {
    yield call(createCommentAPI, action.comment)
    const currentPage = yield call(getCommentsByCurrentPageAPI, action.currentPage)
    yield put(getCurrentPageSlice(currentPage.data))
  } catch (err) {
    yield put(setErrorSlice(err))
  }
}

export function* updateCommentSaga(action) {
  try {
    yield call(updateCommentAPI, action.comment)
    const currentPage = yield call(getCommentsByCurrentPageAPI, action.currentPage)
    yield put(getCurrentPageSlice(currentPage.data))
  } catch (err) {
    yield put(setErrorSlice(err))
  }
}

export function* deleteCommentByIdSaga(action) {
  try {
    yield call(deleteCommentAPI, action.id)
    const currentPage = yield call(getCommentsByCurrentPageAPI, action.currentPage)
    yield put(getCurrentPageSlice(currentPage.data))
  } catch (err) {
    yield put(setErrorSlice(err))
  }
}

export function* watchCommentsAsync() {
  yield takeEvery(GET_COMMENTS, getCommentsSaga)
  yield takeEvery(GET_CURRENT_PAGE, getCurrentPageSaga)
  yield takeEvery(GET_COMMENT_BY_ID, getCommentByIdSaga)
  yield takeEvery(CREATE_COMMENT, createCommentSaga)
  yield takeEvery(CREATE_COMMENT, getCommentsSaga)
  yield takeEvery(UPDATE_COMMENT_BY_ID, updateCommentSaga)
  yield takeEvery(UPDATE_COMMENT_BY_ID, getCommentsSaga)
  yield takeEvery(DELETE_COMMENT_BY_ID, deleteCommentByIdSaga)
  yield takeEvery(DELETE_COMMENT_BY_ID, getCommentsSaga)
}
