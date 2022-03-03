import {useState} from 'react'
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import TopBar from "./components/Topbar/TopBar";
import Works from "./components/Works/Works";
import './app.scss'
import Menu from './components/Menu/Menu';


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works />
        <Testimonials />
        <Contact />
      </div>
      sec - intro -portfolio - work

    </div>
  );
}

export default App;
