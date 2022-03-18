import './App.css';
import Navigation from './Navigation';
import NavigationSideMenu from './Navigation-SideMenu';
import LandingPage from './LandingPage';
import WhoPage from './WhoPage'
import WhatPage from './WhatPage';
import {Routes, Route, HashRouter} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/who" element={<WhoPage />} />
          <Route path="/what" element={<WhatPage />} />
        </Routes>
      </div>
      <NavigationSideMenu />
    </HashRouter>
  );
}

export default App;
