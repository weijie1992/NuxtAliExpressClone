import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const { id } = event.context.params
  let items = await prisma.products.findMany({
    take: 5, //Max Rows
    where: {
      title: {
        contains: id,
        mode: 'insensitive',
      },
    },
  })
  return items
})
