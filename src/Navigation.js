import './Navigation.css'
import {NavLink} from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="sticky-navigation">
            <SiteLogo />
            
            <div className="navigation-list-container">
                <ul className="navigation-list">
                    <li className="navigation-item">
                        <NavLink to="/who">
                            Who
                        </NavLink>
                    </li>
                    <li className="navigation-item">
                        <NavLink to="/what">
                            What
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

function SiteLogo() {
    return (
        <a className='site-logo' href="https://yumingchang1991.github.io/personal-portfolio/">
                <span className='site-logo-text'>YC</span>
        </a>
    )
}