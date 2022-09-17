export const GET_PAGE_LIMIT_START = 'GET_PAGE_LIMIT_START'
export const GET_PAGE_LIMIT_SUCCESS = 'GET_PAGE_LIMIT_SUCCESS'
export const GET_PAGE_LIMIT_ERROR = 'GET_PAGE_LIMIT_ERROR'

export const getPageLimitStart = payload => ({
  type: GET_PAGE_LIMIT_START,
  payload,
})

export const getPageLimitSuccess = payload => ({
  type: GET_PAGE_LIMIT_SUCCESS,
  payload,
})

export const getPageLimitError = payload => ({
  type: GET_PAGE_LIMIT_ERROR,
  payload,
})
