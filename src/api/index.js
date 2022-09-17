import axios from 'axios'

const Axios = axios.create({
  baseURL: 'http://localhost:4000',
})

export const reqeusetCommentList = async () => {
  const res = await Axios({
    url: '/comments',
    method: 'get',
  })
  return res.data
}

export const requestCommentsPageLimit = async page => {
  const res = await Axios({
    url: '/comments',
    method: 'get',
    params: {
      _page: page,
      _limit: 4,
      _order: 'desc',
      _sort: 'id',
    },
  })
  return res.data
}
