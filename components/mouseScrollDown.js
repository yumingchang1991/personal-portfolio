import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Typography } from '@mui/material'
import styles from '../styles/MouseScrollDown.module.css'

export default function MouseScrollDown() {
  const textStyle = {
    fontFamily: 'Roboto'
  }
  
  return (
    <>
      <div className={styles['call-to-actions']}>
        <div className={styles['action-to-profile']} onClick={scrollToProfile}>
          <div className={styles['arrow-down']}>
            <KeyboardArrowDownIcon />
          </div>
          <Typography sx={ textStyle }>to Profile</Typography>
        </div>
        <div className={styles['action-to-project']} onClick={navigateToProjects}>
          <Typography sx={textStyle}>to Projects</Typography>
          <div className={styles['arrow-right']}>
            <NavigateNextIcon />
          </div>
        </div>
      </div>
    </>
  )
}

function scrollToProfile(e) {
  const homeMain = document.querySelector('#home-container')
  window.scrollTo({
    top: homeMain.clientHeight,
    behavior: 'smooth'
  })
}

function navigateToProjects(e) {
  const url = new URL(`${document.location.href}/projects`)
  window.location.assign(url)
}
