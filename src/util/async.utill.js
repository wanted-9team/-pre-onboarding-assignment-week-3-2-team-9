export const reducerUtils = {
  initial: (data = null) => ({
    loading: false,
    data,
    error: null,
  }),
  loading: (preveState = null) => ({
    data: preveState,
    loading: true,
    error: null,
  }),
  success: data => ({
    data,
    loading: false,
    error: null,
  }),
  error: error => ({
    data: null,
    loading: false,
    error,
  }),
}

export const handleAsyncActions = (type, key, keepData = false) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`]
  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading(keepData ? state[key].data : null),
        }
      case SUCCESS:
        return {
          ...state,
          [key]: {
            ...reducerUtils.success(action.payload),
            totalPages: Math.ceil(reducerUtils.success(action.payload).data?.length / 4),
          },
        }
      case ERROR:
        return {
          ...state,
          [key]: reducerUtils.error(action.payload),
        }
      default:
        return state
    }
  }
}

export const handleAsyncActionsID = (type, key, keepData = false) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`]
  return (state, action) => {
    console.log(action.payload, 'saga')
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading(keepData ? state[key].data : null),
        }
      case SUCCESS:
        return {
          ...state,
          [key]: reducerUtils.success(action.payload),
        }
      case ERROR:
        return {
          ...state,
          [key]: reducerUtils.error(action.payload),
        }
      default:
        return state
    }
  }
}
