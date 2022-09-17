import { all } from 'redux-saga/effects'
import { getCommentSaga } from './getCommentSaga'
import { postSaga } from './postCommentSaga'

export function* rootSaga() {
  yield all([getCommentSaga(), postSaga()])
}
