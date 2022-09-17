import { POST_COMMENT_START, POST_COMMENT_SUCCESS, POST_COMMENT_ERROR } from './postAction'

const initialState = {}

export const postCommentReducuer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_COMMENT_START:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case POST_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        commentList: payload.response,
        currentPage: payload.pageNumber,
      }
    case POST_COMMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}
