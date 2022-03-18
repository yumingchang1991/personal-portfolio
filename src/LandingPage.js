import './LandingPage.css';

function LandingPage() {
    const LandingTitle = `Welcome`
    const LandingDescription = `This is my web portfolio`
    return (
        <div className="landing-content">
            <h1 className="landing-title">{LandingTitle}</h1>
            <p className="landing-body">{LandingDescription}</p>
            {/* <i class="swipe-down-icon fa-solid fa-angles-down fa-2xl"></i> */}
        </div>
    )
}

export default LandingPage