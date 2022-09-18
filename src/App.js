import React, { useState } from 'react'

import CommentList from 'components/CommentList'
import Form from 'components/Form'

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <div>
      <CommentList currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Form setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </div>
  )
}

export default App
