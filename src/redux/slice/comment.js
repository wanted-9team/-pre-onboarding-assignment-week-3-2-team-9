import { createSlice } from '@reduxjs/toolkit'

const comment = createSlice({
  name: 'comment',
  initialState: {
    id: 0,
    author: '',
    profile_url: '',
    content: '',
    createdAt: '',
  },
  reducers: {
    setCommentSlice: (state, action) => {
      state = action.payload
      return state
    },
  },
})

export const { setCommentSlice } = comment.actions
export default comment.reducer
