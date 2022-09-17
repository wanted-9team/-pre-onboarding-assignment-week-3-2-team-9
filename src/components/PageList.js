import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { getCommentListStart } from 'store/reducers/commentList/getListAction'
import { getCommentPageStart } from 'store/reducers/commentList/getPageAction'

function PageList() {
  const dispatch = useDispatch()
  const { totalPages, currentPage } = useSelector(state => state.commentList)

  const pageArray = []

  if (totalPages) {
    for (let i = 1; i <= totalPages; i++) {
      pageArray.push(i)
    }
  }
  useEffect(() => {
    dispatch(getCommentListStart())
  }, [dispatch])

  const handlePage = pageNumber => {
    dispatch(getCommentPageStart(pageNumber))
  }

  return (
    <PageListStyle>
      {pageArray.map(number => (
        <Page key={number} onClick={() => handlePage(number)} active={number === currentPage}>
          {number}
        </Page>
      ))}
    </PageListStyle>
  )
}

export default PageList

const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`

const Page = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  ${({ active }) =>
    active &&
    `
        background: gray;
        color: #fff;
  `}
  margin-right: 3px;
`
