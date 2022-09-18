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
    addCommentSlice: (state, action) => {
      return [...state, action.payload]
    },
    editCommentSlice: (state, action) => {
      state = state.map(comment =>
        Number(comment.id) === Number(action.payload.id) ? action.payload : comment,
      )
      return state
    },
    deleteCommentSlice: (state, action) => {
      state = state.filter(comment => comment.id !== action.payload)
      return state
    },
  },
})

export const {
  getCommentsSlice,
  addCommentSlice,
  editCommentSlice,
  deleteCommentSlice,
  getCurrentPageSlice,
} = comments.actions
export default comments.reducer
