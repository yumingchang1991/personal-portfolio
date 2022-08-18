import styles from '../styles/About.module.css'
import SectionDivider from './subcomponents/sectionDivider'
import useMediaQuery from '@mui/material/useMediaQuery'
import Link from 'next/link'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import CodeIcon from '@mui/icons-material/Code';

export default function About() {
  const matches = useMediaQuery('(max-width: 728px)')
  
  const sectionText = {
    MORE: 'MORE',
    ROLES: 'ROLES',
    LANGUAGES: 'LANGUAGES'
  }

  return (
    <div className={matches ? styles['about-me-layout-mobile'] : styles['about-me-layout-desktop']}>
      <img className={styles['avatar-image']} src='https://yumingchang1991.github.io/personal-portfolio/ProfileLarge.png' width={matches ? '280px' : '550px'} alt="a profile picture of Yu-Ming"></img>
      <div className={styles['profile-information-section']}>
        {/* name & location */}
        
          <p className={matches ? styles['developer-name-mobile'] : styles['developer-name-desktop']}>
            Yu-Ming, Chang
          </p>
          <div className={matches ? styles['location-mobile'] : styles['location-desktop']}>
            <img className={styles['taiwan-flag']} src='https://yumingchang1991.github.io/personal-portfolio/taiwan.png'></img>
            <span>
              Taipei, Taiwan
            </span>
          </div>
        
        <SectionDivider displayText={sectionText.ROLES}></SectionDivider>
        <p className={matches ? styles['intro-summary-mobile'] : styles['intro-summary-desktop']}>
          JavaScript Developer
        </p>
        <p className={matches ? styles['intro-summary-mobile'] : styles['intro-summary-desktop']}>
          Writer in Dev Genius Publication
        </p>
        <SectionDivider displayText={sectionText.LANGUAGES}></SectionDivider>
        <p className={matches ? styles['intro-summary-mobile'] : styles['intro-summary-desktop']}>
          JavaScript, TypeScript, C
        </p>

        <SectionDivider displayText={sectionText.MORE}></SectionDivider>
        <ul className={styles['more']}>
          <Link href='/projects'>
            <li className={styles['link-item']}>
              <CodeIcon fontSize='large' />
              <p>browse projects I built</p>
            </li>
          </Link>
          <a href='https://www.linkedin.com/in/yumingchang1991/' target='_blank' rel='noreferrer'>
            <li className={styles['link-item']}>
              <LinkedInIcon fontSize='large'/>
              <p>screen my experiences</p>
            </li>
          </a>
          <a href='https://github.com/yumingchang1991' target='_blank' rel='noreferrer'>
            <li className={styles['link-item']}>
              <GitHubIcon fontSize='large' />
              <p>check my codes</p>
            </li>
          </a>
          <a href='https://yumingchang1991.medium.com/' target='_blank' rel='noreferrer'>
            <li className={styles['link-item']}>
              <AutoStoriesIcon fontSize='large' />
              <p>read my articles on Medium</p>
            </li>
          </a>
        </ul>
      </div>
    </div>
  )
}