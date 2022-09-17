export const POST_COMMENT_START = 'POST_COMMENT_START' // 요청 시작
export const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS'
export const POST_COMMENT_ERROR = 'POST_COMMENT_ERROR'

export const postCommentStart = data => ({
  type: POST_COMMENT_START,
  data,
})

export const postCommentSuccess = payload => ({
  type: POST_COMMENT_SUCCESS,
  payload,
})

export const postCommentError = payload => ({
  type: POST_COMMENT_ERROR,
  payload,
})
