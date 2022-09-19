import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setCommentSlice } from 'redux/slice/comment'
import { UPDATE_COMMENT_BY_ID, CREATE_COMMENT, GET_COMMENTS } from 'redux/type'

function Form({ setCurrentPage, currentPage }) {
  const comment = useSelector(state => state.comment)
  const dispatch = useDispatch()

  const handleChange = e => {
    const { value, name } = e.target
    dispatch(setCommentSlice({ ...comment, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const profileURL = `${comment.profile_url}`
    comment.id === 0
      ? dispatch({
          type: CREATE_COMMENT,
          comment: { ...comment, profile_url: profileURL },
        })
      : dispatch({
          type: UPDATE_COMMENT_BY_ID,
          comment: { ...comment, profile_url: profileURL },
          currentPage,
        })
    const newPage = comment.id === 0 ? 1 : currentPage
    setCurrentPage(newPage)
    dispatch(setCommentSlice({ id: 0, author: '', profile_url: '', content: '', createdAt: '' }))
  }
  return (
    <FormStyle>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          onChange={handleChange}
          value={comment?.profile_url}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="작성자"
          onChange={handleChange}
          value={comment?.author}
          required
        />
        <textarea
          name="content"
          placeholder="내용"
          onChange={handleChange}
          value={comment?.content}
          required
        ></textarea>
        <input
          type="text"
          name="createdAt"
          placeholder="등록일"
          onChange={handleChange}
          value={comment?.createdAt}
          required
        />
        <button type="submit">등록</button>
      </form>
    </FormStyle>
  )
}

export default Form

const FormStyle = styled.div`
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
  }
  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 70px;
    margin-bottom: 5px;
    border: 1px solid #aaa;
    border-radius: 5px;
  }
  & > form > input[type='text'] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 5px;
    height: 35px;
    border: 1px solid #aaa;
    border-radius: 5px;
  }
  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    cursor: pointer;
    display: block;
    margin: 0 auto;
    background-color: #333;
    color: white;
  }
`
