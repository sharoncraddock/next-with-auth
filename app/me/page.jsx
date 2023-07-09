import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import Link from "next/link"

async function Me() {

  const session = await getServerSession(options)

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/')
  }

  return (
    <section>
      <h1>An authenticated page</h1>
      <h2 >You are logged in as:</h2>
      <p>{session?.user?.name}</p>
      <p>{JSON.stringify(session)}</p>

      <Link href="/api/auth/signout">Sign Out</Link>
    </section>
  )
}

export default Me