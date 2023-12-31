import './globals.css'
import { Open_Sans } from 'next/font/google'

import Provider from './components/provider'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Next-Auth Demo',
  description: 'Next.js with next-auth',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Provider>
          <main>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
