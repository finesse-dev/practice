import { Route, Routes, Link } from "react-router-dom";
import './App.css';
import About from "./routers/About";
import Contact from "./routers/Contact";
import NewContact from "./routers/NewContact";
import NotFound from "./routers/NotFound";

import Home from "./newrouters/Home";
import NewAbout from "./newrouters/NewAbout";
import Blog from "./newrouters/Blog";
import HukEffect from "./huks/HukEffect";
import HukMemo from "./huks/HukMemo";
import HukRef from "./huks/HukRef";
function App() {
  // return (
  //   <div>
  //     <nav>
  //       <ul>
  //         <li><Link to="/">About</Link></li>
  //         <li><Link to="/contact">Contact</Link></li>
  //       </ul>
  //     </nav>
  //     <Routes>
  //       <Route path="/" element={ <About/> } />
  //       <Route path="/contact">
  //         <Route index element={<Contact/>}/>
  //         <Route path=":id" element={<NewContact/>}/>
  //       </Route>
  //       {/* <Route path="/contact/:id" element={<NewContact/>}/> */}
  //       <Route path="*" element={<NotFound/>}></Route>
  //     </Routes>
  //   </div>
  // );

  return(
    // <Routes>
    //   <Route path="/" element={<Home/>}/>
    //   <Route path="/about" element={<NewAbout/>}/>
    //   <Route path="/blog" element={<Blog/>}/>
    //   <Route path="*" element={<Error/>}/>
    // </Routes>
    // <HukEffect/>
    // <HukMemo/>
    <HukRef/>
  )
}

export default App;
