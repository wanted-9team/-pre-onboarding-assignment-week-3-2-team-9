import React, { useState } from 'react'
import styled from 'styled-components'
import CommentList from 'components/CommentList'
import Form from 'components/Form'

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <CommentPageWrapper>
      <CommentList currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Form setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </CommentPageWrapper>
  )
}

export default App

const CommentPageWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`
