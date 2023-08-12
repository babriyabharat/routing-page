import {Routes, Route } from "react-router-dom";
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="About" element={<About />}/>
        <Route path="Contact" element={<Contact />}/>
      </Routes>
    
    </div>
  );
}

export default App;
