import { Route, Routes, Link } from "react-router-dom";
import './App.css';
import About from "./routers/About";
import Contact from "./routers/Contact";
import NewContact from "./routers/NewContact";
import NotFound from "./routers/NotFound";
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
        <Route path="/contact/:id" element={<NewContact/>}/>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
