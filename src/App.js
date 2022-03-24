import './App.css';
// import Navigation from './Navigation';
import NavBar from './AppBar'
import NavigationSideMenu from './Navigation-SideMenu';
import LandingPage from './LandingPage';
import WhoPage from './WhoPage'
import BackendProjects from './BackendProjects';
import FrontendProjects from './FrontendProjects';
import {Routes, Route, HashRouter} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      {/* <Navigation /> */}
      <NavBar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/who" element={<WhoPage />} />
          <Route path="/backend-projects" element={<BackendProjects />} />
          <Route path="/frontend-projects" element={<FrontendProjects />} />
        </Routes>
      </div>
      <NavigationSideMenu />
    </HashRouter>
  );
}

export default App;
