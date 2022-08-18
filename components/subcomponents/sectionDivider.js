import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

export default function SectionDivider({ displayText }) {
  const style = {
    alignSelf: 'stretch',
    marginBlock: '1rem',
    maxWidth: '100vw',
  }
  
  return (
    <>
      <Divider sx={style}>
        <Chip label={displayText}></Chip>
      </Divider>
    </>
  )
}