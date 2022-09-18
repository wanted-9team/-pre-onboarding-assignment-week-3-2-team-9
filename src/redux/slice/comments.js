import { createSlice } from '@reduxjs/toolkit'

const comments = createSlice({
  name: 'comments',
  initialState: [
    {
      id: 0,
      author: '',
      profile_url: '',
      content: '',
      createdAt: '',
    },
  ],
  reducers: {
    getCommentsSlice: (state, action) => {
      state = action.payload
      return state
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

export const { getCommentsSlice, addCommentSlice, editCommentSlice, deleteCommentSlice } =
  comments.actions
export default comments.reducer
