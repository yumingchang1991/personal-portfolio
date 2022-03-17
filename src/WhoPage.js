import './WhoPage.css'

export default function WhoPage() {
    return (
        <div className="who-content">
            <div className="avatar-container">
                <img className="avatar" src="./Avatar.png" width="188px" height="196px" alt="this is avatar"></img>
            </div>
            <div className='links-container'>
                <ul className='social-media-links'>
                    <li className='link-item'>
                        <a className='link' href='https://www.linkedin.com/in/yumingchang1991/' target='_blank' rel='noreferrer'>
                            <i class="fa-brands fa-linkedin fa-2xl"></i>
                        </a>
                    </li>
                    <li className='link-item'>
                        <a className='link' href='https://github.com/yumingchang1991' target='_blank' rel='noreferrer'>
                            <i class="fa-brands fa-github-square fa-2xl"></i>
                        </a>
                    </li>
                    <li className='link-item'>
                        <a className='link' href='https://yumingchang1991.medium.com/' target='_blank' rel='noreferrer'>
                            <i class="fa-brands fa-medium fa-2xl"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <section className="intro">
                <p className="author">
                    <author>
                        Yu-Ming, Chang
                    </author>
                </p>
                <p className="location">Taipei</p>
                <p className="intro-summary">
                    JavaScript Developer
                </p>
                <p className="intro-summary">
                    Essentialism Evanglist
                </p>
            </section>
        </div>
    )
}

