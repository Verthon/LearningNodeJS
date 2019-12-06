const Router = require('koa-router')
const router = new Router()

router.get('/api/v1/farmers', async ctx => {
  ctx.body = {
    status: '200 success',
    message: 'farmers route'
  }
})

module.exports = router
