import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Typography } from '@mui/material'
import styles from '../styles/MouseScrollDown.module.css'


export default function MouseScrollDown() {
  const textStyle = {
    fontFamily: 'Roboto'
  }
  
  return (
    <>
      <div className={styles['scroll-down']} onClick={scrolldownOnClicked}>
        <a>
          <KeyboardArrowDownIcon />
          <Typography sx={ textStyle }>scroll</Typography>
        </a>
      </div>
    </>
  )
}

function scrolldownOnClicked(e) {
  const homeMain = document.querySelector('#home-container')
  window.scrollTo({
    top: homeMain.clientHeight,
    behavior: 'smooth'
  })
}