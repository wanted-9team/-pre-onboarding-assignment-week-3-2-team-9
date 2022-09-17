import { combineReducers } from 'redux'
import { commentReducer } from './commentReducer'
const rootReducer = combineReducers({ pages: commentReducer })

export default rootReducer
