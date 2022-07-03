import NavBar from './navbar'
import FloatingButton from './floatingButton'
import Avatar from './floatingAvatar'

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Avatar />
      <FloatingButton />
    </>
  )
}
