import { GET_LIST_START, GET_LIST_SUCCESS, GET_LIST_ERROR } from './getListAction'
import {
  GET_COMMENT_PAGE_START,
  GET_COMMENT_PAGE_SUCCESS,
  GET_COMMENT_PAGE_ERROR,
} from './getPageAction'

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
