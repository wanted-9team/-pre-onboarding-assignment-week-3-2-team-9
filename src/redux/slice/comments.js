import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  comments: [],
  totalPages: null,
  errorMsg: null,
}

const comments = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getCommentsSlice: (state, { payload }) => {
      state.totalPages = Math.ceil(payload.length / 4)
    },
    getCurrentPageSlice: (state, { payload }) => {
      state.comments = payload
    },
    setErrorSlice: (state, { payload }) => {
      state.errorMsg = payload.message
    },
  },
})

export const { getCommentsSlice, getCurrentPageSlice, setErrorSlice } = comments.actions

export default comments.reducer
