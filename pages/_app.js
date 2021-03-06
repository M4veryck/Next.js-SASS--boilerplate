import '../styles/globals.scss'
import Layout from '../components/layout/layout'
import { NavBarContextProvider } from '../components/navBarContext'

function MyApp({ Component, pageProps }) {
    return (
        <NavBarContextProvider>
            {/* <Layout> */}
            <Component {...pageProps} />
            {/* </Layout> */}
        </NavBarContextProvider>
    )
}

export default MyApp
