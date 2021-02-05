import Nav from './Nav'
import Meta from './Meta'
import Footer from './Footer'
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <main>
          {children}
      </main>
      <Footer/>
    </>
  )
}

export default Layout