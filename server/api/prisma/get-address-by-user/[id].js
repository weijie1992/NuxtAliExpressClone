import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const { userId } = event.context.params
  let res = await prisma.addresses.findFirst({
    where: {
      userId,
    },
  })

  return res
})
