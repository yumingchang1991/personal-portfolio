import Link from 'next/link'
import Typography from '@mui/material/Typography';

const style = {
  padding: '0.2rem 0.6rem',
  fontFamily: "Gloria Hallelujah",
  fontSize: '1.4rem',
  fontWeight: 'bold',
  color: '#e6e6e6',
} 

export default function SiteLogoText() {
  return (
    <>
      <div className='site-logo' >
        <Link href='/personal-portfolio'>
          <a className='site-logo-text'>
            <Typography sx={style}>
              Yu-Ming Chang
            </Typography>
          </a>
        </Link>
      </div>
    </>
  )
}