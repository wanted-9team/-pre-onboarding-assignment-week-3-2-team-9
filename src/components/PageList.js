import React from 'react'
import styled from 'styled-components'

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

function PageList({ currentPage, setCurrentPage, totalPosts, pageLimit }) {
  const totalPages = Math.ceil(totalPosts / pageLimit)
  let pages = []

  for (let p = 1; p <= totalPages; p++) {
    pages.push(p)
  }

  return (
    <Pagination>
      <li className={`page-item ${currentPage === 1 && `disabled`}`}>
        <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>
          &laquo;
        </button>
      </li>
      {pages.map(page => (
        <li
          key={page}
          className={`page-item ${page === currentPage && `active`}`}
          onClick={() => setCurrentPage(page)}
        >
          <button className="page-link">{page}</button>
        </li>
      ))}
      <li className={`page-item ${currentPage === totalPages && `disabled`}`}>
        <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>
          &raquo;
        </button>
      </li>
    </Pagination>
  )
}

export default PageList

const Pagination = styled.ul`
  text-align: center;
  width: 100%;
  margin: 20px 0;

  & li {
    display: inline-block;
    text-align: right;
    margin-left: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }

  & li.active {
    background: lightgray;
    cursor: revert;
    transform: revert;
  }
`
