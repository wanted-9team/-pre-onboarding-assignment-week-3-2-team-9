export const GET_COMMENT_PAGE_START = 'GET_COMMENT_PAGE_START'
export const GET_COMMENT_PAGE_SUCCESS = 'GET_COMMENT_PAGE_SUCCESS'
export const GET_COMMENT_PAGE_ERROR = 'GET_COMMENT_PAGE_ERROR'

export const getCommentPageStart = payload => ({
  type: GET_COMMENT_PAGE_START,
  payload,
})

export const getCommentPageSuccess = payload => ({
  type: GET_COMMENT_PAGE_SUCCESS,
  payload,
})

export const getCommentPageError = payload => ({
  type: GET_COMMENT_PAGE_ERROR,
  payload,
})
