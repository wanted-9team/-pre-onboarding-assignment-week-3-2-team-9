import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { postCommentStart } from 'store/reducers/postComment/postAction'
import { useDispatch } from 'react-redux'
const initialPostData = {
  profile_url: '',
  author: '',
  content: '',
  createdAt: '',
}

function Form() {
  const [postData, setPostData] = useState(initialPostData)
  const dispatch = useDispatch()
  const handlePostData = ({ target }) => {
    const { name, value } = target
    setPostData(prev => ({ ...prev, [name]: value }))
  }

  const handlePostSubmit = e => {
    e.preventDefault()
    dispatch(postCommentStart(postData))
  }

  return (
    <FormStyle>
      <form onSubmit={handlePostSubmit}>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          required
          onChange={handlePostData}
        />
        <br />
        <input type="text" name="author" placeholder="작성자" onChange={handlePostData} />
        <br />
        <textarea name="content" placeholder="내용" required onChange={handlePostData}></textarea>
        <br />
        <input
          type="text"
          name="createdAt"
          placeholder="2020-05-30"
          required
          onChange={handlePostData}
        />
        <br />
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
