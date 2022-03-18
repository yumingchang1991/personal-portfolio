import './Navigation-SideMenu.css';
import { NavLink } from "react-router-dom";

export default function NavigationSideMenu() {
  return (
    <div className='project-side-menu-root'>
      <ul className='project-side-menu-list'>
        <div className='side-menu-close-button' onClick={closeSideMenu}>
          <i class="fa-solid fa-xmark fa-2xl"></i>
        </div>
        <li className='side-menu-item' onClick={closeSideMenu}>
          <NavLink to='/backend-projects'>
            <span>Backend Projects</span>
          </NavLink>
        </li>
        <li className='side-menu-item' onClick={closeSideMenu}>
          <NavLink to='/frontend-projects'>
            <span>Frontend Projects</span>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

function closeSideMenu(e) {
  const SideMenu = document.querySelector('.project-side-menu-root')
  console.log('user clicked/touched to close project side menu')
  e.stopPropagation()
  SideMenu.style.visibility = 'hidden'
}