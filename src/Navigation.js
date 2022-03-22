import './Navigation.css'
import {NavLink} from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="sticky-navigation">
            <a className='site-logo' href="https://yumingchang1991.github.io/personal-portfolio/">
                <span className='site-logo-text'>YC</span>
            </a>
            
            <div className="navigation-list-container">
                <ul className="navigation-list">
                    <li className="navigation-item">
                        <NavLink to="/who">
                            <span>Who</span>
                        </NavLink>
                    </li>
                    <li className="navigation-item" onClick={openSideMenu}>
                        <span>Projects</span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

function openSideMenu(e) {
    const SideMenu = document.querySelector('.project-side-menu-root')
    e.stopPropagation()
    SideMenu.style.visibility = 'visible'
    console.log('user click/touch to open project side menu')
}