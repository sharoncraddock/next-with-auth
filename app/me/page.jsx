'use client'

import { useSession } from 'next-auth/react'

const Me = () => {
  const { data: session } = useSession({
    required: true
  })

  return (
    <section>
      <h1>An authenticated page</h1>
      <h2 >You are logged in as:</h2>
      <p>{session?.user?.name}</p>
      <p>{JSON.stringify(session)}</p>
    </section>
  )
}

export default Me