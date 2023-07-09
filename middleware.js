// TODO: supposed to place entire app behind next-auth, but not working
export { default } from "next-auth/middleware"

// workaround
export const config = { matcher: ["/me"] }
