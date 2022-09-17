import { combineReducers } from 'redux'
import { commentListReducer } from './getCommentList/commentListReducer'
import { formReducer } from './formReducer/formRedcuer'

const rootReducer = combineReducers({
  commentList: commentListReducer,
  formReducer,
})

export default rootReducer
