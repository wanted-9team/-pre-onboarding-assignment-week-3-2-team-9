import React from 'react'
import styled from 'styled-components'
import CommentList from 'components/CommentList'
import Form from 'components/Form'
import PageList from 'components/PageList'

function App() {
  return (
    <CommentPageWrapper>
      <CommentList />
      <Form />
    </CommentPageWrapper>
  )
}

export default App

const CommentPageWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`
