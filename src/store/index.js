import { configureStore } from '@reduxjs/toolkit'
import comment from 'redux/slice/comment'
import comments from 'redux/slice/comments'
import createSagaMiddleware from '@redux-saga/core'
import { rootSaga } from 'redux/sagas'
import logger from 'redux-logger'

const sagaMiddleware = createSagaMiddleware()

const Store = configureStore({
  reducer: { comment, comments },
  middleware: [sagaMiddleware, logger],
  devTools: process.env.NODE_ENV !== 'production',
})

sagaMiddleware.run(rootSaga)

export default Store
