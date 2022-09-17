export const DELETE_COMMENT_START = 'DELETE_COMMENT_START' // 요청 시작
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS'
export const DELETE_COMMENT_ERROR = 'DELETE_COMMENT_ERROR'

export const deleteCommentStart = payload => ({
  type: DELETE_COMMENT_START,
  payload,
})

export const deleteCommentSuccess = payload => ({
  type: DELETE_COMMENT_SUCCESS,
  payload,
})

export const deleteCommentError = payload => ({
  type: DELETE_COMMENT_ERROR,
  payload,
})
