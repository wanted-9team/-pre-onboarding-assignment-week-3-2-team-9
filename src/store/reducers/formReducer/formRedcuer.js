export const SET_FORM = 'SET_FORM'
export const GET_FORM = 'GET_FORM'
export const CLEAR_FORM = 'CLEAR_FORM'

export const setFormAction = payload => ({ type: SET_FORM, payload })
export const clearFormAction = () => ({ type: CLEAR_FORM })

const initialState = { id: null, profile_url: '', author: '', content: '', createdAt: '' }

export const formReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FORM:
      return {
        ...state,
        id: payload.id,
        profile_url: payload.profile_url,
        author: payload.author,
        content: payload.content,
        createdAt: payload.createdAt,
      }
    case CLEAR_FORM:
      return {
        ...state,
        ...initialState,
      }
    default:
      return state
  }
}
