import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function FloatingButton() {
  const [ showButton, setShowButton ] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  const style = {
    position: 'fixed',
    bottom: '16px',
    right: '16px',
    opacity: 0.8,
    backgroundColor: '#252525',
    color: '#e6e6e6',
    transition: '0.3s opacity linear',
    "&:hover": {
      opacity: 1,
      backgroundColor: '#252525',
    }
  }

  return (
    <>
      {showButton && (
      <IconButton onClick={scrollToTop} sx={style}>
        <KeyboardArrowUpIcon fontSize='large' />
      </IconButton>
      )}
    </>
  )
}

function scrollToTop(e) {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}