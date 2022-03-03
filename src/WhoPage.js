import './WhoPage.css'

function WhoPage() {
    return (
        <div className="who-content">
            <div className="avatar-container">
                <img className="avatar" src="./Avatar.png" width="188px" height="194px" alt="this is avatar"></img>
            </div>
            <section className="intro">
                <p className="author">
                    <author>
                        Yu-Ming, Chang
                    </author>
                </p>
                <p className="location">Taipei, Taiwan</p>
                <p className="intro-summary">
                    JavaScript Developer
                </p>
                <p className="intro-summary">
                    best with <em>React.js</em> and <em>Node.js</em>
                </p>
            </section>
        </div>
    )
}

export default WhoPage