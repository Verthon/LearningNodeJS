const Koa = require('koa')
const logger = require('koa-logger')
const app = new Koa()

const indexRoute = require('./routes')
const farmersRoute = require('./routes/farmers')

app.use(logger())

app.use(indexRoute.routes())
app.use(farmersRoute.routes())

app.listen(8080)
