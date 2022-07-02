import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import { CardActionArea, CardActions } from '@mui/material'

export default function ProjectCardMobile({ name, description, technologies, imgUrl, link, githubUrl, mediumUrl }) {
  const technologyJSX = technologies
    .map(technology => (<Chip label={technology} sx={{ margin: '0.2rem 0.2rem 0.2rem 0' }} />))
    .reduce((results, jsx) => {
      return [...results, jsx]
    }, [])

  const cardStyle = {
    flexGrow: 1
  }

  function onClickNavigation(e) {
    window.open(link, '_blank')
  }

  return (
    <Card sx={{ maxWidth: 345 }} variant='outlined' >
      <CardActionArea onClick={onClickNavigation}>
        <CardMedia
          component="img"
          height="140"
          image={imgUrl}
          alt="a screenshot of Expense Tracker"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          {technologyJSX}
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href={link} color="warning" target="_blank" rel="noreferrer">Demo</Button>
        <Button href={githubUrl} color="warning" target="_blank" rel="noreferrer">GitHub</Button>
        <Button href={mediumUrl} color="warning" target="_blank" rel="noreferrer">Medium</Button>
      </CardActions>
    </Card>
  );
}