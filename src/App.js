import './App.css';
import Navigation from './Navigation';
import LandingPage from './LandingPage';
import WhoPage from './WhoPage'
import {Routes, Route, HashRouter} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/who" element={<WhoPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
