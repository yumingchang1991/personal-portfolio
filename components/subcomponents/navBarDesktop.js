import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Link from 'next/link'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Tooltip from '@mui/material/Tooltip'

import SiteLogoText from './SiteLogoText'



export default function NavBarDekstop () {
  const toolBarCSS = {
    width: "100vw",
    justifyContent: 'space-between',
    padding: '1rem',
  }

  const buttonCSS = {
    marginInline: '1rem',
    color: '#e6e6e6',
    '&:hover': {
      color: '#e63333'
    }
  }

  return(
    <>
      <AppBar position='fixed'>
        <Toolbar
          sx={toolBarCSS}>
          <SiteLogoText />
          <ButtonGroup variant='string' >
            <Link href='/projects'>
              <Button sx={buttonCSS}>
                  Proejcts
              </Button>
            </Link>
            <Link href='/contact'>
              <Button sx={buttonCSS}>
                  Contact
              </Button>
            </Link>
            <Link href='https://yumingchang1991.medium.com/technical-article-structure-on-medium-954850e1ef4d' target='_blank' rel='noreferrer'>
              <Button sx={buttonCSS}>
                Medium
              </Button>
            </Link>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Toolbar />
    </>
  )
}