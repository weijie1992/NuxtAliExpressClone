import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { userId, name, address, zipCode, city, country } = body

  const addAddress = await prisma.addresses.create({
    userId,
    name,
    address,
    zipCode,
    city,
    country,
  })

  return addAddress
})
