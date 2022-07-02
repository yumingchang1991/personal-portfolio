import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { Typography, useMediaQuery } from '@mui/material'

export default function ProjectCardDesktop({ name, description, technologies, imgUrl, link, githubUrl, mediumUrl }) {
  const matches = useMediaQuery('(max-Width: 800px)')
  
  const boxStyle = {
    padding: '1rem',
    borderRadius: '0.5rem',
    backgroundColor: '#CDD4DF',
    boxShadow: '0 4px 7px 5px #e6e6e6',
    transition: 'all 0.5s ease',
    textAlign: 'center',
    '&:hover': {
      transform: 'scale(1.01)',
      cursor: 'pointer'
    }
  }
  
  const titleStyle = {
    color: '#252525',
    fontFamily: "Gloria Hallelujah",
    fontSize: '2rem',
    
  }
  
  return (
    <Box sx={boxStyle}>
      <Paper elevation={0} sx={{ width: '80vw', maxHeight: '70vh', backgroundColor: 'transparent' }}>
        <Box>
          <Stack justifyContent='space-between' alignItems='flex-start' maxHeight='70vh' maxWidth='100%' spacing={2}>
            <Stack direction={ matches ? 'column-reverse' : 'row' } spacing={2} justifyContent='space-between' alignItems='center'>
              <div>
                <Typography color={titleStyle}>{name}</Typography>
                <Typography>{description}</Typography>
              </div>
              <img
                src={imgUrl} width={'40%'}>
              </img>
            </Stack>
            <div>
              <Typography sx={{ textAlign: 'left', fontFamily: 'Courier' }}>JavaScript</Typography>
              <Typography sx={{ textAlign: 'left', fontFamily: 'Courier' }}>{technologies}</Typography>
            </div>
          </Stack>
        </Box>
        
      </Paper>
    </Box>
  )
}