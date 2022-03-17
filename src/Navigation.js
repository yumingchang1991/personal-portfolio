import './Navigation.css'
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <nav className="sticky-navigation">
            <a href="https://yumingchang1991.github.io/personal-portfolio/" className="brand-name">
                <img className="site-logo" src="./favicon/favicon.ico" width="2rem" height="2rem" alt="this is site-logo"></img>
            </a>
            
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

export default Navigation