import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  comments: [],
  totalPages: null,
}

const comments = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getCommentsSlice: (state, action) => {
      const { payload } = action
      state.totalPages = Math.ceil(payload.length / 4)
    },
    getCurrentPageSlice: (state, action) => {
      const { payload } = action
      state.comments = payload
    },
  },
})

export const { getCommentsSlice, getCurrentPageSlice } = comments.actions
export default comments.reducer
