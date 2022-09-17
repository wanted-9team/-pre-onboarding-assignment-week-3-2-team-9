import { GET_LIST_START, GET_LIST_SUCCESS, GET_LIST_ERROR } from './getListAction'
import { GET_PAGE_LIMIT_START, GET_PAGE_LIMIT_SUCCESS, GET_PAGE_LIMIT_ERROR } from './getPageAction'

const INITIAL_STATE = {
  loading: false,
  error: null,
  totalPages: null,
  currentPage: 1,
  commentList: [],
}

export const commentListReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_LIST_START:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case GET_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        totalPages: Math.ceil(payload.length / 4),
      }
    case GET_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    case GET_PAGE_LIMIT_START:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case GET_PAGE_LIMIT_SUCCESS:
      return {
        ...state,
        loading: false,
        commentList: payload.response,
        currentPage: payload.payload,
      }
    case GET_PAGE_LIMIT_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}
