import Divider from '@mui/material/Divider';
import styles from '../styles/Contact.module.css'

const EMAIL = 'yumingchang1991@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/yumingchang1991/'

export default function Contact() {
  return (
    <div className={styles['contact-container']}>
      <h2>
        Thank you for your interest!
      </h2>
      <Divider />
      <p>
        Pick your preference to reach out:
      </p>
      <ul className={styles['list-container']}>
        <li className={styles['list-item']} onClick={copyEmailToClipboard}>
          <email>{EMAIL}</email>
        </li>
        <li className={styles['list-item']} onClick={openInNewTab}>LinkedIn</li>
      </ul>
      <Divider />
      <a
        className={styles.link}
        href='https://www.timeanddate.com/worldclock/converter.html?iso=20220608T080000&p1=241' target='_blank'>
        Time Zone Converter
      </a>
    </div>
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