import { POST_COMMENT_START, POST_COMMENT_SUCCESS, POST_COMMENT_ERROR } from './postAction'

const initialState = {
  error: null,
}

export const postCommentReducuer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_COMMENT_START:
    case POST_COMMENT_SUCCESS:
    case POST_COMMENT_ERROR:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}
