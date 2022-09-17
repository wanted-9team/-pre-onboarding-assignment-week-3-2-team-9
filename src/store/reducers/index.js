import { combineReducers } from 'redux'
import { commentListReducer } from './commentList/commentListReducer'

const rootReducer = combineReducers({
  commentList: commentListReducer,
})

export default rootReducer
