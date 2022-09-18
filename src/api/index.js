import axios from 'axios'

const Axios = axios.create({
  baseURL: 'http://localhost:4000/comments',
})

export const getCommentList = async () => {
  const res = await Axios({
    method: 'GET',
  })
  return res.data
}

export const getPageLimit = async page => {
  const res = await Axios({
    method: 'GET',
    params: {
      _page: page,
      _limit: 4,
      _order: 'desc',
      _sort: 'id',
    },
  })
  return res.data
}

export const postComment = async data => {
  const res = await Axios({
    method: 'POST',
    data,
  })
  return res.data
}

export const putComment = async (commentID, data) => {
  const res = await Axios({
    url: `/${commentID}`,
    method: 'PUT',
    data,
  })
  return res.data
}

export const deleteComment = async commentID => {
  const res = await Axios({
    url: `/${commentID}`,
    method: 'DELETE',
  })
  return res.data
}
