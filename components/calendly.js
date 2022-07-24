import { useEffect } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function Calendly () {
  const matches = useMediaQuery('(max-width: 728px)')
  const eventUrl = "https://calendly.com/yumingchang1991/30-minute-career-networking-session"
  const boxShadow = '-0.2rem 0.2rem 0.2rem #e6e6e6'
  const minWidth = '340px'
  const height = '650px'

  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js'
    );
    head.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={eventUrl}
      style={{ minWidth, height, boxShadow: matches ? '' : boxShadow }}
    />
  )
};