import useMediaQuery from '@mui/material/useMediaQuery';

import NavBarDekstop from './navBarDesktop';
import NavBarMobile from './navBarMobile'

export default function NavBar() {
  const matches = useMediaQuery('(max-width: 728px)')
  return (
    <>
      { matches ? <NavBarMobile /> : <NavBarDekstop /> }
    </>
  )
}