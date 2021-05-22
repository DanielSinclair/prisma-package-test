
import prisma from '@notnuzzel/prisma'

export const getServerSideProps = async ({ req }) => {
  const users = await prisma.user.findMany()
  const strippedUsers = users.map(({ id }) => { return { id } })
  return { props: { users: strippedUsers } }
}

function HomePage({ users }) {
  return <div>
    <span>Welcome to Next.js!</span>
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.id}</li>
      ))}
    </ul>
  </div>
}

export default HomePage