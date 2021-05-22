
import prisma from '@notnuzzel/prisma'

export default async (req, res) => {
  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
  res.end('success')
}