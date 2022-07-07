import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Link from 'next/link'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    position: 'fixed',
    bottom: 95,
    right: 27,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const avatarSx = {
  position: 'fixed',
  right: 16,
  bottom: 90,
  width: '66px',
  height: '66px',
  borderRadius: '50%',
  backgroundColor: '#252525',
  cursor: 'pointer',
}

export default function FloatingAvatar() {
  return (
    <>
      <Link href='/contact'>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Yu-Ming's Avatar" src="./ProfileSmall.png" sx={avatarSx} />
      </StyledBadge>
      </Link>
    </>
  )
}