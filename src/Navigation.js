import './Navigation.css'

function Navigation() {
    return (
        <nav className="sticky-navigation">
            <a href="https://yumingchang1991.github.io/personal-portfolio/" className="brand-name">
                Yu-Ming
            </a>
            
            <div className="navigation-list-container">
                <ul className="navigation-list">
                    <li className="navigation-item">
                        <span>
                            Who
                        </span>
                    </li>
                    <li className="navigation-item">
                        <span>
                            What
                        </span>
                    </li>
                    <li className="navigation-item">
                        <span>
                            Contact
                        </span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation