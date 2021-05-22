
const prisma = require('@notnuzzel/prisma').default

module.exports = async (req, res) => {
  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
  res.end('success')
}