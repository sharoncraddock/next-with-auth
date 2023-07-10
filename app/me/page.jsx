import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import SignOutButton from '../components/sign-out-button'

async function Me() {

  const session = await getServerSession(options)

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/')
  }

  return (
    <section className="flex justify-center md:items-center h-screen bg-white md:bg-custom-gray">
      <div className="text-gray-700 md:w-3/5 max-w-xl bg-white rounded p-12">
        <h1 className="text-xl font-bold mb-6">This is an authenticated page</h1>
        <hr />
        <h2 className="mt-6">You are logged in as:{' '} 
          <span className="font-bold">{session?.user?.name}</span>
        </h2>
        <p className="mt-4">User account details:</p>
        <p className="mb-10 font-bold">{JSON.stringify(session)}</p>
        <div className="text-center">
          <SignOutButton />
        </div>
      </div>
    </section>
  )
}

export default Me