import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function FloatingButton() {
  const style = {
    position: 'fixed',
    bottom: '16px',
    right: '16px'
  }

  return (
    <>
      <IconButton onClick={scrollToTop}  sx={style}>
        <KeyboardArrowUpIcon size='large' />
      </IconButton>
    </>
  )
}

function scrollToTop(e) {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}