import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ProjectCard({ name, description, technologies, imgUrl, link }) {
  const technologyJSX = technologies
    .map(technology => (<Chip label={technology} />))
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
    <Card sx={{ maxWidth: 345 }}>
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
    </Card>
  );
}