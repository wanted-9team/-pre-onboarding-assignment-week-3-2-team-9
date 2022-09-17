import { combineReducers } from 'redux'
import { commentReducer } from './commentReducer'
const rootReducer = combineReducers({ commentList: commentReducer })

export default rootReducer
