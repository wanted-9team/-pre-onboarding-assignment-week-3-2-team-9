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

  const slicePage = () => {
    if (totalPages < 5) {
      const slicePages = pages
      return slicePages
    } else if (totalPages >= 5 && currentPage === 1) {
      const slicePages = pages.slice(currentPage - 1, 5)
      return slicePages
    } else if (totalPages >= 5 && currentPage < 3) {
      const slicePages = pages.slice(currentPage - 2, 5)
      return slicePages
    } else if (totalPages >= 5 && currentPage + 2 >= totalPages) {
      const slicePages = pages.slice(totalPages - 5, totalPages)
      return slicePages
    } else {
      const slicePages = pages.slice(currentPage - 3, currentPage + 2)
      return slicePages
    }
  }
  console.log(slicePage())

  useEffect(() => {
    dispatch({ type: GET_CURRENT_PAGE, currentPage })
  }, [currentPage, dispatch])

  const handlePrevPage = () => {
    if (currentPage === 1) return
    setCurrentPage(currentPage - 1)
  }

  const handleNextPage = () => {
    if (currentPage === totalPages) return
    setCurrentPage(currentPage + 1)
  }

  return (
    <Pagination>
      <PageLi className={currentPage === 1 && `disabled`} onClick={handlePrevPage}>
        <PaginationBtn disabled={currentPage === 1}>&laquo;</PaginationBtn>
      </PageLi>
      {slicePage().map(page => (
        <PageLi
          key={page}
          className={page === currentPage && `active`}
          onClick={() => setCurrentPage(page)}
        >
          <PaginationBtn>{page}</PaginationBtn>
        </PageLi>
      ))}
      <PageLi className={currentPage === totalPages && `disabled`} onClick={handleNextPage}>
        <PaginationBtn disabled={currentPage === totalPages}>&raquo;</PaginationBtn>
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
    color: #ddd;
  }
`

const PaginationBtn = styled.button``
