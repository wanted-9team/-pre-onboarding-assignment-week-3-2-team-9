import { all } from 'redux-saga/effects'
import { commentSaga } from './commentSaga'

export function* rootSaga() {
  yield all([commentSaga()])
}
