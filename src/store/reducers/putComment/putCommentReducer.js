import { PUT_COMMENT_START, PUT_COMMENT_SUCCESS, PUT_COMMENT_ERROR } from './putAction'

const initialState = {
  error: null,
}

export const postCommentReducuer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PUT_COMMENT_START:
      return {
        ...state,
        error: null,
      }
    case PUT_COMMENT_SUCCESS:
      return {
        ...state,
      }
    case PUT_COMMENT_ERROR:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}
