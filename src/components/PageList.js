import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { GET_CURRENT_PAGE } from 'redux/type'
function PageList({ currentPage, setCurrentPage, totalPages }) {
  const dispatch = useDispatch()
  let pages = []

  for (let p = 1; p <= totalPages; p++) {
    pages.push(p)
  }

  useEffect(() => {
    dispatch({ type: GET_CURRENT_PAGE, payload: currentPage })
  }, [currentPage])

  return (
    <Pagination>
      <PageLi className={`page-item ${currentPage === 1 && `disabled`}`}>
        <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>
          &laquo;
        </button>
      </PageLi>
      {pages.map(page => (
        <PageLi
          key={page}
          className={`page-item ${page === currentPage && `active`}`}
          onClick={() => setCurrentPage(page)}
        >
          <button className="page-link">{page}</button>
        </PageLi>
      ))}
      <PageLi className={`page-item ${currentPage === totalPages && `disabled`}`}>
        <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>
          &raquo;
        </button>
      </PageLi>
    </Pagination>
  )
}

export default PageList

const Pagination = styled.ul`
  text-align: center;
  width: 100%;
  margin: 20px 0;
`

const PageLi = styled.li`
  display: inline-block;
  text-align: right;
  margin-left: 10px;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  border: 1px solid lightgray;
  cursor: pointer;
  &.active {
    background-color: lightgray;
    cursor: revert;
    transform: revert;
  }
  &.disabled {
    background-color: lightgray;
  }
`
