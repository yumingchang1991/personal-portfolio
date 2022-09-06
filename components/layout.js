import NavBar from './navbar'
import FloatingButton from './floatingButton'

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <FloatingButton />
    </>
  )
}
