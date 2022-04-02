import './App.css';
import NavBar from './AppBar'
import LandingPage from './LandingPage';
import AboutMe from './AboutMe'
import BackendProjects from './BackendProjects';
import FrontendProjects from './FrontendProjects';
import {Routes, Route, HashRouter} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/backend-projects" element={<BackendProjects />} />
          <Route path="/frontend-projects" element={<FrontendProjects />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
