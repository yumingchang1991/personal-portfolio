import useMediaQuery from '@mui/material/useMediaQuery';

import NavBarDekstop from './subcomponents/navBarDesktop';
import NavBarMobile from './subcomponents/navBarMobile'

export default function NavBar() {
  const matches = useMediaQuery('(max-width: 728px)')
  return (
    <>
      { matches ? <NavBarMobile /> : <NavBarDekstop /> }
    </>
  )
}