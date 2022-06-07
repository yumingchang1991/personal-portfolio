import Navbar from './navbar'
// import Footer from './footer'
import FloatingButton from './floatingButton'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <FloatingButton />
    </>
  )
}