import { create, router as _router, defaults, rewriter } from 'json-server'

const server = create()
const router = _router('./data.json')
const middlewares = defaults({
  static: './build',
})

const port = process.env.PORT || 4000

server.use(middlewares)

server.use(
  rewriter({
    '/api/*': '/$1',
  }),
)

server.use(router)
server.listen(port, () => {
  console.log('JSON Server is running')
})
