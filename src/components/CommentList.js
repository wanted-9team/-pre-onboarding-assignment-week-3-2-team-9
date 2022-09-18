import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { DELETE_COMMENT_BY_ID, GET_COMMENTS } from 'redux/type'
import { setCommentSlice } from 'redux/slice/comment'
import PageList from './PageList'

function CommentList({ currentPage, setCurrentPage }) {
  const { comments, totalPages } = useSelector(state => state.comments)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: GET_COMMENTS })
  }, [])

  return (
    <CommentListWrapper>
      {comments.map((comment, key) => (
        <Comment key={key}>
          <img src={comment.profile_url} alt="" />
          {comment.author}
          <CreatedAt>{comment.createdAt}</CreatedAt>
          <Content>{comment.content}</Content>
          <ButtonWrapper>
            <Button onClick={() => dispatch(setCommentSlice(comment))}>수정</Button>
            <Button
              onClick={() => {
                dispatch({ type: DELETE_COMMENT_BY_ID, id: comment.id })
                setCurrentPage(1)
              }}
            >
              삭제
            </Button>
          </ButtonWrapper>
        </Comment>
      ))}

      <PageList currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
    </CommentListWrapper>
  )
}

export default CommentList

const CommentListWrapper = styled.div``

const Comment = styled.div`
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;

  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
  line-height: 30px;
  color: #777;
`

const Content = styled.div`
  margin: 10px 0;
`
const ButtonWrapper = styled.div`
  text-align: right;
`

const Button = styled.button`
  text-align: right;
  margin-left: 10px;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  border: 1px solid lightgray;
  cursor: pointer;
  & > a {
  }
`
