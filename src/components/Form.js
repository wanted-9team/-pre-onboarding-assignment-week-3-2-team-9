import React from 'react'
import styled from 'styled-components'
import { postCommentStart } from 'store/reducers/postComment/postAction'
import { getPageLimitStart } from 'store/reducers/getCommentList/getPageAction'
import { useDispatch, useSelector } from 'react-redux'
import { setFormAction, clearFormAction } from 'store/reducers/formReducer/formRedcuer'
import { putCommentStart } from 'store/reducers/putComment/putAction'
function Form() {
  const dispatch = useDispatch()
  const inputData = useSelector(state => state.formReducer)

  const handlePostData = ({ target }) => {
    const { name, value } = target
    dispatch(setFormAction({ ...inputData, [name]: value }))
  }

  const handlePostSubmit = e => {
    e.preventDefault()
    if (inputData.id) dispatch(putCommentStart(inputData))
    else dispatch(postCommentStart(inputData))

    dispatch(getPageLimitStart())
    dispatch(clearFormAction())
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
          value={inputData.profile_url}
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="작성자"
          onChange={handlePostData}
          value={inputData.author}
        />
        <br />
        <textarea
          name="content"
          placeholder="내용"
          required
          onChange={handlePostData}
          value={inputData.content}
        ></textarea>
        <br />
        <input
          type="text"
          name="createdAt"
          placeholder="2020-05-30"
          required
          onChange={handlePostData}
          value={inputData.createdAt}
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
