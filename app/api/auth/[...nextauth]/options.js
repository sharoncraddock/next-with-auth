import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email:", type: "email", placeholder: "Your Email" },
        password: { label: "Password:", type: "password", placeholder: "Your Password" }
      },
      async authorize(credentials) {
        // temp hard-coded user for local development; no DB at this point
        const user = { id: "1", name: "Jon Smith", email: "jsmith@email.com", password: "password" }

        if (credentials?.email === user.email && credentials?.password === user.password) {
          return user
        } else {
          return null
        }
      }
    })
  ],
  pages: { signIn: "/signin" }
}