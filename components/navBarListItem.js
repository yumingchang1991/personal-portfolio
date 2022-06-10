import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link'

import toTitleCase from '../utility/toTitleCase';

export default function NavBarListItem({ targetLocation, eventHandler }) {
  const listItemCSS = {
    fontSize: '1.5rem'
  }

  const PATH = `/${targetLocation.trim().toLowerCase()}`
  const TARGET_LOCATION = toTitleCase(targetLocation)

  return (
    <ListItem onClick={eventHandler}>
      <Link href={PATH}>
        <ListItemButton>
          <ListItemText>
            <Typography sx={listItemCSS}>
              {TARGET_LOCATION}
            </Typography>
          </ListItemText>
        </ListItemButton>
      </Link>
    </ListItem>
  )
}

