import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { id } = event.context.params
  const { name, address, zipCode, city, country } = body

  const res = await prisma.addresses.update({
    where: { id: Number(id) },
    data: {
      name,
      address,
      zipCode,
      city,
      country,
    },
  })

  return res
})
