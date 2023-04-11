import { Route, Routes, Link } from "react-router-dom";
import './App.css';
import About from "./routers/About";
import Contact from "./routers/Contact";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
    </div>
  );
}

export default App;
