import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { DELETE_COMMENT_BY_ID, GET_COMMENTS } from 'redux/type'
import { setCommentSlice } from 'redux/slice/comment'
import { pageOptions } from 'api'
import PageList from './PageList'

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

const Button = styled.div`
  text-align: right;
  margin: 10px 0;
  & > a {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`

function CommentList() {
  const comments = useSelector(state => state.comments)
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const { pageLimit } = pageOptions
  const totalPosts = comments.length
  const indexOfLastPost = currentPage * pageLimit
  const indexOfFirstPost = indexOfLastPost - pageLimit
  const filterPosts = comments.slice(indexOfFirstPost, indexOfLastPost)

  useEffect(() => {
    dispatch({ type: GET_COMMENTS })
  }, [])

  return (
    <>
      {filterPosts.map((comment, key) => (
        <Comment key={key}>
          <img src={comment.profile_url} alt="" />

          {comment.author}

          <CreatedAt>{comment.createdAt}</CreatedAt>

          <Content>{comment.content}</Content>

          <Button onClick={() => dispatch(setCommentSlice(comment))}>수정</Button>
          <Button onClick={() => dispatch({ type: DELETE_COMMENT_BY_ID, id: comment.id })}>
            삭제
          </Button>

          <hr />
        </Comment>
      ))}
      {totalPosts > pageLimit && (
        <PageList
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPosts={totalPosts}
          pageLimit={pageLimit}
        />
      )}
    </>
  )
}

export default CommentList
