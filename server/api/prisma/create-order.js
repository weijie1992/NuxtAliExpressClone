import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { userId, stripeId, name, address, zipCode, city, country, products } = body
  const order = await prisma.orders.create({
    data: {
      userId,
      stripeId,
      name,
      address,
      zipCode,
      city,
      country,
    },
  })

  products.forEach(async (prod) => {
    await prisma.orderItem.create({
      data: {
        orderId: order.id,
        productId: Number(prod.id),
      },
    })
  })

  return order
})
