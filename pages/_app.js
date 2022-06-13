import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from "next-auth/react"
import { RecoilRoot } from 'recoil'


function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>

    <ThemeProvider attribute='class'>
    <RecoilRoot>
      <Component {...pageProps} />
      </RecoilRoot>
    </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
