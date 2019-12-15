module.exports = {
  client: 'pg',
  connection: {
    host: 'localhost',
    database: 'eventooo_dev' || process.env.DATABASE,
    user: 'postgres' || process.env.USER,
    password: 'postgres' || process.env.PASSWORD
  } 
}