export const GET_COMMENT_START = 'GET_COMMENT_START' // 요청 시작
export const GET_COMMENT_SUCCESS = 'GET_COMMENT_SUCCESS'
export const GET_COMMENT_ERROR = 'GET_COMMENT_ERROR'

export const GET_COMMENT_PAGE_START = 'GET_COMMENT_PAGE_START'
export const GET_COMMENT_PAGE_SUCCESS = 'GET_COMMENT_PAGE_SUCCESS'
export const GET_COMMENT_PAGE_ERROR = 'GET_COMMENT_PAGE_ERROR'

export const getCommentListStart = () => ({
  type: GET_COMMENT_START,
})

export const getCommentListSuccess = payload => ({
  type: GET_COMMENT_SUCCESS,
  payload,
})

export const getCommentListError = payload => ({
  type: GET_COMMENT_ERROR,
  payload,
})

export const getCommentPageStart = pageNumber => ({
  type: GET_COMMENT_PAGE_START,
  pageNumber,
})

export const getCommentPageSuccess = payload => ({
  type: GET_COMMENT_PAGE_SUCCESS,
  payload,
})

export const getCommentPageError = payload => ({
  type: GET_COMMENT_PAGE_ERROR,
  payload,
})

const INITIAL_STATE = {
  loading: false,
  error: null,
  totalPages: null,
  currentPage: 1,
  commentList: [],
}

export const commentReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_COMMENT_START:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case GET_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        totalPages: Math.ceil(payload.length / 4),
      }
    case GET_COMMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    case GET_COMMENT_PAGE_START:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case GET_COMMENT_PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        commentList: payload.response,
        currentPage: payload.pageNumber,
      }
    case GET_COMMENT_PAGE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}
