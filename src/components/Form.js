import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setCommentSlice } from 'redux/slice/comment'
import { UPDATE_COMMENT_BY_ID, CREATE_COMMENT } from 'redux/type'

const FormStyle = styled.div`
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
  }
  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
  }
  & > form > input[type='text'] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }
  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`

function Form() {
  const comment = useSelector(state => state.comment)
  const dispatch = useDispatch()

  const handleChange = e => {
    const { value, name } = e.target
    dispatch(setCommentSlice({ ...comment, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const profileURL = `https://picsum.photos/id/${comment.profile_url}/50/50`
    comment.id === 0
      ? dispatch({ type: CREATE_COMMENT, comment: { ...comment, profile_url: profileURL } })
      : dispatch({ type: UPDATE_COMMENT_BY_ID, comment: { ...comment, profile_url: profileURL } })

    dispatch(setCommentSlice({ id: 0, author: '', profile_url: '', content: '', createdAt: '' }))
  }
  return (
    <FormStyle>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="profile_url"
          placeholder="사진 id"
          onChange={handleChange}
          value={comment?.profile_url}
          required
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="작성자"
          onChange={handleChange}
          value={comment?.author}
          required
        />
        <br />
        <textarea
          name="content"
          placeholder="내용"
          onChange={handleChange}
          value={comment?.content}
          required
        ></textarea>
        <br />
        <input
          type="text"
          name="createdAt"
          placeholder="등록일"
          onChange={handleChange}
          value={comment?.createdAt}
          required
        />
        <br />
        <button type="submit">등록</button>
      </form>
    </FormStyle>
  )
}

export default Form
