import useMediaQuery from '@mui/material/useMediaQuery';
import Head from 'next/head'
import styles from '../styles/Contact.module.css'
import Calendly from '../components/calendly';

const EMAIL = 'yumingchang1991@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/yumingchang1991/'

export default function Contact() {
  const matches = useMediaQuery('(max-width: 728px)')
  
  return (
    <>
      <Head>
        <title>Backend Developer Portfolio by Yu-Ming Chang</title>
      </Head>
      <div className={ matches ? styles['contact-container-flex'] : styles['contact-container-grid'] }>
        <div>
          <h2>
            Let's CONNECT!
          </h2>
          <ul className={styles['list-container']}>
            <li className={styles['list-item']} onClick={copyEmailToClipboard}>
              <email>{EMAIL}</email>
            </li>
            <li className={styles['list-item']} onClick={openInNewTab}>LinkedIn</li>
            <li className={styles['list-item']} onClick={scrollToCalendly}>Book a time with me</li>
          </ul>
        </div>
        <Calendly />
      </div>
    </>
  )
}

function openInNewTab() {
  window.open(LINKEDIN, '_blank')
}

function copyEmailToClipboard() {
  navigator.clipboard
    .writeText(EMAIL)
    .then(() => alert('email is copied to clipboard!'))
}

function scrollToCalendly() {
  const list = document.querySelector('ul')
  const coordinate = {
    top: list.offsetHeight,
    behavior: 'smooth'
  }
  window.scrollTo(coordinate)
}