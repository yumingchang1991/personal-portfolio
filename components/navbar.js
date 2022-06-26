import useMediaQuery from '@mui/material/useMediaQuery';

import NavBarDekstop from './navBarDesktop';
import NavBarMobile from './navBarMobile'

export default function NavBar() {
  const matches = useMediaQuery('(max-width: 640px)')
  return (
    <>
      { matches ? <NavBarMobile /> : <NavBarDekstop /> }
    </>
  )
}