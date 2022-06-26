import Navbar from './navBar'
import FloatingButton from './floatingButton'
import Avatar from './floatingAvatar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Avatar />
      <FloatingButton />
    </>
  )
}