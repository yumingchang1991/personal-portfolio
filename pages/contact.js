import Head from 'next/head'
import Divider from '@mui/material/Divider';
import styles from '../styles/Contact.module.css'
import Calendly from '../components/calendly';

const EMAIL = 'yumingchang1991@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/yumingchang1991/'
const calendly = {
  eventUrl: "https://calendly.com/yumingchang1991/30-minute-career-networking-session",
  minWidth: '320px',
  height: '630px',
  overflowY: 'none'
}


export default function Contact() {
  return (
    <>
      <Head>
        <title>Backend Developer Portfolio by Yu-Ming Chang</title>
      </Head>
      <div className={styles['contact-container']}>
        <h1>
          Let's CONNECT!
        </h1>
        <ul className={styles['list-container']}>
          <li className={styles['list-item']} onClick={copyEmailToClipboard}>
            <email>{EMAIL}</email>
          </li>
          <li className={styles['list-item']} onClick={openInNewTab}>LinkedIn</li>
          <li className={styles['list-item']} onClick={scrollToCalendly}>Book a time with me</li>
        </ul>
        <Divider />
        <Calendly url={calendly.eventUrl} minWidth={calendly.minWidth} height={calendly.height} />
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
  console.log(list.offsetHeight)
  const coordinate = {
    top: list.offsetHeight,
    behavior: 'smooth'
  }
  window.scrollTo(coordinate)
}