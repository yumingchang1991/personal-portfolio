import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import toTitleCase from "../utility/toTitleCase"

export default function NavBarListLinkExternal({ targetLocation, targetUrl, eventHandler }) {
  const listItemCSS = {
    fontSize: '1.5rem'
  }

  return (
    <ListItem onClick={eventHandler}>
      <ListItemButton>
        <a href={targetUrl} target='_blank'>
          <ListItemText>
            <Typography sx={listItemCSS}>
              {toTitleCase(targetLocation)}
            </Typography>
          </ListItemText>
        </a>
      </ListItemButton>
    </ListItem>
  )
}