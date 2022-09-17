export const GET_LIST_START = 'GET_LIST_START' // 요청 시작
export const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS'
export const GET_LIST_ERROR = 'GET_LIST_ERROR'

export const getCommentListStart = () => ({
  type: GET_LIST_START,
})

export const getCommentListSuccess = payload => ({
  type: GET_LIST_SUCCESS,
  payload,
})

export const getCommentListError = payload => ({
  type: GET_LIST_ERROR,
  payload,
})
