import {
  createCommentAPI,
  deleteCommentAPI,
  getCommentsAPI,
  getCommentsByIdAPI,
  updateCommentAPI,
} from 'api'
import { setCommentSlice } from 'redux/slice/comment'
import { put, takeEvery } from 'redux-saga/effects'
import {
  addCommentSlice,
  deleteCommentSlice,
  editCommentSlice,
  getCommentsSlice,
} from 'redux/slice/comments'
import {
  CREATE_COMMENT,
  DELETE_COMMENT_BY_ID,
  GET_COMMENTS,
  GET_COMMENT_BY_ID,
  UPDATE_COMMENT_BY_ID,
} from 'redux/type'

export function* getCommentsSaga() {
  const comments = yield getCommentsAPI()
  yield put(getCommentsSlice(comments.data))
}

export function* getCommentByIdSaga(action) {
  yield getCommentsByIdAPI(action.id)
  yield put(setCommentSlice(action.id))
}

export function* createCommentSaga(action) {
  yield createCommentAPI(action.comment)
  yield put(addCommentSlice(action.comment))
}

export function* updateCommentSaga(action) {
  yield updateCommentAPI(action.comment)
  yield put(editCommentSlice(action.comment))
}

export function* deleteCommentByIdSaga(action) {
  yield deleteCommentAPI(action.id)
  yield put(deleteCommentSlice(action.id))
}

export function* watchCommentsAsync() {
  yield takeEvery(GET_COMMENTS, getCommentsSaga)
  yield takeEvery(GET_COMMENT_BY_ID, getCommentByIdSaga)
  yield takeEvery(CREATE_COMMENT, createCommentSaga)
  yield takeEvery(UPDATE_COMMENT_BY_ID, updateCommentSaga)
  yield takeEvery(DELETE_COMMENT_BY_ID, deleteCommentByIdSaga)
}
