import styles from '../styles/About.module.css'
import SectionDivider from './sectionDivider'

export default function About() {
  const sectionText = {
    MEDIA: 'Social Media',
    CURRENT: 'Current',
    EXPERIENCE: 'Experience',
    LANGUAGES: 'Languages',
    ATTRIBUTION: 'Attribution'
  }

  return (
    <div className={styles['about-me-content']}>
      <div className={styles['avatar-container']}>
        <img className={styles['avatar-img']} src='./Avatar.png' width="188px" height="196px" alt="a picture of Yu-Ming"></img>
      </div>
      <section className={styles.intro}>
        <p className={styles['developer-name']}>
          Yu-Ming, Chang
        </p>
        <div className={styles.location}>
          <img className={styles['taiwan-flag']} src='taiwan.png'></img>
          <span>
            Taipei, Taiwan
          </span>
        </div>
      </section>
      <SectionDivider displayText={sectionText.CURRENT}></SectionDivider>
      <p className={styles['intro-summary']}>
        JavaScript Developer
      </p>
      <p className={styles['intro-summary']}>
        Technical Writer
      </p>
      <SectionDivider displayText={sectionText.LANGUAGES}></SectionDivider>
      <p className={styles['intro-summary']}>
        JavaScript
      </p>
      <p className={styles['intro-summary']}>
        C
      </p>
      <p className={styles['intro-summary']}>
        VBA
      </p>
      <SectionDivider displayText={sectionText.EXPERIENCE}></SectionDivider>
      <p className={styles['intro-summary']}>
        Commodity Manager
      </p>
      <p className={styles['intro-summary']}>
        Sr. Business Analyst
      </p>
      <SectionDivider displayText={sectionText.MEDIA}></SectionDivider>
      <div className={styles['links-container']}>
        <ul className={styles['social-media-links']}>
          <li className={styles['link-item']}>
            <a className={styles.link} href='https://www.linkedin.com/in/yumingchang1991/' target='_blank' rel='noreferrer'>
              <i class="fa-brands fa-linkedin fa-2xl"></i>
            </a>
          </li>
          <li className={styles['link-item']}>
            <a className={styles.link} href='https://github.com/yumingchang1991' target='_blank' rel='noreferrer'>
              <i class="fa-brands fa-github-square fa-2xl"></i>
            </a>
          </li>
          <li className={styles['link-item']}>
            <a className={styles.link} href='https://yumingchang1991.medium.com/' target='_blank' rel='noreferrer'>
              <i class="fa-brands fa-medium fa-2xl"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}