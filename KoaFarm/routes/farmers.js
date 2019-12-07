const Router = require('koa-router')
const router = new Router()
const db = require('../knexfile.js')

router.get('/api/v1/farmers', async ctx => {
  console.log('DB object: ', db)
  return db
    .select()
    .from('farmers')
    .then(data => {
      ctx.body = {
        status: '200 success',
        data: data
      }
    })
})

module.exports = router
