import { FastifyInstance } from 'fastify'
import { db } from '../database'

export async function transactionsRoutes(app: FastifyInstance) {
  app.post('/', async () => {
    const transactions = await db('transactions')
      .where('amount', 100)
      .select('*')

    return { transactions }
  })
}
