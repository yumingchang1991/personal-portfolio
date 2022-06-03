import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../public/Avatar.png'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles['about-me-content']}>
      <Head>
        <script src="https://kit.fontawesome.com/c421560752.js" crossorigin="anonymous"></script>
      </Head>
      <div className={styles['avatar-container']}>
        <Image className={styles['avatar-img']} src={profilePic} alt="picture of Yu-Ming"></Image>
      </div>
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
      <section className={styles.intro}>
        <p className={styles['developer-name']}>
          Yu-Ming, Chang
        </p>
        <p className={styles.location}>Taipei</p>
        <p className={styles['intro-summary']}>
          JavaScript Developer
        </p>
        <p className={styles['intro-summary']}>
          ex-Business Analyst
        </p>
      </section>
    </div>
  )
}