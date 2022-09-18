import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000'

const pageOptions = {
  pageLimit: 5,
  order: 'desc',
  sort: 'id',
}

export const createCommentAPI = async comment => await axios.post(`/comments`, comment)

export const deleteCommentAPI = async id => await axios.delete(`/comments/${id}`)

export const updateCommentAPI = async comment => await axios.put(`/comments/${comment.id}`, comment)

export const getCommentsAPI = async () => await axios.get(`/comments`)

export const getCommentsByIdAPI = async id => await axios.get(`/comments/${id}`)

export const getCommentsByCurrentPageAPI = async currentPage =>
  await axios.get(
    `/comments?_page=${currentPage}&_limit=${pageOptions.pageLimit}&_order=${pageOptions.order}&_sort=${pageOptions.sort}`,
  )
