import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import createSagaMiddleware from '@redux-saga/core'
import logger from 'redux-logger'
import rootReducer from './reducers'
import { rootSaga } from './saga'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware)),
)

sagaMiddleware.run(rootSaga)
