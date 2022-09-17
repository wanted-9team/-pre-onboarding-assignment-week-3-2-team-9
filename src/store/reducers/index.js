import { combineReducers } from 'redux'
import { commentListReducer } from './getCommentList/commentListReducer'

const rootReducer = combineReducers({
  commentList: commentListReducer,
})

export default rootReducer
