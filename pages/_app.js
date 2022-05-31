import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import Layout  from './Layout'

function MyApp({ Component,
  pageProps: { session, ...pageProps }, }) {
    return (
    <SessionProvider session={session} refetchInterval={5*60}>
      <Layout>
        <Component {...pageProps} />
        </Layout>
      </SessionProvider>
      
    )
}

export default MyApp
