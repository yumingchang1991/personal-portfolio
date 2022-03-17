import './WhoPage.css'

function WhoPage() {
    return (
        <div className="who-content">
            <div className="avatar-container">
                <img className="avatar" src="./Avatar.png" width="200px" height="211px" alt="this is avatar"></img>
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

export default WhoPage