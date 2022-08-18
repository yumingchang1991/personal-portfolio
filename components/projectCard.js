import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { Typography, useMediaQuery, Link, Tooltip } from '@mui/material'

export default function ProjectCard({ project }) {
  const matches = useMediaQuery('(max-Width: 800px)')

  const boxStyle = {
    padding: '1rem',
    borderRadius: '0.5rem',
    backgroundColor: '#CDD4DF',
    boxShadow: '0 4px 7px 5px #e6e6e6',
    transition: 'all 0.5s ease',
    textAlign: 'center',
    'img': {
      transition: 'all 0.7s ease',
      borderRadius: '0.3rem'
    },
    '&:hover': {
      transform: 'scale(1.01)',
      'img': {
        transform: 'scale(0.97)'
      }
    }
  }

  const titleStyle = {
    color: '#252525',
    fontFamily: "Gloria Hallelujah",
    fontSize: '2rem'
  }

  const descriptionStyle = {
    fontFamily: "Roboto",
    textAlign: 'justify',
    paddingInline: '1.5rem'
  }

  const footerStyle = {
    textAlign: 'left',
    fontFamily: 'Roboto Mono, monospace, Monaco, Courier',
    fontSize: '0.7rem'
  }

  function onClickToDemoSite(e) {
    window.open(project.link, '_blank')
  }

  return (
    <Box sx={boxStyle}>
      <Paper elevation={0} sx={{ width: '80vw', maxHeight: '70vh', backgroundColor: 'transparent' }}>
        <Box>
          <Stack justifyContent='space-between' alignItems='flex-start' maxHeight='70vh' maxWidth='100%' spacing={2}>
            <Tooltip title="click to open demo in new tab" followCursor placement='right-end'>
              <Stack direction={matches ? 'column-reverse' : 'row'} spacing={2} justifyContent='space-between' alignItems='center' onClick={onClickToDemoSite} sx={{'&:hover': {cursor: 'pointer'}}}>
                <div>
                  <Typography sx={titleStyle}>{project.name}</Typography>
                  <Typography sx={descriptionStyle}>{project.description}</Typography>
                </div>
                <Box sx={{ maxWidth: '40%', padding: 0 }}>
                  <img
                    src={project.imgUrl} width={'100%'} alt={`This a project thumbnail of ${project.name}`}>
                  </img>
                </Box>
              </Stack>
            </Tooltip>
            <div>
              <Typography sx={ footerStyle }>{ project.language }</Typography>
              <Typography sx={ footerStyle }>{ project.technologies }</Typography>
              <Link href={project.githubUrl}>
                <Typography sx={ footerStyle }>GitHub + Readme</Typography>
              </Link>
              <Link href={project.mediumUrl}>
                <Typography sx={footerStyle}>Medium</Typography>
              </Link>
            </div>
          </Stack>
        </Box>
      </Paper>
    </Box>
  )
}