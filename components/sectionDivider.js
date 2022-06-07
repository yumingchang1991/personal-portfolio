import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

export default function SectionDivider({ displayText }) {
  const style = {
    alignSelf: 'stretch',
    margin: '1rem',
    width: '80vw'
  }
  
  return (
    <>
      <Divider sx={style}>
        <Chip label={displayText}></Chip>
      </Divider>
    </>
  )
}