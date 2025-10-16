import fastify from 'fastify'
import { db } from './database'
import { env } from './env'

const app = fastify()

app.get('/', async () => {
 const transactions = await db('transactions').where('amount', 100)
 .select('*')

  return { transactions }
})

app.listen({ port: env.PORT }).then(() => {
  console.log('Server is running on http://localhost:3333')
})
