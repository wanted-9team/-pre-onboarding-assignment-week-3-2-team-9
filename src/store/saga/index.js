import { all } from 'redux-saga/effects'
import { getCommentSaga } from './getCommentSaga'
import { postSaga } from './postCommentSaga'
import { deleteSaga } from './deleteCommentSaga'
import { putSaga } from './putCommentSaga'

export function* rootSaga() {
  yield all([putSaga(), deleteSaga(), postSaga(), getCommentSaga()])
}
