import { DELETE_COMMENT_START, DELETE_COMMENT_SUCCESS, DELETE_COMMENT_ERROR } from './deleteAction'

const initialState = {
  error: null,
}

export const deleteCommentReducuer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_COMMENT_START:
    case DELETE_COMMENT_SUCCESS:
    case DELETE_COMMENT_ERROR:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}
