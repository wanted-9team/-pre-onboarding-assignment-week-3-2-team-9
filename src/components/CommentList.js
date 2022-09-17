import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { getCommentPageStart } from 'store/reducers/getCommentList/getPageAction'

function CommentList() {
  const dispatch = useDispatch()
  const { commentList, loading } = useSelector(state => state.commentList)

  useEffect(() => {
    dispatch(getCommentPageStart())
  }, [dispatch])

  const handleRewrite = commentID => {
    console.log(commentID)
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
          <button onClick={() => handleRewrite(comment.id)}>수정</button>
          <button>삭제</button>
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
