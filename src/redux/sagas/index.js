import { all } from 'redux-saga/effects'
import { watchCommentsAsync } from './comment'

export function* rootSaga() {
  yield all([watchCommentsAsync()])
}
