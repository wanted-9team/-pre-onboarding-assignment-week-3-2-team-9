export const PUT_COMMENT_START = 'PUT_COMMENT_START'
export const PUT_COMMENT_SUCCESS = 'PUT_COMMENT_SUCCESS'
export const PUT_COMMENT_ERROR = 'PUT_COMMENT_ERROR'

export const putCommentStart = payload => ({
  type: PUT_COMMENT_START,
  payload,
})

export const putCommentSuccess = payload => ({
  type: PUT_COMMENT_SUCCESS,
  payload,
})

export const putCommentError = payload => ({
  type: PUT_COMMENT_ERROR,
  payload,
})
