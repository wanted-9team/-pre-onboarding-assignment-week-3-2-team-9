import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import rootReducer from 'reducer'

const logger = createLogger()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

export default store
