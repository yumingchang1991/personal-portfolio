import './SiteLogoText.css'
import {NavLink} from 'react-router-dom'

export default function SiteLogoText() {
  return (
    <>
        <NavLink to='./'>
          <div className='site-logo'>
            <span className='site-logo-text'>YC</span>
          </div>
        </NavLink>
    </>
  )
}