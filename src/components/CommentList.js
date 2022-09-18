import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { getPageLimitStart } from 'store/reducers/getCommentList/getPageAction'
import { deleteCommentStart } from 'store/reducers/deleteComment/deleteAction'
import { setFormAction } from 'store/reducers/formReducer/formRedcuer'
function CommentList() {
  const dispatch = useDispatch()
  const { commentList, loading } = useSelector(state => state.commentList)

  useEffect(() => {
    dispatch(getPageLimitStart())
  }, [dispatch])

  const handleDeleteComment = commentID => {
    dispatch(deleteCommentStart(commentID))
    dispatch(getPageLimitStart())
  }
  if (loading) return <div>로딩중...</div>

  return (
    commentList &&
    commentList.map((comment, key) => (
      <Comment key={key}>
        <img src={comment.profile_url} alt={comment.author} />
        {comment.author}
        <CreatedAt>{comment.createdAt}</CreatedAt>
        <Content>{comment.content}</Content>
        <ButtonWrap>
          <button onClick={() => dispatch(setFormAction(comment))}>수정</button>
          <button onClick={() => handleDeleteComment(comment.id)}>삭제</button>
        </ButtonWrap>

        <hr />
      </Comment>
    ))
  )
}

export default CommentList

const Comment = styled.div`
  padding: 7px 10px;
  text-align: left;

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
`

const Content = styled.div`
  margin: 10px 0;
`

const ButtonWrap = styled.div`
  text-align: right;
  margin: 10px 0;
  & > button {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`
